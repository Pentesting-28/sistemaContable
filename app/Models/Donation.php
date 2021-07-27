<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    protected $table = 'donations';
    protected $fillable = ['name_of_income','income_details','value'];

    public function donation_invoice(){
    	return $this->hasOne('App\Models\Donation_invoice');
    }
}
