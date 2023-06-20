<!DOCTYPE html>
<html>
<body>

    <?php
    if('secret' == $_POST["password"]): ?>
        <h1>access allowed</h1>
    <?php else: ?>
        <h1>access denied</h1>
    <?php endif ?>
</body>
</html> 