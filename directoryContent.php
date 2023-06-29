<?php
    $input = json_decode(file_get_contents('php://input'), true);
    $fileArray = array_diff(scandir(($input['dir'])), array('..', '.'));
    echo implode( ',', $fileArray);?>