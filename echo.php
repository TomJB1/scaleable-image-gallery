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
echo password_hash($_POST["password"], PASSWORD_DEFAULT)
?>
</body>
</html>