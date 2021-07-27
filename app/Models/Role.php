<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name', 'slug', 'description',
    ];

    public function users(){
    	return $this->hasOne('App\User');
    }

     public function permissions(){
        return $this->belongsToMany('App\Models\Permission');
    }
}
