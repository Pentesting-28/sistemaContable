<?php

namespace App\Http\Controllers\Api\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Company;
use PDF;
use App\Models\Invoice;
use Exception;

class PdfInvoiceController extends Controller
{

    public function view($id)
    {
        try {
            $company = Company::with('image')->get();
            // $company = $company[0];

            $data  = Invoice::where('id', $id)
                ->with('donations_invoice.donation', 'collect_money.type_payment', 'user', 'client')
                ->orderBy('created_at', 'desc')
                ->first();

                $pdf = PDF::setPaper('A5', 'landscape');
            return $pdf->loadView('Reports.PdfInvoice', compact('data', 'company'))
            ->stream('Invoice.pdf');
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'PdfInvoice.download.failed',
                'message' => $e->getMessage(),
            ], 505);
        }

        // try {

        //     $company = Company::with('image')->get();

        //     $data  = Invoice::where('id', $id)
        //         ->with('donations_invoice.donation', 'collect_money.type_payment', 'user', 'client')
        //         ->first();
        //     return $pdf = PDF::loadView('Reports.PdfInvoice', compact('data', 'company'))->stream('Invoice.pdf');
        // } catch (Exception $e) {
        //     return response()->json([
        //         'error'  => 'PdfInvoice.view.failed',
        //         'message' => $e->getMessage(),
        //     ], 505);
        // }
    }

    public function download($id)
    {
        try {
            $company = Company::with('image')->get();
            // $company = $company[0];

            $data  = Invoice::where('id', $id)
                ->with('donations_invoice.donation', 'collect_money.type_payment', 'user', 'client')
                ->orderBy('created_at', 'desc')
                ->first();
            $pdf = PDF::loadView('Reports.PdfInvoice', compact('data', 'company'));
            return $pdf->download('Invoice.pdf');
        } catch (Exception $e) {
            return response()->json([
                'error'  => 'PdfInvoice.download.failed',
                'message' => $e->getMessage(),
            ], 505);
        }
    }
}
