<?php
session_start();
if($_SESSION['state'] != "logged"){
    header("Location:  /");
}else{
    header("Location:  /");
}
require_once 'connect.php';
if(isset($_POST['login'])){
    $username = !empty($_POST['username']) ? trim($_POST['username']) : null;
    $passwordAttempt = !empty($_POST['password']) ? trim($_POST['password']) : null;
    $sql = "SELECT id, login, characters, pass FROM users WHERE login = :username";
    $stmt = $pdo->prepare($sql);
    $stmt->bindValue(':username', $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if($user == false){
        $_SESSION['loginError'] = "Złe hasło";
        header("Location: /");
        exit;
    }else{
        if($user['pass']==$passwordAttempt){

            $_SESSION['id'] = $user['id'];
            $_SESSION['characters'] = $user['characters'];
            
            $_SESSION['state'] = "logged";

            header("Location: /characters.php");
        }else{
            $_SESSION['loginError'] = "Złe hasło";
            header("Location: /");
        }
    }
}
 
?>