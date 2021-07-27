<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Authentication
Route::group(['prefix' => 'auth'], function () {
	Route::post('login', 'Api\Auth\AuthController@login');
	Route::post('signup', 'Api\Auth\AuthController@signup');

	Route::group(['middleware' => 'auth:api'], function() {
		Route::post('logout', 'Api\Auth\AuthController@logout');
		Route::put("update", "Api\Auth\AuthController@update");
		Route::get("info", "Api\Auth\AuthController@infoUser");
	});
});

// User
Route::group(['prefix' => 'users'], function () {
	Route::group(['middleware' => 'auth:api'], function() {
	    Route::get("/", "Api\UserController@index");
	    Route::post("/store", "Api\UserController@store");
	    Route::get("/{id}", "Api\UserController@show");
	    Route::put("/{id}", "Api\UserController@update");
	    Route::delete("/{id}", "Api\UserController@destroy");
	});
});

// Rol
Route::group(['prefix' => 'rol'], function () {
	Route::group(['middleware' => 'auth:api'], function() {
	    Route::get("/", "Api\RoleController@index");
	    Route::post("/store", "Api\RoleController@store");
	    Route::get("/{id}", "Api\RoleController@show");
	    Route::put("/{id}", "Api\RoleController@update");
	    Route::delete("/{id}", "Api\RoleController@destroy");
	});
});

// Permissions
Route::group(['prefix' => 'permission'], function () {
	Route::group(['middleware' => 'auth:api'], function() {
	    Route::get("/", "Api\PermissionController@index");
	});
});

//Company
Route::group(['prefix'=>'company'], function(){
	Route::group(['middleware' => 'auth:api'], function(){
		Route::get("/", 'Api\CompanyController@index');
	    Route::post("/store", "Api\CompanyController@store");
	    Route::get("/{id}", "Api\CompanyController@show");
	    Route::put("/{id}", "Api\CompanyController@update");
	    Route::post("/updateImg", "Api\CompanyController@updateImg");//Actualizar imagen
	    Route::delete("/{id}", "Api\CompanyController@destroy");
	});
});

//Client
Route::group(['prefix'=>'client'], function(){
	Route::group(['middleware' => 'auth:api'], function(){
		Route::get("/", 'Api\ClientController@index');
	    Route::post("/store", "Api\ClientController@store");
	    Route::get("/{id}", "Api\ClientController@show");
	    Route::put("/{id}", "Api\ClientController@update");
	    Route::delete("/{id}", "Api\ClientController@destroy");
	    Route::post("/search", "Api\ClientController@searchClient");
	});
});

//Donation
Route::group(['prefix'=>'donation'], function(){
	Route::group(['middleware' => 'auth:api'], function(){
		Route::get("/", 'Api\DonationController@index');
	    Route::post("/store", "Api\DonationController@store");
	    Route::get("/{id}", "Api\DonationController@show");
	    Route::put("/{id}", "Api\DonationController@update");
	    Route::delete("/{id}", "Api\DonationController@destroy");
	});
});

//Invoice
Route::group(['prefix'=>'invoice'], function(){
	Route::get("/{id}", "Api\InvoiceController@show");
	Route::group(['middleware' => 'auth:api'], function(){
		Route::get("/", 'Api\InvoiceController@index');
	    Route::post("/store", "Api\InvoiceController@store");
	    Route::put("/{id}", "Api\InvoiceController@update");
	    Route::delete("/{id}", "Api\InvoiceController@destroy");
	    Route::get("/{id}/send", "Api\MailInvoiceController@send");// path when sending mail
	    Route::get("/{id}/download", "Api\Reports\PdfInvoiceController@download");// path pdf download
	});
	Route::get("/{id}/view", "Api\Reports\PdfInvoiceController@view");// path pdf view
});

//TypePayment
Route::group(['prefix'=>'type_payment'], function(){
	Route::group(['middleware' => 'auth:api'], function(){
		Route::get("/", 'Api\TypePaymentController@index');
	});
});

//TypeExpense
Route::group(['prefix'=>'type_expense'], function(){
	Route::group(['middleware' => 'auth:api'], function(){
		Route::get("/", 'Api\TypeExpenseController@index');
	    Route::post("/store", "Api\TypeExpenseController@store");
	    Route::get("/{id}", "Api\TypeExpenseController@show");
	    Route::put("/{id}", "Api\TypeExpenseController@update");
	    Route::delete("/{id}", "Api\TypeExpenseController@destroy");
	});
});

//Expense
Route::group(['prefix'=>'expense'], function(){
	Route::group(['middleware' => 'auth:api'], function(){
		Route::get("/", 'Api\ExpenseController@index');
	    Route::post("/store", "Api\ExpenseController@store");
	    Route::get("/{id}", "Api\ExpenseController@show");
	    Route::put("/{id}", "Api\ExpenseController@update");
	    Route::delete("/{id}", "Api\ExpenseController@destroy");
	});
});

//Filter
Route::group(['prefix'=>'filter'], function(){
	Route::group(['middleware' => 'auth:api'], function(){
		Route::get("/{opc}/{ini}/{end}/{donation}/{product_service_id}/{type_expense_id}/{export}", 'Api\FilterController@motion_type_filter');
	});
});

//Product Or Service
Route::group(['prefix' => 'product_or_service'], function () {
    Route::group(['middleware' => ['auth:api']], function () {
        Route::get("/", 'Api\ProductOrServiceController@index');
	    Route::post("/store", "Api\ProductOrServiceController@store");
	    Route::get("/{id}", "Api\ProductOrServiceController@show");
	    Route::put("/{id}", "Api\ProductOrServiceController@update");
	    Route::delete("/{id}", "Api\ProductOrServiceController@destroy");
    });
});
