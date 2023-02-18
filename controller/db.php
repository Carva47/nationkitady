<?php
$servername = "localhost";
$username = "carva";
$password = "carva47";

try {
  $conn = new PDO("mysql:host=$servername;dbname=exemplophp", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>