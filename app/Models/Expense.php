<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
	protected $fillable = ['quantity','type_expenses_id','type_payment_id','date_payment_expense'];

	public function type_expenses(){
    	return $this->belongsTo('App\Models\TypeExpense');
    }

    public function type_payment(){
    	return $this->belongsTo('App\Models\TypePayment');
    }
}
