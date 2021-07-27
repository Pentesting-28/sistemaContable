<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TypeExpense;
use Validator;
use Exception; 

class TypeExpenseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $type_expense = TypeExpense::with('product_or_service')->get();
            return response()->json([
                "message" =>'Lista de tipos de gasto',
                "data" => $type_expense,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'Type_expense.index.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name'     => 'string',
                'quantity' => 'required',
                'product_or_service_id'     => 'required'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            
            $type_expense = TypeExpense::create($request->all());

            $data = TypeExpense::where('id', $type_expense->id)
                        ->with('product_or_service')
                        ->first();

            return response()->json([
                "message" =>'Tipo de gasto creado con éxito',
                "data" => $data,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'type_expense.store.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $type_expenseShow = TypeExpense::findOrFail($id);
            return response()->json([
                "message" =>'Detalles del tipo de gasto',
                "data" => $type_expenseShow,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'type_expense.show.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $validator = Validator::make($request->all(), [
                'name'     => 'string',
                'quantity' => 'required',
                'product_or_service_id'     => 'required'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $type_expense = TypeExpense::findOrFail($id);
            $type_expense->update($request->all());
            $type_expense->fresh();

            $data = TypeExpense::where('id', $id)
                        ->with('product_or_service')
                        ->first();
            return response()->json([
                "message" =>'Tipo de gasto actualizado con éxito',
                "data" => $data,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'type_expense.update.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $type_expense = TypeExpense::findOrFail($id);
            $type_expense->delete();
            return response()->json([
                "message" =>'Gasto eliminado con éxito',
                "data" => $type_expense,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'type_expense.delete.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
