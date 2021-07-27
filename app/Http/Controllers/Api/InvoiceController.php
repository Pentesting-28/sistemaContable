<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Invoice;
use Validator;
use Exception;

class InvoiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        try {
            $data = Invoice::with('donations_invoice.donation','collect_money.type_payment','user','client')
                ->orderBy('created_at', 'desc')->get();
            return response()->json([
                'data' => $data
            ]);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'invoice.index.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
         try {
            DB::beginTransaction();
            $validator = Validator::make($request[0], [
                'number' => 'required|string',
                'amount' => 'required',
                'client_id' => 'required'
            ]);
            $validator = Validator::make($request[1], [
                'quantity'   => 'required|string',
                'amount'     => 'required',
                'donation_id'=> 'required' // table donation_invoices
            ]);
            $validator = Validator::make($request[2], [
                'amount'     => 'required'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $data = $request[0];
            $data['user_id'] = Auth::id();
            $invoice = Invoice::create($data);

            foreach ($request[1] as $value) {
                $invoice->donations_invoice()->create($value);
            }

            $invoice->collect_money()->create($request[2]);
            $data = Invoice::where('id', $invoice->id)
                            ->with('donations_invoice.donation','collect_money','user','client')
                            ->first();
            DB::commit();
            return response()->json([
                "message" =>'Factura creada con éxito',
                "data" => $data,
            ], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'error'  => 'invoice.store.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function show($id)
    {
        try {
            $invoiceShow = Invoice::where('id', $id)
                            ->with('donations_invoice.donation','collect_money.type_payment', 'client')
                            ->first();
            return response()->json([
                "message" =>'Detalles de factura',
                "data" => $invoiceShow,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'invoice.show.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return JsonResponse
     */
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $validator = Validator::make($request[0], [
                'number' => 'required|string',
                'amount' => 'required'
            ]);
            Validator::make($request[1], [
                'quantity'   => 'required|string',
                'amount'     => 'required',
                'donation_id'=> 'required' // table donation_invoices
            ]);
            $validator = Validator::make($request[2], [
                'amount'     => 'required'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $data = $request[0];
            $data['user_id'] = Auth::id();
            $invoiceUpd = Invoice::findOrFail($id);
            $invoiceUpd->update($data);
            foreach ($request[1] as $value) {
                $invoiceUpd->donations_invoice()->updateOrCreate([
                  'id' =>  $value['id']
                ], collect($value)->except(['donation','sub_total'])->toArray());
                // update(collect($value)->except(['donation','sub_total'])->toArray());
            }
            $invoiceUpd->collect_money()->update($request[2]);
            $data = Invoice::where('id', $invoiceUpd->id)
                            ->with('donations_invoice.donation','collect_money','user','client')
                            ->first();
            DB::commit();
            return response()->json([
                "message" =>'Factura actualizada con éxito',
                "data" => $data,
            ], 200);
        } catch (Exception $e) {
            DB::rollBack();
            return response()->json([
                'error'  => 'invoice.update.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return JsonResponse
     */
    public function destroy($id)
    {
        try {
            $invoice = Invoice::whereId($id)->update([
                'status' => 0
            ]);

            $data = Invoice::where('id', $id)
                            ->with('donations_invoice.donation','collect_money','user','client')
                            ->first();
            // $invoice->delete();
            return response()->json([
                "message" =>'Factura anulada con éxito',
                "data" => $data,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'invoice.destroy.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
