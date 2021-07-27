<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Donation_invoice extends Model
{
    protected $table = 'donation_invoices';
    protected $fillable = ['quantity','amount','donation_id','invoice_id'];

    public function donation(){
    	return $this->belongsTo('App\Models\Donation');
    }

    public function invoice(){
    	return $this->belongsTo('App\Models\Invoice');
    }
}
