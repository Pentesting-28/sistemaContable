<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\User;
use Exception;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //User index
    public function index()
    {
        try {
            $users = User::where('id', "<>", Auth::id())->with('role')->get();
            return response()->json([
                "message" =>'Lista de usuarios',
                "data" => $users,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'users.index.failed',
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
    //User store
    public function store(Request $request)
    {
         try {
            $validator = Validator::make($request->all(), [
                'name'             => 'required|string',
                'email'            => 'required|string|email|unique:users',
                'password'         => 'required|string|min:6|confirmed',
                'password_confirmation' => 'required|same:password',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $user           = new User();
            $user->name     = $request->name;
            $user->email    = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();
            return response()->json([
                "message" =>'Usuario creado con éxito',
                "data" => $user,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'users.store.failed',
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
    //User show
    public function show($id)
    {
        try {
            if($id == Auth::id()){
                return response()->json([
                    "message" =>'Usuario no encontrado',
                ], 505);
            }
            $userShow = User::findOrFail($id);
            return response()->json([
                "message" =>'Detalles de usuario',
                "data" => $userShow,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'users.show.failed',
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
    //User update
    public function update(Request $request, $id)
    {
        try {
            if($id == Auth::id()){
                return response()->json([
                    "message" =>'Usuario no encontrado',
                ], 505);
            }
            $validator = Validator::make($request->all(), [
                'name'     => 'required|string|max:255',
                'email' => "required|string|email|max:255|unique:users,email,$id"
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }
            $user =  User::findOrFail($id);
            $user->name     = $request->name;
            $user->email    = $request->email;
            $user->save();
            $user->fresh();// devuelve una nueva instancia de modelo de la base de datos. No afecta a la instancia actual.

            $user->role()->sync($request->role_id);
            $users = User::whereId($id)->with('role')->first();
            return response()->json([
                "message" =>'Usuario actualizado con éxito',
                "data" => $users,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'users.update.failed',
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
    //User destroy
    public function destroy($id)
    {
        try {
            if($id == Auth::id()){
                return response()->json([
                    "message" =>'Usuario no encontrado',
                ], 505);
            }
            $deletedUser = User::findOrFail($id);
            $deletedUser->delete();
            return response()->json([
                "message" =>'Usuario eliminado con éxito',
                "data" => $deletedUser,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'users.delete.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
