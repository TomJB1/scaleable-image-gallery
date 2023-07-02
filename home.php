<?php
session_cache_limiter('public');
session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
    
    if((password_verify(($_POST['password']), '$2y$10$FfEK/s4aowsb.HSWyMEmE.W9U.010ykPnP0tI17lhPjzp0dACyoie')) || $_SESSION["loggedIn"] == true): ?>
    <?php $_SESSION["loggedIn"] = true;  ?>
    <link rel="stylesheet" type="text/css" href="/stylesheets/home.css" />
    <script src="home.js" defer></script>
</head>
<body id="body">
    <a href="/logout.php">Log Out</a>
    <div id="header">
        <h1>Matt Brandis - Photo Gallery</h1>
    </div>
    <div id="main">
        <!-- tiles put here by js -->
    </div>
    <?php else: ?>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <meta http-equiv="Refresh" content="0; url='https://brandis-photos.uk.to/login.php'" />
</head>
<body id="body">
        <h1>login failed</h1>
        <a href="login.php">Login</a>
    <?php endif ?>
</body>
</html> 