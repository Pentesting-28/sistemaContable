<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $table = "images";
    protected $fillable = ['name','path','company_id'];

    public function company() {
    	return $this->belongsTo('App\Models\Company');
    }
}
