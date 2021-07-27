<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Expense;
use Illuminate\Http\Response;
use Validator;
use Exception;

class ExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        try {
            $data = Expense::with('type_expenses','type_payment')
                ->orderBy('created_at', 'desc')->get();

            return response()->json([
                'data' => $data
            ]);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'expense.index.failed',
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
                'type_expenses_id' => 'required',
                'quantity' => 'required',
                'date_payment_expense' => 'required',
                'type_payment_id' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }

            $data = Expense::create($request->all());
            $data = Expense::where('id', $data->id)
                            ->with('type_expenses','type_payment')
                            ->first();

            return response()->json([
                "message" =>'Gasto creada con éxito',
                "data" => $data,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'expense.store.failed',
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
            $expenseShow = Expense::findOrFail($id)->orderBy('created_at', 'ASC')->get();;
            return response()->json([
                "message" =>'Detalles de gasto',
                "data" => $expenseShow,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'expense.show.failed',
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
            $validator = Validator::make($request->all(), [
                'type_expenses_id' => 'required',
                'quantity' => 'required',
                'date_payment_expense' => 'required',
                'type_payment_id' => 'required'
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $data = Expense::findOrFail($id);
            $data->update($request->all());

            $data = Expense::where('id', $id)
                            ->with('type_expenses','type_payment')
                            ->first();

            return response()->json([
                "message" =>'Gasto creada con éxito',
                "data" => $data,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'expense.store.failed',
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
            $expense = Expense::findOrFail($id);
            $expense->delete();
            return response()->json([
                "message" =>'Gasto eliminado con éxito',
                "data" => $expense,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'Expense.destroy.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
