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

  <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg">
  <link rel="icon" type="image/png" href="/assets/favicon.png">

  <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png">
  <link rel="manifest" href="assets/site.webmanifest">
  <link rel="mask-icon" href="assets/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#2d89ef">
  <meta name="theme-color" content="#ffffff">
</head>
<body>
<?php if($_SESSION["loggedIn"] == false):?>
    <h1 id="title">Logged Out</h1>
    <a href="/login.php">Login</a>
<?php endif ?>
</body>
</html>