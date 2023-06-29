<?php
    $input = json_decode(file_get_contents('php://input'), true);
    $fileArray = scandir(($input['dir']));
    var_dump($fileArray);?>