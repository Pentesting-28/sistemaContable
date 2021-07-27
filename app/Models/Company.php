<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'companies';
    protected $fillable = ['ruc','address','phone','name'];

    public function image(){
    	return $this->hasOne('App\Models\Image');
    }
}
