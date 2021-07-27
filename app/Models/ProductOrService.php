<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ProductOrService extends Model
{
    protected $fillable = ['name'] ;

    public function type_expense(){
        return $this->hasOne('App\Models\TypeExpense');
    }
}
