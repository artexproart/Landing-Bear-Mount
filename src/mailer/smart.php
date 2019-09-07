
<?php 

$name  = $_POST['username'];
$phone = $_POST['userphone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'почта с которой будет отправка';                // Наш логин                 
$mail->Password = 'тут пароль от почты с которой будет отправка';                           // Наш пароль от ящика
                           
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('почта с которой будет отправка', 'Заявка с сайта бла бла бла');   // От кого письмо 
$mail->addAddress('почта заказчика');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта Лендинг Медвежья гора';
$mail->Body    = '
	Клиент оставил свои контактные данные<br>
	Имя клиента : <strong> ' . $name . ' </strong><br>
	Его телефон: <strong> ' . $phone . ' </strong><br>';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
	
    return false;
} 

?>