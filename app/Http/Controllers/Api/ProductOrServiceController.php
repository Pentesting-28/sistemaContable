<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ProductOrService;
use Illuminate\Support\Facades\Validator;
use Exception;

class ProductOrServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = ProductOrService::all();
            return response()->json([
                'message' => 'Lista de productos o servicios',
                'data'    => $data
            ],200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'ProductOrService.index.failed',
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
            $validator = Validator::make($request->all(),[
                'name' => 'required|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ],422);
            }
            $data = ProductOrService::create($request->all());
            return response()->json([
                'message' =>  'Producto o servicio creado con éxito',
                'data'    =>  $data
            ],200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'ProductOrService.store.failed',
                'message'=> $e->getMessage(),
            ],505);
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
            $data = ProductOrService::findOrFail($id);
            return response()->json([
                'message' => 'Detalle del producto o servicio',
                'data'    => $data
            ],200);
        } catch (Exception $e) {
            return response()->json([
                'error'   => 'ProductOrService.show.failed',
                'message' => $e->getMessage(),
            ],505);
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
            $validator = Validator::make($request->all(),[
                'name' => 'required|string',
            ]);
            if($validator->fails()){
                return response()->json([
                    'error'=>$validator->errors()
                ],422);
            }
            $data = ProductOrService::findOrFail($id);
            $data->update($request->all());
            $data->fresh();
            return response()->json([
                'message' => 'Producto o servicio actualizado con éxito',
                'data'    => $data
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'ProductOrService.update.failed',
                'message' => $e->getMessage(),
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
            $data = ProductOrService::findOrFail($id);
            $data->delete();
            return response()->json([
                'message' => 'Producto o servicio eliminado con éxito',
                'data' => $data
            ],200);
        } catch (Exception $e) {
            return response()->json([
                'error' => 'ProductOrService.update.failed',
                'message' => $e->getMessage(),
            ],505);
        }
    }
}
