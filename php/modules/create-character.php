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
    <input type="radio" name="class" value="class1" id="">
    <input type="radio" name="class" value="class2" id="">
    <input type="radio" name="class" value="class3" id="">
    <input type="radio" name="class" value="class4" id="">
    <input type="radio" name="class" value="class5" id="">
    <input type="radio" name="class" value="class6" id="">
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
</form>