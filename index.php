<?php
session_start();
if(isset($_SESSION['state']) && $_SESSION['state'] == "logged"){
    header("Location:  /characters.php");
    exit;
}
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
        <h1>Login</h1>
        <form action="php/login.php" method="post">
            <label for="username">Username</label>
            <input type="text" id="username" name="username"><br>
            <label for="password">Password</label>
            <input type="password" id="password" name="password"><br>
            <input type="submit" name="login" value="Login">
        </form>
        <span style="color:red">
        <?php
        if(isset($_SESSION['loginError'])){echo $_SESSION['loginError'];}
        ?>
        </span>
    </body>
</html>