<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Company;
use App\Models\Image ;
use Validator;
use Exception;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $company = Company::with('image')->get();
            return response()->json([
                "message" =>'Lista de compañias',
                "data" => $company,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'company.index.failed',
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
                'ruc'     => 'required|string',
                'address' => 'required|string',
                'phone'   => 'required|string',
                'name'    => 'required|string',
                'photo'   => 'image|mimes:png,jpg,jpeg',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $company = Company::create($request->all());
            if ($request->hasFile('photo')) {
                $request["name"] = uniqid().$request->file('photo')->getClientOriginalName();
                $file = str_replace(" ", "_", $request["name"]);
                $request["name"] = str_replace(" ", "_", $request["name"]);
                $request["path"] = $path = config('app.url').'/storage/'.$request->file('photo')->storeAs('images', $file,'public');
                $request["company_id"] = $company->id;
                $companyImg = Image::create($request->all());
            }
            return response()->json([
                "message" =>'Registro creado con éxito',
                "data" => $company->where('id', $company->id)->with('image')->first(),
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
            $company = Company::findOrFail($id);
            $companyShow = $company->where('id', $company->id)->with('image')->first();
            return response()->json([
                "message" =>'Detalles del registro',
                "data" => $companyShow,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'company.show.failed',
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
                'ruc'     => 'required|string',
                'address' => 'required|string',
                'phone'   => 'required|string',
                'name'   => 'required|string',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $company = Company::findOrFail($id);
            $company->update($request->all());
            $company->fresh();
            return response()->json([
                "message" =>'Registro actualizado con éxito',
                "data" => $company->where('id', $company->id)->with('image')->first(),
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'company.update.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    public function updateImg(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'photo' => 'image|mimes:png,jpg',
                'company_id' => 'required'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            if ($request->hasFile('photo')) {
                $request["name"] = uniqid().$request->file('photo')->getClientOriginalName();
                $file = str_replace(" ", "_", $request["name"]);
                $request["name"] = str_replace(" ", "_", $request["name"]);
                $request["path"] = $path = config('app.url').'/storage/'.$request->file('photo')->storeAs('images', $file,'public');
                
                if($companyImg = Image::find($request->company_id)){//$request->company_id contiene el id que hace referencia a la tabla companies 
                    $companyImg->update($request->all());
                    $companyImg->fresh();
                    $message = [
                        'Imagen actualizada con éxito'
                    ];
                }
                else{
                    $companyImg = Image::create($request->all());
                    $message = [
                        'Imagen creada con éxito'
                    ];
                }

                $company = Company::findOrFail($request->company_id);
            }
            return response()->json([
                "message" => $message,
                "data" => $company->where('id', $company->id)->with('image')->first()
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'company.updateImg.failed',
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
            $company=Company::findOrFail($id);
            $company->delete();
            return response()->json([
                "message" =>'Registro eliminado con éxito',
                "data" => $company,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'company.delete.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
