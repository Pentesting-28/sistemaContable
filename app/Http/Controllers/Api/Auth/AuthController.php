<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use App\Models\Role;
use Illuminate\Http\Request;
use App\User;
use Validator;
use Exception; 


class AuthController extends Controller
{
    //Register
    public function signup(Request $request)
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
            $user->email_verified_at = now();
            $user->password = Hash::make($request->password);
            $user->save();

            Auth::attempt([
                'email' => $request->email,
                'password' => $request->password
            ]);

            $user = Auth::user();
            $user->role()->attach($request->role_id);

            $success = [
                "token" => $user->createToken('sistemacontable')->accessToken,
                "user"  => $user->where('id', $user->id)->with('role.permissions')->first(),// User::where('id',$user->id)->with('role.permissions')->get(),
            ];

            return response()->json([
                "message" =>'Registrado con éxito',
                "data" => $success,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'auth.signup.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
    
    //Start of session
    public function login(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'email'       => 'required|string|email',
                'password'    => 'required|string',
                'remember_me' => 'boolean',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }

            $credentials = ['email' => request('email'), 'password' => request('password')];
            if (!Auth::attempt($credentials)) {
                return response()->json(['error'=>'No autorizado'], 401);
            }

            $user = Auth::user();

            $success = [
                "token" => $user->createToken('sistemacontable')->accessToken,
                "user"  => $user->where('id', $user->id)->with('role.permissions')->first(),
            ];

            return response()->json([
                "message" => 'Inicio de sesión con éxito',
                'data' => $success,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'auth.login.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    public function infoUser()
    {
        try {
            
            $user = Auth::user();

            $success = [
                "user"  => $user->where('id', $user->id)->with('role.permissions')->first(),
            ];

            return response()->json([
                "message" => 'Informacion de usuario',
                'data' => $success,
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'auth.login.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
    
    //Update profile
    public function update(Request $request)
    {
        try {
            $user = Auth::user();

            $validator = Validator::make($request->all(), [
                'name'            => 'sometimes|string',
                'email'           => "sometimes|string|email|unique:users,email,$user->id",
                'old_password'    => 'requiredWith:new_password|string',
                'new_password'    => 'sometimes|min:6|string',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'error'=>$validator->errors()
                ], 422);
            }

            if ($request->has(['old_password', 'new_password'])) {
                if (!Hash::check($request->old_password, $user->password)) {
                    return response()->json(["old_password"=>['old password not match.']]);
                }
                $request['password'] = Hash::make($request->new_password);
            }

            $user->update($request->all());

            $user->fresh();//fresh () es una operación inmutable: devuelve una nueva instancia de modelo de la base de datos.

            return response()->json([
                "message" =>'Perfil actualizado con éxito',
                "data" => $user,
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'auth.update.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }

    //Session closure
    public function logout(Request $request)
    {
        try {
            $request->user()->token()->revoke();
            return response()->json([
                "message" => 'Cierre de sesión con éxito',
            ], 200);

        } catch (Exception $e) {
            return response()->json([
                'error'  => 'auth.logout.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
