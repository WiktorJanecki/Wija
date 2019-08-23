<h1>Register</h1>
<form action="php/register.php" method="post">
    <label for="username">Username:</label>
    <input type="text" name="username"><br>
    <label for="email">E-mail:</label>
    <input type="email" name="email" id=""><br>
    <label for="password">Password:</label>
    <input type="password" name="password"><br>
    <label for="repeat">Repeat password:</label>
    <input type="password" name="repeat" ><br>
    <input type="submit" value="Register" name="register"><br>
    <span style="color:red">
    <?php
        if(isset($_SESSION['registerError']))
        {
            echo $_SESSION['registerError'];
            unset($_SESSION['registerError']);
        }
    ?>
    </span>
</form>
<br>
<a href="/">WRÓĆ</a>