<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Wija</title>
        <link rel="stylesheet" href="css/normalize.css" type="text/css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="css/style.css" type="text/css">
    </head>
    <body>
        <main class="container col-6 offset-3" style="margin-top:20vh">
            <article>
                <?php
                if(!isset($_SESSION['state']) || $_SESSION['state'] != "logged"){
                    if(isset($_GET['v'])&& $_GET['v'] == 'register'){
                        require 'php/modules/registerForm.php';
                    }else{
                    require 'php/modules/loginForm.php';
                    }
                }else{
                    echo "<span class = ' p-0 h2 col-12 col-md-6'>Witaj ".$_SESSION['login']."!"; echo '</span><a class="h2  m-0 p-0 col-12 col-md-6 float-right" style="text-align:right" href="/php/logout.php">[Wyloguj]</a><br><br>';
                    if(!isset($_GET['v'])){$path = "php/modules/characters.php";}
                    else{$path = "php/modules/".$_GET['v'].".php";}       
                    if(file_exists($path)){
                        require $path;
                    }else{
                        header("Location: /404.html");
                        exit();
                    }
                }   
                ?>
            </article>
        </main>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
</html>