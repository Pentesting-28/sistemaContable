<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Donation;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Response;
use Validator;
use Exception;

class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        try {
            $donation = Donation::all();
            return response()->json([
                "message" =>'Lista de donaciones',
                "data" => $donation,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'donation.index.failed',
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
            $validator = Validator::make($request->all(), [
                'name_of_income' => 'required|string',
                'income_details' => 'required|string',
                'value'          => 'required|between:0,99.99'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $donation = Donation::create($request->all());
            return response()->json([
                "message" =>'Donación creada con éxito',
                "data" => $donation,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'donation.store.failed',
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
            $donationShow = Donation::findOrFail($id);
            return response()->json([
                "message" =>'Detalles de la donación',
                "data" => $donationShow,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'donation.show.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name_of_income' => 'required|string',
                'income_details' => 'required|string',
                'value'          => 'required|between:0,99.99'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $donationUpd = Donation::findOrFail($id);
            $donationUpd->update($request->all());
            $donationUpd->fresh();
            return response()->json([
                "message" =>'Donación actualizada con éxito',
                "data" => $donationUpd,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'donation.update.failed',
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
            $donation = Donation::findOrFail($id);
            $donation->delete();
            return response()->json([
                "message" =>'Donación eliminada con éxito',
                "data" => $donation,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'donation.delete.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
