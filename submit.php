<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = htmlspecialchars($_POST['name']);
  echo "Hello, " . $name . "! Your form has been submitted.";
}
?>