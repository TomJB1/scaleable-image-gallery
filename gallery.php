<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <script src="script.js" defer></script>
</head>
<body id="body">
    <?php
    if('secret' == $_POST["password"]): ?>
    <div id="header">
        <h1>Matt Brandis - Photo Gallery</h1>
    </div>
    <div id="main">
            
    </div>
    <?php else: ?>
        <h1>login failed</h1>
        <a href="login.php">Login</a>
    <?php endif ?>
</body>
</html> 