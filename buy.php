<?php
$thankYou = '';
if(isset($_POST["name"]) && !empty($_POST["name"])) {
    $recipient="olehfedot@gmail.com";
    $subject="Form to email message";
    $name=$_POST["name"];
    $email=$_POST["email"];
    $products=isset($_POST["products"]) ? $_POST["products"] : 'Нет тупопродуктов';
    $message=$_POST["someText"];

    $mailBody="Name: $name:\n\nEmail:$email\n\nMassage$message\n\nProducts$products";

    mail($recipient, $subject, $mailBody, "From: $name <$email>");

    $thankYou="<p>Еба работает!!! отправили на мыло " . $recipient . "</p><p>" . $mailBody . "</p>";
} else {
	$thankYou="<p>Сука заполни поле имя!!!!</p>";
}

?>

<!DOCTYPE html>
<html>
<head>
    <link lang="de">
    <title>Basket</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
    <link rel="stylesheet" href="./css/styles.css">
    <script src="./js/main.js"></script>
</head>
<body>

 <?=$mailBody ?>
    
</body>
</html>