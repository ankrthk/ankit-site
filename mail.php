<?php
header("Access-Control-Allow-Origin: *");
$to  = 'ankrthk@gmail.com'; 
// subject
$subject =  $_REQUEST["subject"];

print_r($subject);
// message
$message = 'Mail sent by : '.$_POST["name"].'<br> Email Address : '.$_POST["email"].'<br> Message :'. $_POST["email"];

// To send HTML mail, the Content-type header must be set
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Additional headers
$headers .= 'From: athakkar.me <ankrthk@gmail.com>' . "\r\n";
$headers .= 'Cc: ankrthk@gmail.com' . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);


?>