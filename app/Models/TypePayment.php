<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TypePayment extends Model
{
    protected $fillable = ['name'];

    public function collect_money(){
        return $this->hasOne('App\Models\Collect_money');
    }

    public function expense(){
        return $this->hasOne('App\Models\Expense');
    }
}
