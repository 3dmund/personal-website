<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "edmundtian1997@gmail.com";
$subject = "New message from " . $name . ": " . $email;

mail ($to, $subject, $message, $name);
// echo 'one'
// $sent = mail ($to, $subject, $message, $name);
// echo 'two'
// if ($sent) {
// 	echo 'Sent'
// } else {
// 	echo 'Nah'
// }
// echo'three'


/*
if (isset($_POST['name'], $_POST['email'], $_POST['message'])) //or whatever $_POST related condition and if so
{
  //saving code or mailing code etc
	$name = $_POST['name'];
	$email = $_POST['email'];
	$to = "edmundtian1997@gmail.com";
	$subject = "New message from " . $name . ": " . $email;
	$message = $_POST['message'];

	$sent = mail ($to, $subject, $message, "From: " . $name);

	if ($sent) {
		echo 'Sent'
	} else {
		echo 'Nah'
	}

    // echo '<div class="specialMessage">Thank you! </div>';
}
*/


?>