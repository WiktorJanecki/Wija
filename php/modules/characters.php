<?php
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
        <form id="loginForm"> 
            <script>let characters;</script>
            <?php
                require 'php/refreshCharacters.php';
                if($_SESSION['characters'] != "0"){
                    echo '<script>characters =  '.$_SESSION["characters"].'</script>';
                    
                }else{
                    echo"NO CHARACTERS<br>";
                }
            ?>
            <script>
                const form = document.getElementById("loginForm");
                if(characters !== undefined){
                    const charactersCount = Object.keys(characters).length; 
                    for(let i = 0;i<charactersCount;i++){
                        const radio  = document.createElement("input");
                        radio.type = "radio";
                        radio.name = "characters";
                        const div = document.createElement('span');
                        const c = Object.keys(characters)[i];
                        div.textContent = characters[c].nickname;
                        form.appendChild(radio);
                        form.appendChild(div);
                        //draw characters etc.
                        form.appendChild(document.createElement("br"));
                    }
                }
                const newCharacterButton = document.createElement('button'); //new char btn
                newCharacterButton.type = "button";
                newCharacterButton.textContent = "New Character"; 
                newCharacterButton.onclick = () =>{
                    window.location.href = "/index.php?v=create-character";
                } 
                form.appendChild(newCharacterButton);
                form.appendChild(document.createElement("br"));  //br
                const playButton = document.createElement('button'); //play btn
                playButton.type = "button";
                playButton.textContent = "PLAY";
                playButton.onclick = () =>{
                    window.location.href = "/game.php";
                }
                form.appendChild(playButton);
            
            </script>
        </form> 
    </body>
</html>