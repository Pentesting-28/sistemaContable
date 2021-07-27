<?php

namespace App\Exports;

use App\Models\Invoice;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Illuminate\Support\Facades\DB;

class InvoicesExport implements FromCollection, WithHeadings
{
	use Exportable;

	public function forDates(string $ini, string $end)
    {

        $this->ini = $ini;
        $this->end = $end;

        return $this;
    }
    /**
    * @return Collection
    */
    public function collection()
    {

        $invoices =  DB::table('invoices')
            ->join('clients', 'invoices.client_id', '=', 'clients.id')
            ->select('invoices.id','clients.name','invoices.amount', 'invoices.created_at');

            if ($this->ini > 0) {
	            $invoices->whereDate('invoices.created_at', '>=' , $this->ini)
	            ->whereDate('invoices.created_at', '<=' , $this->end);
            }

            return $invoices->get();
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            '#',
            'Nombre del cliente',
            'Monto',
            'Fecha'
        ];
    }
}
