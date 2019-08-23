<form action="/php/createChar.php" method="post">

    <h5>Wybierz nazwę postaci:</h5>
    <input class="form-control mb-3"placeholder="Nazwa postaci" type="text" name="nickname" id="">
    <h5>Wybierz kalsę postaci:</h5>
    <input class="ml-1" type="radio" name="class" value="1" id="">
    <input type="radio" name="class" value="2" id="">
    <input type="radio" name="class" value="3" id="">
    <input type="radio" name="class" value="4" id="">
    <input type="radio" name="class" value="5" id="">
    <input type="radio" name="class" value="6" id="">
    <h5 class = "mt-2">Wybierz płeć:</h5>
    <input class="ml-1" type="radio" name="sex" value="male" id="">
    <input type="radio" name="sex" value="famale" id="">
    <br>
    <input class="btn btn-primary col-7 mt-3" type="submit" name="create" value="Stwórz!"></input>
    <a class = "btn btn-secondary col-4 mt-3 float-right" href="/">Wstecz</a>
    <p style="color:red">
    <?php
    if(isset($_SESSION['createError']))
    {
        echo $_SESSION['createError'];
        unset($_SESSION['createError']);
    }
    ?></p>
</form>