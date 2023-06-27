<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
    $passToSite = $_POST["password"]
    if(password_verify(($passToSite), '$2y$10$FfEK/s4aowsb.HSWyMEmE.W9U.010ykPnP0tI17lhPjzp0dACyoie')): ?>
    
    <link rel="stylesheet" type="text/css" href="home.css" />
    <script src="home.js" defer></script>
</head>
<body id="body">
    <div id="header">
        <h1>Matt Brandis - Photo Gallery</h1>
    </div>
    <div id="main">
        <div class="tile">
            <h1>Zambia</h1>
            <div class="img">
            </div>
        </div>
        <div class="tile">
            <h1>Zambia</h1>
            <div class="img">
            </div>
        </div>
    </div>
    <?php else: ?>
    <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body id="body">
        <h1>login failed</h1>
        <a href="login.php">Login</a>
    <?php endif ?>
</body>
</html> 