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
    <link rel="stylesheet" type="text/css" href="/stylesheets/general.css" />
    <script src="/script.js" defer></script>

    <link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg">
    <link rel="icon" type="image/png" href="/assets/images/favicon.png">
</head>
<body id="body">
    <div id="logoutWrapper">
        <a href="/logout" id="logout">Log Out</a>
    </div>
    <div id="header">
        <h1>Matt Brandis - Photo Gallery</h1>
    </div>
    <div id="main">
            
    </div>
    <div id="loading">
        <div id="loadingText">Loading...</div>
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