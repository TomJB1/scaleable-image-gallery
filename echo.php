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
<?php if(password_hash($_POST["password"], PASSWORD_DEFAULT) == '$2y$10$5iAdKxZNcXQCjwBOGomVC.2XT0E6ozYzxOc71qwjAZHDh6KUz/fzG')
{
    echo 'working'
}?>
</body>
</html>