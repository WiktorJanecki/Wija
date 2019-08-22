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
        <form id="form">
            <?php
                if($_SESSION['characters'] != "0"){
                    echo '<script>const characters =  '.$_SESSION["characters"].'</script>';
                    
                }else{
                    echo"NO CHARACTERS<br>";
                }
            ?>
            <script>
                console.log(characters) //DOSTEJE JSONA 
                const charactersCount = Object.keys(characters).length; 
                const form = document.getElementById("form");
                for(let i = 0;i<charactersCount;i++){
                    const radio  = document.createElement("input");
                    radio.type = "radio";
                    radio.name = "characters";
                    const div = document.createElement('span');
                    const c = Object.keys(characters)[i];
                    console.log(c);
                    div.textContent = characters[c].nickname;
                    form.appendChild(radio);
                    form.appendChild(div);
                    //draw characters etc.
                    form.appendChild(document.createElement("br"));
                }
            </script>
            <button type="submit" formaction="/game.php">Graj</button>
        </form> 
        <a href="php/logout.php">WYLOGUJ</a>
    </body>
</html>