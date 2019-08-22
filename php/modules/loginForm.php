<?php
if(isset($_SESSION['loginError'])){
    $error =  $_SESSION['loginError'];
}else{
    $error = "";
}
?>
<h1>Login</h1>
<form action="php/login.php" method="post">
    <label for="username">Username</label>
    <input type="text" id="username" name="username"><br>
    <label for="password">Password</label>
    <input type="password" id="password" name="password"><br>
    <input type="submit" name="login" value="Login">
</form>
<span style="color:red"><?=$error?></span>

