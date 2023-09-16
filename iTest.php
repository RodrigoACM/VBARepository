<!DOCTYPE html>
<html dir="ltr" lang="pt-BR">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800" rel="stylesheet">
    <link href="https://raw.githubusercontent.com/RodrigoACM/VBARepository/master/plugin.css" rel="stylesheet" />
    <link href="https://raw.githubusercontent.com/RodrigoACM/VBARepository/master/style.css" rel="stylesheet" />
    <link rel="stylesheet" href="css/switcher/skin-red.css" media="screen" id="style-colors" />

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>

</head>

<body>
    <div class="page-wrapper">
        <div class="hero v2 section-padding hero-full" style="background-image: url(images/header/hero-3.jpg)">
            <div class="overlay op-4"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h1 class="hero-title v2">Descubra, Compare, Planeje <br> suas Compras em Shoppings</h1>
                        <p class="hero-desc v2">
                            Esqueça as buscas intermináveis em múltiplos sites. Encontre todas as lojas, ofertas e opções de entretenimento em shoppings próximos a você.
                            O guia completo, tudo em um único lugar.
                        </p>
                    </div>
                    <div class="col-md-12 text-center mar-top-10">
                        <form class="hero__form v2">
                            <div class="row">
                                <div class="col-lg-4 col-md-12">
                                    <input class="hero__form-input custom-select" type="text" name="place-event" id="place-event" placeholder="Nome da Loja?">
                                </div>
                                <div class="col-lg-3 col-md-12">
                                    <select class="hero__form-input custom-select select2-element" name="filtro_categoria">
                                        <option>Selecione a Categoria</option>
                                        <option>Nova</option>
                                        <option>Eu</option>
                                        <option>Opa</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <br><br><br><br>

    <div id="isolated-form">
        <form>
            <select id="filtro_categoria2" name="filtro_categoria2" class="isolated-select">
                <option>Selecione a Categoria 2</option>
                <option>Nova2</option>
                <option>Eu2</option>
                <option>Opa2</option>
            </select>
        </form>
    </div>

    <script>
        $(document).ready(function() {
            $('#filtro_categoria2').select2();
        });
    </script>

    <!-- seus outros scripts -->
    <script src="https://raw.githubusercontent.com/RodrigoACM/VBARepository/master/plugin.js"></script>
    <script src="https://raw.githubusercontent.com/RodrigoACM/VBARepository/master/main.js"></script>
	
	
	
</body>
</html>