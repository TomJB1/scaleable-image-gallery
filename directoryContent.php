<?php
    $input = json_decode(file_get_contents('php://input'), true);
    echo scandir("/var/www/localhost/"+($input['dir'])); ?>