<?php
session_start(); $username = $password = $userError = $passError = '';
if(isset($_POST['sub'])){
  $username = $_POST['username']; $password = $_POST['password'];
  if($username === 'admin' && $password === 'password'){
    $_SESSION['login'] = true; header('LOCATION:index.html'); die();
  }
  if($username !== 'admin')$userError = 'Invalid Username';
  if($password !== 'secret')$passError = 'Invalid Password';
}
?>
<!DOCTYPE html>
<html xmlns='http://www.w3.org/1999/xhtml' xml:lang='en' lang='en'>
   <head>
     <meta http-equiv='content-type' content='text/html;charset=utf-8' />
     <title>Login</title>
     <style type='text.css'>
     </style>
   </head>
<body>
  <form name='input' action='<?php echo $_SERVER['PHP_SELF'];?>' method='post'>
    <label for='username'></label><input type='text' value='<?php echo $username;?>' id='username' name='username' />
    <div class='error'><?php echo $userError;?></div>
    <label for='password'></label><input type='password' value='<?php echo $password;?>' id='password' name='password' />
    <div class='error'><?php echo $passError;?></div>
    <input type='submit' value='Home' name='sub' />
  </form>
</body>
</html>