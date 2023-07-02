<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <?php
    
    if((password_verify(($_POST['password']), '$2y$10$FfEK/s4aowsb.HSWyMEmE.W9U.010ykPnP0tI17lhPjzp0dACyoie')) || $_SESSION["loggedIn"] == true): ?>
    <?php $_SESSION["loggedIn"] = true;  ?>
    
    <link rel="stylesheet" type="text/css" href="/stylesheets/gallery.css" />
    <script src="/script.js" defer></script>
</head>
<body id="body">
    <a href="/logout">Log Out</a>
    <div id="header">
        <h1>Matt Brandis - Photo Gallery</h1>
    </div>
    <div id="main">
            
    </div>
    <?php else: ?>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <meta http-equiv="Refresh" content="0; url='https://brandis-photos.uk.to/login'" />
</head>
<body id="body">
        <h1>login failed</h1>
        <a href="login">Login</a>
    <?php endif ?>
<div id="pop-up">
    <img id="popupImage">
    <div id="closeButton" onclick="closePopup()">X</div>
</div>
</body>
</html> 