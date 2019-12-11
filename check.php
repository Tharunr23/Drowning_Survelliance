<?php


	if($_SERVER["REQUEST_METHOD"] == "POST")
    	{
    		$uname = $_POST['name'];
    		$p = $_POST['pass'];

    		if($uname == "Administrator" && $p == "onessegain")
    		{
    			echo '<script>window.location="allcontent.php"</script> ';
    		}
    		else
    		{
    			echo '<script>window.location="index.php"</script> ';	
    			
    		}
    	}
    	else
    	{
    		echo "Cannot process";
    	}
?>