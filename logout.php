<?php
session_start();
$_SESSION["loggedIn"] = false;  ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Logout</title>
  <link rel="stylesheet" type="text/css" href="/stylesheets/login.css" />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet"> 
</head>
<body>
<?php if($_SESSION["loggedIn"] == false):?>
    <h1 id="title">Logged Out</h1>
    <a href="/login">Login</a>
<?php endif ?>
</body>
</html>