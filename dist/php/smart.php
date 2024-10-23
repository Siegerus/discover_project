<?php 

$pass = $_POST['password'];             
$email = $_POST['email'];
$policy = $_POST['policy'];
$comment = $_POST['comment'];


require_once('phpmailer/PHPMailerAutoload.php');        
$mail = new PHPMailer;                               
$mail->CharSet = 'utf-8';


$mail->isSMTP();                                     
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                               
$mail->Username = 'ivanoff1siegerus@gmail.com';                 
$mail->Password = 'yyfl tjuw exhg mzsi';                           
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;                                    
 
$mail->setFrom('ivanoff1siegerus@gmail.com', 'discover_project');  
$mail->addAddress('ivanoffsiegerus@gmail.com');     

$mail->isHTML(true);                                  

$mail->Subject = 'Данные';                      
$mail->Body    = '
    Discover-project <br> 
    <hr>
		<b>Пользователь оставил данные!</b> <br> 
	Пароль: ' . $pass . ' <br>
    Согласие на обработку данных: ' . $policy . ' <br>
    Коментарий: ' . $comment . ' <br>
    E-mail: ' . $email . '';
    
if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>