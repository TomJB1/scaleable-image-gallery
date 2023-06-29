<?php
    $input = json_decode(file_get_contents('php://input'), true);
    $fileArray = scandir(($input['dir']));
    echo $fileArray[1]; 
    echo $input;
    echo $input['dir'];?>