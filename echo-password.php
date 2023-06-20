<!DOCTYPE html>
<html>
<body>

    <?php
    if($_POST["password"] == 'secret'): ?>
        <h1>access allowed</h1>
    <?php else: ?>
        <h1>access denied</h1>

</body>
</html> 