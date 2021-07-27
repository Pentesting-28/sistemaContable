<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    protected $table = 'clients';
    protected $fillable = ['name','address','cellular','residential_phone','email','dni','notifications'];

    public function invoice(){
        return $this->hasMany('App\Models\Invoice');
    }
}
