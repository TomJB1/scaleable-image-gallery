<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $input = json_decode(file_get_contents('php://input'), true);
    echo $input['test'];
    echo "working" ?>
</body>
</html>