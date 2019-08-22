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
        <!-- <link rel="stylesheet" href="css/normalize.css"> -->
    </head>
    <body>
        <?php
        if(!isset($_SESSION['state']) ||$_SESSION['state'] != "logged"){
            require 'php/modules/loginForm.php';
        }
        else if(isset($_SESSION['state']) && $_SESSION['state'] == "logged"){
            require_once 'php/modules/characters.php';
        }
        ?>
    </body>
</html>