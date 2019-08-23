<?php
if(isset($_POST['chooseCharacter'])){
    require 'php/refreshCharacters.php';
    if($_SESSION['characters'] != "0"){
        $players = json_decode($_SESSION['characters'] ,false, 512, JSON_UNESCAPED_UNICODE );
    }
    $nick = $_POST['chooseCharacter'];
    if($players->$nick == $nick){
        require_once 'php/connect.php';
        $stmt = $pdo->prepare("SELECT * FROM characters WHERE nickname=:nick");
        $stmt->bindValue(':nick',$nick);
        $stmt->execute(); 
        $user=$stmt->fetch(PDO::FETCH_ASSOC);
        $i = 0;
        $keys = array_keys($user);
        foreach($user as $var){
            echo "<br>".$keys[$i].":   ".$var;
            $i++;
        }
        echo'<br><br><a class="btn btn-secondary col-12" href="/">Wstecz</a>';




    }else{
        header("Location: /");
    }
}else{
    $_SESSION['characterError'] = 'Wybierz postać którą chcesz zobaczyć';
    Header("Location: /");
}
?>