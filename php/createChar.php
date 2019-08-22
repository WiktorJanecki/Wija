<?php
session_start();
if($_SESSION['state'] != "logged"){
    header("Location:  /");
}
if(isset($_POST['class']) && $_POST['nickname'] != ""){
    $classes = ["class1","class2","class3","class4","class5","class6"];
    $checker = false;
    foreach($classes as $class){
        if($_POST['class'] == $class){
            $checker = true;
        }
    }
    if(!$checker){
        $_SESSION['createError'] = "Wypełnij wszystkie pola!";
        header('Location: /index.php/?v=create-character');
        exit(); 
    }else{
        //check nickname exist $_POST['nickname'];
        //create object

        $nick = $_POST['nickname'];
        $players = new stdClass;
        if($_SESSION['characters'] != "0"){
            $players = json_decode($_SESSION['characters'] ,false, 512, JSON_UNESCAPED_UNICODE );
        }
       
        
        $player = new stdClass;
        //players properties
        $player->nickname = $nick;
        //
        $players->$nick = $player;
        $jsonPlayers = json_encode($players, JSON_UNESCAPED_UNICODE);
        require_once 'connect.php';
        $stmt = $pdo->query("UPDATE users SET characters='$jsonPlayers' WHERE id=".$_SESSION['id']);
        header("Location: /");
    }
}
else{
    $_SESSION['createError'] = "Wypełnij wszystkie pola!";
    header('Location: /index.php/?v=create-character');
    exit(); 
}

?>