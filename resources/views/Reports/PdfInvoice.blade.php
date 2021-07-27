<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Factura</title>

    <style>
        .invoice-box {
            max-width: 800px;
            margin: auto;
            /*margin-left: 50px;*/
            margin-top: -10px;
            padding: 20px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 12px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
            color: #555;
        }

        .invoice-box table {
            width: 100%;
            line-height: inherit;
            text-align: left;
        }

        .invoice-box table td {
            padding: 1px;
            vertical-align: top;
        }

        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }

        .invoice-box table tr.top table td {
            padding-bottom: 5px;
        }

        .invoice-box table tr.top table td.title {
            font-size: 12px;
            line-height: 45px;
            color: #333;
        }

        .invoice-box table tr.information table td {
            padding-bottom: 5px;
        }

        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }

        .invoice-box table tr.details td {
            padding-bottom: 5px;
        }

        .invoice-box table tr.item td{
            border-bottom: 1px solid #eee;
        }

        .invoice-box table tr.item.last td {
            border-bottom: none;
        }

        .invoice-box table tr.total td:nth-child(2) {
            border-top: 2px solid #eee;
            font-weight: bold;
        }

        @media only screen and (max-width: 600px) {
            .invoice-box table tr.top table td {
                width: 100%;
                display: block;
                text-align: center;
            }

            .invoice-box table tr.information table td {
                width: 100%;
                display: block;
                text-align: center;
            }
        }

        /** RTL **/
        .rtl {
            direction: rtl;
            font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        }

        .rtl table {
            text-align: right;
        }

        .rtl table tr td:nth-child(2) {
            text-align: left;
        }

        .text-right {
            text-align: right !important;
        }
        </style>
</head>

<body>
    <div class="invoice-box">
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr style="margin: 0px; padding: 0px">
                            <td class="title" style="margin: 0px; padding: 0px">
                                <img src="{{public_path() }}/img/Logotipo_oficial.png" height="100" style="margin: 0px; padding: 0px">
                            </td>

                            <td>
                                Recibo de caja # {{$data->number}}<br>
                                Elaborado: {{date('d/m/Y h:i a', strtotime($data->created_at))}}
                                <hr style="border: 1px solid #eee;">
                                {{$data->client->name}}<br>
                                {{$data->client->dni}}<br>
                                {{$data->client->email}}
                            </td>
                        </tr>                        
                    </table>
                </td>
            </tr>

            {{-- <tr class="information">
                <td colspan="2">
                    <table>
                        <tr>
                            <td>
                                {{$company[0]->name}}<br>
                                {{$company[0]->ruc}}<br>
                                {{$company[0]->address}}
                            </td>

                            <td>
                                {{$data->client->name}}<br>
                                {{$data->client->dni}}<br>
                                {{$data->client->email}}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr> --}}

            <tr class="heading">
                <td>
                    Metodo de pago
                </td>

                <td>
                    Cantidad $
                </td>
            </tr>

            <tr class="details">
                <td>
                    {{$data->collect_money->type_payment->name}}
                </td>

                <td>
                    {{$data->collect_money->amount}}
                </td>
            </tr>
        </table>
        <table cellpadding="0" cellspacing="0">

            <tr class="heading">
                <td>
                    Tipo de donacion
                </td>

                <td>
                    Cantidad
                </td>

                <td class="text-right">
                    Monto
                </td>

                <td class="text-right">
                    Subtotal $
                </td>
            </tr>

            @foreach ($data->donations_invoice as $donation_value)
	            <tr class="item">
	                <td>
	                    {{$donation_value->donation->name_of_income}}
	                </td>

	                <td class="text-right">
	                    {{$donation_value->quantity}}
	                </td>

	                <td class="text-right">
	                    {{$donation_value->amount}}
	                </td>

	                <td class="text-right">
	                    {{$donation_value->quantity * $donation_value->amount}}
	                </td>
	            </tr>
            @endforeach

            <tr class="total">
                <td></td>
                <td></td>
                <td></td>

                <td class="text-right">
                   Total: $ {{$data->collect_money->amount}}
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
