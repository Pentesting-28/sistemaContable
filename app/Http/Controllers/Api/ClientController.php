<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use Validator;
use Exception;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $client = Client::all();
            return response()->json([
                "message" =>'Lista de clientes',
                "data" => $client,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'client.index.failed',
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
                'name'              => 'required|string',
                'dni'               => 'required',
                'address'           => 'string|nullable',
                'cellular'          => 'string|nullable',
                'residential_phone' => 'string|nullable',
                'email'             => 'string|email|unique:clients|nullable',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $client = Client::create($request->all());
            return response()->json([
                "message" =>'Cliente creado con éxito',
                "data" => $client,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'company.store.failed',
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
            $clientShow = Client::findOrFail($id);
            return response()->json([
                "message" =>'Detalles del cliente',
                "data" => $clientShow,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'client.show.failed',
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
                'name'              => 'required|string',         
                'email'             => "nullable|email|unique:clients,email,$id",
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $client = Client::findOrFail($id);
            $client->update($request->all());
            $client->fresh();
            return response()->json([
                "message" =>'Cliente actualizado con éxito',
                "data" => $client,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'client.update.failed',
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
            $client=Client::findOrFail($id);
            $client->delete();
            return response()->json([
                "message" =>'Cliente eliminado con éxito',
                "data" => $client,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'client.delete.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    public function searchClient(Request $request)
    {
        // $data = Client::where('dni','LIKE',"%$request->search%")
        $data = Client::whereId($request->search)->first();
                            

        // if ($data->count() > 0) {
            return response()->json([
                'data' =>  $data
            ], 200);
        // }else {
        //     return response()->json([
        //         'message' => 'not data client',
        //         'data' =>  $data->first()
        //     ], 505);
        // }
        
    }
}
