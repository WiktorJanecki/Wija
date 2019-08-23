<article style="margin-top = 500px;">
    <div>
        <form action="/php/login.php" method="post">
            <h1>Logowanie</h1><br>
            <input class = "form-control mb-4" placeholder = "Nazwa użytkownika" type="text" id="username" name="username">
            <input class = "form-control mb-4" placeholder = "Hasło" type="password" id="password" name="password">
            <input class = "btn btn-primary col-7 m-0" type="submit" name="login" value="Login">
            <input class = "btn btn-secondary col-4 float-right" type="button" onclick='window.location.href="/index.php?v=register"' value="Zarejestruj"><br>
            <span style="color:red"><?php if(isset($_SESSION['loginError'])){echo $_SESSION['loginError'];unset($_SESSION['loginError']);}?></span>
        </form>
    </div>
</article>


