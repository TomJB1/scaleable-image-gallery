<?php
session_start();
if('secret' == $_POST["password"]):?>

<h1>pass</h1>

<?php else: ?>

    <h1>access denied</h1>

<?php endif ?>
<h1>Test</h1>