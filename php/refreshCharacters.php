<?php
require_once 'connect.php';
$stmt = $pdo->query('SELECT characters FROM users WHERE id='.$_SESSION['id']);
$return = $stmt->fetch(PDO::FETCH_ASSOC);
$_SESSION['characters'] = $return['characters']
?>