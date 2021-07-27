<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TypeExpense extends Model
{
    protected $fillable = ['name','quantity','product_or_service_id'];

    public function expense(){
        return $this->hasOne('App\Models\Expense');
    }


    public function product_or_service(){
        return $this->belongsTo('App\Models\ProductOrService');
    }
}
