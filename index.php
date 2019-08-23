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
        <link rel="stylesheet" href="css/leftmargin.css" type="text/css">
    </head>
    <body>
        <?php
        if(!isset($_SESSION['state']) || $_SESSION['state'] != "logged"){
            if(isset($_GET['v'])&& $_GET['v'] == 'register'){
                require 'php/modules/registerForm.php';
            }else{
            require 'php/modules/loginForm.php';
            }
        }else{
            echo "Welcome ".$_SESSION['login']."!"; echo '<a href="/php/logout.php">[LOGOUT]</a>';
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
    </body>
</html>