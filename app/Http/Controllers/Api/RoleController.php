<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Models\Role;
use App\Models\Permission;
use Exception;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $rols = Role::with('permissions')->get();
            return response()->json([
                "message" =>'Lista de roles',
                "data" => $rols,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'role.index.failed',
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
                'name'        => 'required|max:50|unique:roles,name',
                'slug'        => 'required|max:50|unique:roles,slug',
                'permission'  => 'required'
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $role = Role::create($request->all());
            // if($request->get('permission')){
                //return $request->all();
                $role->permissions()->sync($request->get('permission'));
            // }
            $rols = Role::whereId($role->id)->with('permissions')->first();
            return response()->json([
                "message" =>'Rol creado con éxito',
                "data" => $rols,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'role.store.failed',
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
            $role = Role::findOrFail($id);
            $permission_role = [];
            foreach ($role->permissions as $permission) {
                $permission_role[] = $permission->id;
            }
            $permissions = Permission::get();
            $success = [
                "rol" => $role,
                "permission_role" => $permission_role,
                'permissions' => $permissions,
            ];
            return response()->json([
                "message" =>'Detalles del rol',
                "data" => $success,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'role.show.failed',
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
                'name'        => "required|max:50|unique:roles,name,$id",
                'slug'        => "required|max:50|unique:roles,slug,$id",
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $role = Role::findOrFail($id);
            $role->update($request->all());
            //return $request->all();
            // if($request->get('permission')){
                //return $request->all();
                $role->permissions()->sync($request->get('permission'));
            // }
            $rols = Role::whereId($id)->with('permissions')->first();
            return response()->json([
                "message" =>'Rol actualizado con éxito',
                "data" => $rols,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'role.update.failed',
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
            $delte_role=Role::findOrFail($id);
            $delte_role->delete();
            return response()->json([
                "message" =>'Rol eliminado con éxito',
                "data" => $delte_role,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'role.delete.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
