<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Collect_money extends Model
{
    protected $table = 'collect_moneys';
    protected $fillable = ['amount','invoice_id','type_payment_id'];

    public function invoice(){
    	return $this->belongsTo('App\Models\Invoice');
    }

    public function type_payment(){
    	return $this->belongsTo('App\Models\TypePayment');
    }

}
