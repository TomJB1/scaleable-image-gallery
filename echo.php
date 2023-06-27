<?php session_start() 
$_SESSION["test"] = "12345";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="post" action="">
    password: <input type="text" name="password"><br>
    <input type="submit">
</form>
<?php
    echo $_SESSION["password"];
    echo $_SESSION["test"];
?>
    <h1>works</h1>

</body>
</html>