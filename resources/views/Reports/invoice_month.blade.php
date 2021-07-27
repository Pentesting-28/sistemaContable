<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Reportes</title>
    
    <style>
        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 30px;
            border: 1px solid #eee;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 13px;
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
            padding: 5px;
            vertical-align: top;
        }
        
        .invoice-box table tr td:nth-child(2) {
            text-align: right;
        }
        
        .invoice-box table tr.top table td {
            padding-bottom: 20px;
        }
        
        .invoice-box table tr.top table td.title {
            font-size: 20px;
            line-height: 45px;
            color: #333;
        }
        
        .invoice-box table tr.information table td {
            padding-bottom: 40px;
        }
        
        .invoice-box table tr.heading td {
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-weight: bold;
        }
        
        .invoice-box table tr.details td {
            padding-bottom: 20px;
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
        @if($opc == 1)
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                {{-- <img src="{{url('storage/images/'.$company[0]->image->name)}}" style="width:100%; max-width:300px;"> --}}
                                {{-- {{$company[0]->image->path}} --}}
                                Reporte de Facturas
                            </td>
                            
                            <td>
                                {{$company[0]->name}}<br>
                                {{$company[0]->ruc}}<br>
                                {{$company[0]->address}}
                                {{-- Due: February 1, 2015 --}}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>    
        </table>
        <table cellpadding="0" cellspacing="0">         
            
            <tr class="heading">
                <td>
                    Nombre de donación
                </td>                

                <td class="text-right">
                    Fecha
                </td>

                <td class="text-right">
                    Monto $
                </td>
            </tr>

            @foreach ($data as $value)
                <tr class="item">
                    <td>
                        {{$value->donations_invoice[0]->donation->name_of_income}}
                    </td>                    

                    <td class="text-right">
                        {{$value->created_at}}
                    </td>

                    <td class="text-right">
                        {{$value->amount}}
                    </td>
                </tr>
            @endforeach
                <tr class="item">
                    <td>
                        
                    </td> 

                    <td class="text-right">
                        Total
                    </td>
                    
                    <td class="text-right">
                        {{$total}}
                    </td>
                </tr>
        </table>
        @endif
        @if($opc == 2)
        <table cellpadding="0" cellspacing="0">
            <tr class="top">
                <td colspan="2">
                    <table>
                        <tr>
                            <td class="title">
                                {{-- <img src="{{url('storage/images/'.$company[0]->image->name)}}" style="width:100%; max-width:300px;"> --}}
                                {{-- {{$company[0]->image->path}} --}}
                                Reporte de Gastos
                            </td>
                            
                            <td>
                                {{$company[0]->name}}<br>
                                {{$company[0]->ruc}}<br>
                                {{$company[0]->address}}
                                {{-- Due: February 1, 2015 --}}
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>    
        </table>
        <table cellpadding="0" cellspacing="0">         
            
            <tr class="heading">
                <td>
                    Nombre de gastos
                </td>

                <td class="text-right">
                    Fecha de gasto
                </td>

                <td class="text-right">
                    Cantidad
                </td>

            </tr>

            @foreach ($data as $value)
                <tr class="item">
                    <td>
                        {{$value->type_expenses->name}}
                    </td> 

                    <td class="text-right">
                        {{$value->created_at}}
                    </td>

                    <td class="text-right">
                        {{$value->quantity}}
                    </td>
                </tr>
            @endforeach
                <tr class="item">
                    <td>
                        
                    </td> 

                    <td class="text-right">
                        Total
                    </td>
                    
                    <td class="text-right">
                        {{$total}}
                    </td>
                </tr>
        </table>
        @endif
        
    </div>
</body>
</html>