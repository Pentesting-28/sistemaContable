<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
        * {
            margin: 0;
            padding: 0;
            font-family: sans-serif,"Helvetica Neue",Helvetica,Helvetica,Arial;
            box-sizing: border-box;
            font-size: 14px;
            color: #6a6969;
            letter-spacing: 0.3px;
        }

        img {
            max-width: 100%
        }

        body {
            -webkit-font-smoothing: antialiased;
            -webkit-text-size-adjust: none;
            width: 100% !important;
            height: 100%;
            line-height: 1.6;
        }

        table td {
            vertical-align: top
        }

        body {
            background-color: #f6f6f6
        }

        .body-wrap {
            background-color: #f6f6f6;
            width: 100%
        }

        .container {
            display: block !important;
            max-width: 600px !important;
            margin: 0 auto !important;
            clear: both !important
        }

        .content {
            max-width: 600px;
            margin: 0 auto;
            display: block;
            padding: 20px
        }

        .main {
            background: #fff;
            border: 1px solid #e9e9e9;
            border-radius: 3px
        }

        .content-wrap {
            padding: 20px
        }

        .content-block {
            padding: 0 0 20px;
            text-align: justify;
        }

        .header {
            width: 100%;
            margin-bottom: 20px
        }

        .footer {
            width: 100%;
            clear: both;
            color: #999;
            padding: 20px
        }

            .footer a {
                color: #999
            }

            .footer a, .footer p, .footer td, .footer unsubscribe {
                font-size: 12px
            }

        h1, h2, h3 {
            font-family: sans-serif,"Helvetica Neue",Helvetica,Arial,"Lucida Grande";
            color: #6a6969;
            margin: 30px 0 0;
            line-height: 1.2;
            font-weight: 400
        }

        h1 {
            font-size: 32px;
            font-weight: 500
        }

        h2 {
            font-size: 24px;
            font-weight: bold;
        }

        h3 {
            font-size: 18px;
            font-weight: bold;
        }

        h4 {
            font-size: 14px;
            font-weight: 600
        }

        ol, p, ul {
            margin-bottom: 10px;
            font-weight: 400
        }

            ol li, p li, ul li {
                margin-left: 5px;
                list-style-position: inside
            }

        a {
            color: #1ab394;
            text-decoration: underline
        }

        .btn-primary {
            text-decoration: none;
            color: #FFF;
            background-color: #1ab394;
            border: solid #1ab394;
            border-width: 5px 10px;
            line-height: 2;
            font-weight: 700;
            text-align: center;
            cursor: pointer;
            display: inline-block;
            border-radius: 5px;
            text-transform: capitalize
        }

        .last {
            margin-bottom: 0
        }

        .first {
            margin-top: 0
        }

        .aligncenter {
            text-align: center
        }

        .alignright {
            text-align: right
        }

        .alignleft {
            text-align: left
        }

        .clear {
            clear: both
        }

        .alert {
            font-size: 16px;
            color: #fff;
            font-weight: 500;
            padding: 20px;
            text-align: center;
            border-radius: 3px 3px 0 0
        }

            .alert a {
                color: #fff;
                text-decoration: none;
                font-weight: 500;
                font-size: 16px
            }

            .alert.alert-warning {
                background: #f8ac59
            }

            .alert.alert-bad {
                background: #ed5565
            }

            .alert.alert-good {
                background: #1ab394
            }

        .invoice {
            margin: 40px auto;
            text-align: left;
            width: 80%
        }

            .invoice td {
                padding: 5px 0
            }

            .invoice .invoice-items {
                width: 100%
            }

                .invoice .invoice-items td {
                    border-top: #eee 1px solid
                }

                .invoice .invoice-items .total td {
                    border-top: 2px solid #333;
                    border-bottom: 2px solid #333;
                    font-weight: 700
                }

        @media only screen and (max-width:640px) {
            h1, h2, h3, h4 {
                font-weight: 600 !important;
                margin: 20px 0 5px !important
            }

            h1 {
                font-size: 22px !important
            }

            h2 {
                font-size: 18px !important
            }

            h3 {
                font-size: 16px !important
            }

            .container {
                width: 100% !important
            }

            .content, .content-wrap {
                padding: 10px !important
            }

            .invoice {
                width: 100% !important
            }
        }

        .padding-button {
            padding: 10px 0 30px 0;
        }

        .brand {
            padding: 30px 0 10px;
        }

        .sign {
            padding: 20px 0;
        }

        .title-bottom {
            padding-bottom: 60px;
        }

        .line {
            border-top: 1px solid #E9E9E6;
            margin-top: 20px;
        }
    </style>
</head>

<body>

    <table class="body-wrap">
        <tr>
            <td></td>
            <td class="container" width="600">
                <div class="content">
                    <table class="main" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="content-wrap">
                                <table cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td class="aligncenter">
                                            {{-- {{$company[0]->image->path}} --}}
                                            {{-- <img class="img-responsive" alt="sistema_nomina" title="logo" src="{{asset('storage/$company[0]->image->name')}}"
                                            height="100" /> --}}
                                            <img class="img-responsive" alt="sistema_nomina" src="{{$message->embed($company[0]->image->path)}}" title="logo" height="150">
                                            <br>
                                            Recibo de caja # {{$data->number}}
                                            <div class="line"></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block aligncenter title-bottom">
                                            <span style="color: white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ea libero officiis ducimus aliquam. Laborum dicta alias vero natus et quidem eius.</span>
                                            <h2>De parte de la {{$company[0]->name}}</h2>
                                            <h3>Gracias {{$data->client->name}} por su donación</h3>
                                        </td>                                            
                                    </tr>

                                    <tr>
                                        <td class="content-block aligncenter title-bottom">
                                            <h4>Datos de tu factura</h4>
                                        </td>
                                    </tr>

                                    @foreach ($data->donations_invoice as $donation_value)
                                    <tr>
                                        <td class="content-block">
                                            <span style="font-weight: 600"> - Nombre de la donación: </span>
                                              {{$donation_value->donation->name_of_income}} <br />
                                            <span style="font-weight: 600"> - Cantidad: </span>
                                              {{$donation_value->quantity}} <br />
                                            <span style="font-weight: 600"> - Monto: </span>
                                              {{$donation_value->amount}} <br />
                                            <span style="font-weight: 600"> - Subtotal $: </span>
                                              {{$donation_value->amount * $donation_value->quantity}} <hr />
                                        </td>
                                    </tr>
                                    @endforeach

                                    <tr>
                                        <td class="content-block" style="font-size: 18px;text-align: right !important;">
                                            <span style="font-weight: 600">TOTAL</span> $ {{$data->amount}}
                                        </td>
                                    </tr>
                                   {{--  <tr>
                                        <td class="content-block aligncenter padding-button">
                                            <a href="#" class="btn-primary">Confirm email address</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block">
                                            Manéjalo todo desde un solo lugar con <b>Flexipos/Web</b>.
                                        </td>
                                    </tr> --}}
                                    <tr>
                                        <td class="content-block sign">
                                            Atentamente,<br />
                                            El equipo de la {{$company[0]->name}}.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block aligncenter brand">
                                            © 2020 GoldTech . Marcas y derechos reservados.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="content-block aligncenter">
                                            <i>Dios te bendiga</i>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </td>
            <td></td>
        </tr>
    </table>
</body>
</html>