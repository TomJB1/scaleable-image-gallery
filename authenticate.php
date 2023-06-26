<?php
session_start();
if('secret' == $_POST["password"]): ?>

<?php $_SESSION['logged_on'] = true; 
header("Location: gallery.php"); ?>


<?php else: ?>

    <h1>access denied</h1>

<?php endif ?>