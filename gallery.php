<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
    
    if('$2y$10$Ct/nak6sfOqtD.yKynS6qum48F2KO74Mp0e3AkR5O3QTweKDZaftK' == password_hash($_POST["password"], PASSWORD_DEFAULT)): ?>
    
    <link rel="stylesheet" type="text/css" href="styles.css" />
    <script src="script.js" defer></script>
</head>
<body id="body">
    <div id="header">
        <h1>Matt Brandis - Photo Gallery</h1>
    </div>
    <div id="main">
            
    </div>
    <?php else: ?>
    <link rel="stylesheet" type="text/css" href="styles.css" />
</head>
<body id="body">
        <h1>login failed</h1>
        <a href="login.php">Login</a>
    <?php echo password_hash($_POST["password"], PASSWORD_DEFAULT)?> 
    <?php endif ?>
</body>
</html> 