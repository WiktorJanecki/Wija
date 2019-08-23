<ul>
    <li>klasa1</li>
    <li>klasa2</li>
    <li>klasa3</li>
    <li>klasa4</li>
    <li>klasa5</li>
    <li>klasa6</li>
</ul>
<form action="/php/createChar.php" method="post">
    <input type="text" name="nickname" id=""><br>
    <input type="radio" name="class" value="1" id="">
    <input type="radio" name="class" value="2" id="">
    <input type="radio" name="class" value="3" id="">
    <input type="radio" name="class" value="4" id="">
    <input type="radio" name="class" value="5" id="">
    <input type="radio" name="class" value="6" id="">
    <br>
    <input type="radio" name="sex" value="male" id="">
    <input type="radio" name="sex" value="famale" id="">
    <br>
    <button type="submit" name="create">CREATE</button>
    <p style="color:red">
    <?php
    if(isset($_SESSION['createError']))
    {
        echo $_SESSION['createError'];
        unset($_SESSION['createError']);
    }
    ?></p>
    <a href="/">WSTECZ</a>
</form>