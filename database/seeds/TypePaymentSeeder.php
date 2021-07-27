<?php

use Illuminate\Database\Seeder;
use App\Models\TypePayment;

class TypePaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $array = collect([
            ['name' => 'Efectivo'],
            ['name' => 'Tarjeta'],
            ['name' => 'ACH'],
            ['name' => 'Cheque'],
            ['name' => 'Otro']
        ]);

        foreach ($array as $value) {
            TypePayment::create([
                'name' => $value['name']
            ]);
        }
    }
}
