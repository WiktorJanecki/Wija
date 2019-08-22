<?php
session_start();
if($_SESSION['state'] != "logged"){
    header("Location:  /");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/normalize.css">
    <title>Wija</title>
</head>
<body>
    <canvas></canvas>
<script src="js/App.js"></script>  
</body>
</html>