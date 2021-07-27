<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Mail\SendMail;
use Illuminate\Support\Facades\Mail;
use App\Models\Invoice;
use App\Models\Company;
use Exception;

class MailInvoiceController extends Controller
{

    public function send($id)
    {
        try {
            $company = Company::with('image')->get();
            $data  = Invoice::where('id', $id)->with('donations_invoice.donation','collect_money','user','client')->first();

            $emailClient = $data->client->email;// obtengo el email

            // return view('Mail.invoice', compact('data','company'));

            if(isset($emailClient)){ 
                Mail::to($emailClient)->send(new SendMail($data, $company));
                $message = 'Factura enviada con éxito';
            }else{
                throw new Exception('Cliente no posee correo electronico',505);
            }
            return response()->json([
                "message" => $message
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'emailClient.send.failed',
                'message'=> $e->getMessage(),
            ], 505);
        }
    }
}
