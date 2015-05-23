<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="facturame, facturas online, facturación">
  <meta name="author" content="JALP">
  <link rel="shortcut icon" href="<?php echo APP_DOMAIN ?>/favicon.ico">
  <title>Facturame.la</title>
  <link rel="stylesheet" href="<?php echo APP_DOMAIN ?>/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?php echo APP_DOMAIN ?>/public/css/styles.min.css"> 
</head>
<body>
  <header>
    <div class="navbar-wrapper">
      <div class="container">
        <nav class="navbar navbar-default navbar-static-top">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <span class="logo navbar-brand">
                <a href="/">
                  <figure>
                    <img src="<?php echo IMAGE_PATH?>/facturame.png" alt="Facturame">
                  </figure>
                </a>
              </span>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
              <ul class="nav navbar-nav navbar-right">
                <li class="active">
                  <a href="/" class="home"> Inicio </a>
                </li>
                <li>
                  <a href="<?php echo APP_DOMAIN ?>/como-usarlo/"> Cómo usarlo </a>
                </li>
                <li>
                  <a href="#clientes"> Clientes </a>
                </li>
                <li>
                  <a href="#"><button class="btn btn-primary"> Prueba sin costo </button></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>