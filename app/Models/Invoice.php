<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $table = 'invoices';
    protected $fillable = ['number','amount', 'user_id', 'client_id', 'status'];

    public function donations_invoice(){
    	return $this->hasMany('App\Models\Donation_invoice');
    }

    public function collect_money(){
    	return $this->hasOne('App\Models\Collect_money');
    }

    public function user(){
    	return $this->belongsTo('App\User');
    }

    public function client(){
        return $this->belongsTo('App\Models\Client');
    }
}
