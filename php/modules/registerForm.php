<?php
$publickey = "6LeUhrQUAAAAAFOEJ66OkfvXtyLEXuRKKH9IfwGf";
?>


<h1>Register</h1>
<script src="https://www.google.com/recaptcha/api.js?render=<?=$publickey?>"></script>

<form action="php/register.php" method="post">
    <label for="username">Username:</label>
    <input type="text" name="username"><br>
    <label for="email">E-mail:</label>
    <input type="email" name="email" id=""><br>
    <label for="password">Password:</label>
    <input type="password" name="password"><br>
    <label for="repeat">Repeat password:</label>
    <input type="password" name="repeat" ><br>
    <label for="reg">Akceptuję brak regulaminu</label>
    <input type="checkbox" name="reg" id=""> <br>
    <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
    <input type="submit" value="Register" name="register"><br>
    <script>
        grecaptcha.ready(function() {
        grecaptcha.execute('<?=$publickey?>', {action: 'homepage'}).then(function(token) {
        document.getElementById('g-recaptcha-response').value=token;
        });
  });
  </script>
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