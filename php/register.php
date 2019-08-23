<?php
session_start();
if(isset($_POST['register'])){
    if(!empty($_POST['username'])&&!empty($_POST['email'])&&!empty($_POST['password'])&&!empty($_POST['repeat'])){
        if($_POST['password'] == $_POST['repeat']){
            require 'connect.php';
            $stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE login=:login');
            $stmt->bindValue(":login",$_POST['username']);
            $stmt->execute();
            $count = $stmt->fetch(PDO::FETCH_ASSOC);
            $keys = array_keys($count);
            $stmt = $pdo->prepare('SELECT COUNT(*) FROM users WHERE email=:email');
            $stmt->bindValue(":email",$_POST['email']);
            $stmt->execute();
            $count1 = $stmt->fetch(PDO::FETCH_ASSOC);
            $keys1 = array_keys($count);
            if($count[$keys[0]] != 0){
                header('Location: /?v=register');
                $_SESSION['registerError'] = "Podany login już istnieje";
                exit;
                
            }else if($count1[$keys1[0]] != 0){
                header('Location: /?v=register');
                $_SESSION['registerError'] = "Podany email już jest zarejestrowany";
                exit;
            }else{
                $stmt = $pdo->prepare('INSERT INTO users(login,pass,email) VALUES (:login,:pass,:email)');
                $stmt->bindValue(":email",$_POST['email']);
                $stmt->bindValue(":login",$_POST['username']);
                $stmt->bindValue(":pass",$_POST['password']);
                $stmt->execute();
                
            }
        }else{
            header('Location: /?v=register');
            $_SESSION['registerError'] = "Hasła się różnią";
            exit;
        }
    }else{
        header('Location: /?v=register');
        $_SESSION['registerError'] = "Wypełnij wszystkie pola";
        exit;
    }
}else{
    header('Location: /?v=register');
    exit;
}

?>