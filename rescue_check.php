<?php
//DB details
    $dbHost     = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName     = 'ifa_hack';
    
    //Create connection and select DB
    $conn = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
    
    //Check connection
    if($conn->connect_error){
       die("Connection failed: " . $conn->connect_error);
    }
    
$c = 1;

$sql = "SELECT * FROM `store`";
$dt = mysqli_query($conn,$sq1);
$max = mysqli_num_rows($dt);


while($c == 1)
{
	

	$sq2 = "SELECT * FROM `store` Where `count` = 0 ";
						$dataTable2 = mysqli_query($conn,$sq2);

						while($allData2 = mysqli_fetch_assoc($dataTable2))
						{
							// Authorisation details.
								$username = "tharunr22@gmail.com";
								$hash = "aaa348e82b46968800725104e9e790562f3544a77868174f5f9768d28cb58f1a";

								// Config variables. Consult http://api.textlocal.in/docs for more info.
								$test = "0";

								// Data for text message. This is the text message data.
								$sender = "RESCUE_ALERT"; // This is who the message appears to be from.
								$numbers = "7358535419"; // A single number or a comma-seperated list of numbers
								$message = "Hurry drowning in". $allData2['location']."\n Lattitude = ".$allData2['lattitude']."\nLongitude = ".$allData2['longitude']."\nEmergency = <a href='IFA_hack/emergency.php'></a>\n";
								// 612 chars or less
								// A single number or a comma-seperated list of numbers
								$message = urlencode($message);
								$data = "username=".$username."&hash=".$hash."&message=".$message."&sender=".$sender."&numbers=".$numbers."&test=".$test;
								$ch = curl_init('http://api.textlocal.in/send/?');
								curl_setopt($ch, CURLOPT_POST, true);
								curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
								curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
								$result = curl_exec($ch); // This is the result from the API
								curl_close($ch);

								$s = "UPDATE `store` SET `count`='1' WHERE 1";
								mysqli_query($conn,$s);

						}




}
?>