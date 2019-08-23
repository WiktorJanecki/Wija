<?php
session_start();
$secret = "6LeUhrQUAAAAAIdzOMVDIhxVS89vhDxUh5-Fylt2";
$url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$_POST['g-recaptcha-response'];
$response = file_get_contents($url);
$json = json_decode($response);
if($json->success == true && $json->score > 0.5){
    if(isset($_POST['register'])){
        if(!empty($_POST['username'])&&!empty($_POST['email'])&&!empty($_POST['password'])&&!empty($_POST['repeat'])){
            if($_POST['password'] == $_POST['repeat']){
                if(isset($_POST['reg']))
                    {
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
                        $hash= password_hash($_POST['password'], PASSWORD_DEFAULT);
                        $stmt = $pdo->prepare('INSERT INTO users(login,pass,email) VALUES (:login,:pass,:email)');
                        $stmt->bindValue(":email",$_POST['email']);
                        $stmt->bindValue(":login",$_POST['username']);
                        $stmt->bindValue(":pass",$hash);
                        $stmt->execute();
                        header('Location: /');
                        
                    }
                }else{
                    header('Location: /?v=register');
                    $_SESSION['registerError'] = "Potwierdź regulamin!!!";
                    exit; 
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
}else{
    header('Location: /?v=register');
    $_SESSION['registerError'] = "Potwierdź ,że nie jesteś botem!";
    exit;
    
}

?>