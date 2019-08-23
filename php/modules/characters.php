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
        <form id="charactersForm"> 
            <script>let characters;</script>
            <?php
                require 'php/refreshCharacters.php';

                if($_SESSION['characters'] != "0"){
                    echo '<script>characters =  '.$_SESSION["characters"].'</script>';
                    
                }else{
                    echo"NO CHARACTERS<br>";
                }
            ?>
            <script src="/js/phpModules/characterList.js"></script>
        </form> 
    </body>
</html>