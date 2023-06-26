<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
session_start();
if('secret' == $_POST["password"]):?>

<h1>pass</h1>

<?php else: ?>

    <h1>access denied</h1>

<?php endif ?>
<h1>Test</h1>
<body>
</html>