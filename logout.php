<?php
session_start();
$_SESSION["loggedIn"] = false;  ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" type="text/css" href="login.css" />
</head>
<body>
<?php if($_SESSION["loggedIn"] == false):?>
    <h1>Logged Out</h1>
    <a href="login.php">Login</a>
<?php endif ?>
</body>
</html>