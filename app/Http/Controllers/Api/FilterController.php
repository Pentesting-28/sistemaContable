<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\InvoicesExport;
use App\Exports\ExpenseExport;
use App\Models\Expense;
use App\Models\Invoice;
use Exception;
use Validator;
use PDF;
use Illuminate\Support\Facades\DB;
use App\Models\Company;

class FilterController extends Controller
{

    public function motion_type_filter($opc, $ini, $end, $donation, $product_service_id, $type_expense_id, $export)
    {
        // return $type_expense_id;
        try {
            // $validator = Validator::make($request->all(), [
            //     'opc' => 'required',
            //     'dates' => 'array',
            // ]);

            // if ($validator->fails()) {
            //     return response()->json([
            //         'error'=>$validator->errors()
            //     ], 422);
            // }

            // $ini = '';
            // $end = '';
            // if (count($request->dates) > 0) {
            //     $ini = $request->dates[0];
            //     $end = $request->dates[1];
            // }

            switch ($opc) {
                case 1://Friltro de factura

                    $data = Invoice::when($ini > 0, function ($query) use ($ini, $end) {
                        return $query->whereDate('created_at', '>=', $ini)
                            ->whereDate('created_at', '<=', $end);
                    })
                        ->when($donation > 0, function ($query) use ($donation) {
                            return $query->whereHas('donations_invoice', function ($query) use ($donation) {
                                $query->where('donation_id', $donation);
                            });
                        })
                        ->with('donations_invoice.donation', 'collect_money.type_payment', 'user', 'client')
                        ->where('status', 1)
                        ->orderBy('created_at', 'desc')
                        ->get();

                    $total = $data->reduce(function ($carry, $item) {
                        return $carry + $item->amount;
                    });

                    if ($export == 1) {
                        return $this->pdf($data, 1);
                    }

                    if ($export == 2) {
                        return $this->excelInvoice($ini, $end);
                    }

                    if ($export == 3) {
                        return $this->pdf_month($data, 1, $total);
                    }

                    if ($export == 4) {
                        return $this->excelInvoiceMonth($ini, $end);
                    }

                    return response()->json([
                        'data' => $data
                    ]);
                    break;

                case 2://Friltro de gastos
                    $data = Expense::when($ini > 0, function ($query) use ($ini, $end) {
                        return $query->whereDate('date_payment_expense', '>=', $ini)
                            ->whereDate('date_payment_expense', '<=', $end);
                    })
                        ->when($type_expense_id > 0, function ($query) use ($type_expense_id) {
                            return $query->whereHas('type_expenses', function ($query) use ($type_expense_id) {
                                $query->where('id', $type_expense_id);
                            });
                        })
                        ->when($product_service_id > 0, function ($query) use ($product_service_id) {
                            return $query->whereHas('type_expenses',
                                function ($query) use ($product_service_id) {
                                    $query->whereHas('product_or_service',
                                        function ($query) use ($product_service_id) {
                                            $query->where('id', $product_service_id);
                                        });
                                });
                        })
                        ->with('type_expenses.product_or_service', 'type_payment')
                        ->orderBy('created_at', 'desc')
                        ->get();

                    $total = $data->reduce(function ($carry, $item) {
                        return $carry + $item->amount;
                    });

                    if ($export == 1) {
                        return $this->pdf($data, 2);
                    }

                    if ($export == 2) {
                        return $this->excelExpense($ini, $end);
                    }

                    if ($export == 3) {
                        return $this->pdf_month($data, 2, $total);
                    }

                    if ($export == 4) {
                        return $this->excelExpenseMonth($ini, $end);
                    }

                    return response()->json([
                        'data' => $data
                    ]);
                    break;

                default:
                    throw new Exception('Filtro no valido', 505);
                    break;
            }
        } catch (Exception $e) {
            return response()->json([
                'error' => 'expense.index.failed',
                'message' => $e->getMessage(),
            ], 505);
        }
    }

    public function pdf($data, $opc)
    {
        $company = Company::with('image')->get();
        $pdf = PDF::setPaper('A5', 'portrait');
        $pdf->loadView('Reports.PdfInvoiceAll', compact('data', 'company', 'opc'));
        return $pdf->download('PdfInvoiceAll.pdf');
    }

    public function pdf_month($data, $opc, $total)
    {
        $company = Company::with('image')->get();
        $pdf = PDF::setPaper('A5', 'portrait');

        $pdf->loadView('Reports.invoice_month', compact('data', 'company', 'opc', 'total'));
        return $pdf->download('invoice_month.pdf');
    }

    public function excelInvoice($ini, $end)
    {
        // return $ini;
        return (new InvoicesExport)->forDates($ini, $end)->download('ReporteExcel.xlsx');
    }

    public function excelExpense($ini, $end)
    {
        return (new ExpenseExport)->forDates($ini, $end)->download('ReporteExcel.xlsx');
    }

    public function excelInvoiceMonth($ini, $end)
    {
        // return $ini;
        return (new InvoicesExport)->forDates($ini, $end)->download('ReporteExcel.xlsx');
    }

    public function excelExpenseMonth($ini, $end)
    {
        return (new ExpenseExport)->forDates($ini, $end)->download('ReporteExcel.xlsx');
    }

    public function date_filter(Request $request)
    {
        //Filter date
    }

}
