<?php
$publickey = "6LeUhrQUAAAAAFOEJ66OkfvXtyLEXuRKKH9IfwGf";
?>


<script src="https://www.google.com/recaptcha/api.js?render=<?=$publickey?>"></script>
<article>
    <div>
        <h1>Rejestracja</h1><br>
        <form action="php/register.php" method="post">
            <input class="form-control mb-3" type="text" placeholder="Nazwa użytkownika" name="username">
            <input class="form-control mb-3" placeholder = "E-mail" type="email" name="email" id="">
            <input class="form-control mb-3" placeholder = "Hasło" type="password" name="password">
            <input class="form-control mb-3" placeholder = "Powtórz hasło" type="password" name="repeat">
            Akceptuję brak regulaminu 
            <input class="mb-3"type="checkbox" name="reg" id=""><br>
            <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" /> 
            <input class="btn btn-primary col-7" type="submit" value="Register" name="register">
            <a href="/" class="btn btn-secondary col-4 float-right">Wstecz</a>
            <script>
                grecaptcha.ready(function() {
                grecaptcha.execute('<?=$publickey?>', {action: 'homepage'}).then(function(token) {
                document.getElementById('g-recaptcha-response').value=token;
                });
                });
            </script>
            <span style="color:red"><?php if(isset($_SESSION['registerError'])){echo $_SESSION['registerError'];unset($_SESSION['registerError']);}?></span>
        </form>
    </div>
</article>

<br>