<?php

namespace App\Exports;

use App\Models\Expense;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Support\Facades\DB;

class ExpenseExport implements FromCollection, WithHeadings
{
    use Exportable;

	public function forDates(string $ini, string $end)
    {
    	
        $this->ini = $ini;
        $this->end = $end;

        return $this;
    }
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {

        $expenses =  DB::table('expenses')
            ->join('type_payments', 'expenses.type_payment_id', '=', 'type_payments.id')
            ->join('type_expenses', 'expenses.type_expenses_id', '=', 'type_expenses.id')
            ->select('expenses.id','type_expenses.name as type_expenses', 'type_payments.name as payments_name',
            	'expenses.quantity', 'expenses.date_payment_expense');

            if ($this->ini > 0) {
	            $expenses->whereDate('expenses.date_payment_expense', '>=' , $this->ini)
	            ->whereDate('expenses.date_payment_expense', '<=' , $this->end);            	
            }
            
            return $expenses->get();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            '#',
            'Tipo de gasto',
            'Tipo de pago',
            'Cantidad',
            'Fecha de gasto'
        ];
    }
}
