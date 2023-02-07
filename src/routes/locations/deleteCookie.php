<?php
if (isset($_COOKIE['jwt'])) {
    unset($_COOKIE['jwt']);
    setcookie('jwt', null, -1, '/');
    return true;
} else {
    return false;
}
?>