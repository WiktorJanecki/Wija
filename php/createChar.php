<?php
session_start();
if($_SESSION['state'] != "logged"){
    header("Location:  /");
}
if(isset($_POST['class']) && $_POST['nickname'] != "" &&  $_POST['sex'] != ""){
    $classes = ["1","2","3","4","5","6"];
    $sexes = ["male","famale"];
    $checker = false;
    $checker1 = false;
    foreach($classes as $class){
        if($_POST['class'] == $class){
            $checker = true;
        }
    }
    foreach($sexes as $sex){
        if($_POST['sex'] == $sex){
            $checker1 = true;
        }
    }
    if(!$checker || !$checker1){
        $_SESSION['createError'] = "Wypełnij wszystkie pola!";
        header('Location: /?v=create-character');
        exit(); 
    }else{
        require 'refreshCharacters.php';
        $nick = $_POST['nickname'];
        $stmt = $pdo->prepare('SELECT COUNT(*) FROM characters WHERE nickname=:nickname');
        $stmt->bindValue(":nickname",$nick);
        $stmt->execute();
        $count = $stmt->fetch(PDO::FETCH_ASSOC);
        $keys = array_keys($count);
        if($count[$keys[0]] == 0){
            $players = new stdClass;
            if($_SESSION['characters'] != "0"){
                $players = json_decode($_SESSION['characters'] ,false, 512, JSON_UNESCAPED_UNICODE );
            }
            $players->$nick = $nick;
            $jsonPlayers = json_encode($players, JSON_UNESCAPED_UNICODE);
            require_once 'connect.php';
            $stmt = $pdo->prepare("UPDATE users SET characters=:json WHERE id=".$_SESSION['id']);
            $stmt->bindValue(':json',$jsonPlayers);
            $stmt->execute();
            $stmt = $pdo->prepare('INSERT INTO characters (nickname , class , sex) VALUES (:nick, "'.$_POST['class'].'" , "'.$_POST['sex'].'")');
            $stmt->bindValue(':nick',$nick);
            $stmt->execute();
            header("Location: /");
        }else{
            $_SESSION['createError'] = "Postać o takiej nazwie już istnieje!";
            header('Location: /?v=create-character');
            exit();  
        }
    }
}
else{
    $_SESSION['createError'] = "Wypełnij wszystkie pola!";
    header('Location: /?v=create-character');
    exit(); 
}

?>