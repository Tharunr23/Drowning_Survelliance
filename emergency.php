<!DOCTYPE html>
<html>
<head>    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>One's Segain</title>
    <link rel="icon" type="icon" href="./images/logo1.jpg">
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<link href="css/owl.carousel.min.css" rel="stylesheet">
	<link href="css/fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet">
	<link href="css/owl.theme.default.min.css" rel="stylesheet">
	<link href="css/animate.css" rel="stylesheet">
	<link href="css/silk.css" rel="stylesheet">
	<link href="css/magnific-popup.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet">
	<link href="css/style.css" rel="stylesheet">
	<link href="css/main.css" rel="stylesheet">
	<!--<link href="css/silk.css" rel="stylesheet">-->
	<link href="css/responsive.css" rel="stylesheet">


	<style type="text/css">
		
			/*Horizontal Line*/
		.style13{
				height: 10px;
				border: 0;
				box-shadow: 0 10px 10px -10px #8c8b8b inset;
				}




	</style>
</head>

	<body class="" style="display: none;">
    <div class="l-loading show show-darkgray">
         <span class="outer-load"></span> <span class="outer-load"></span>
         <div class="container-load">
            <span class="inner-load"></span> <span class="inner-load"></span> <span class="inner-load"></span> <span class="inner-load"></span>
         </div>
      </div>
   
      <!-- loading -->
      <header class="site-header" id="masthead">
         <div class="container">
            <div class="site-branding">
               <a data-href-title="Home" href="allcontent.php" id="site-logo">
                  
                  <img alt="popart studio logo" class="logo-image" src="images/logo.png" width="" height="">
                  
              
               </a>
            </div>
            <div class="nav-wrapper" id="navsidebar">
               <nav class="main-navigation" data-nav-headline="Menu" id="site-navigation">
                  <ul class="clear" id="primary-nav">
                     <li>
                        <span class="nav-link-wrap"><a data-hover-text="Home" data-href-title="Home" href="allcontent.php"><span>Home</span></a></span>
                     
                     </li>
                 
					
					 
					 <li>
                        <span class="nav-link-wrap"><a data-hover-text="Habitation" data-href-title="IT" href="habitation.php"><span>Habitation</span></a></span> <span class="sub-menu-btn icon-circle-plus"></span>
                        <div class="sub-menu-wrapper">
                           <div class="sub-menu" data-menutitle="Web Design">
                              <ul class="clear">
                                 <li><span class="nav-link-wrap"><a data-hover-text="Predators" data-href-title="Predators" href="habitaion.php"><span>Predators</span></a></span></li>
                                 <li><span class="nav-link-wrap"><a data-hover-text="Ship" data-href-title="Ship" href="habitaion.php"><span>Ship</span></a></span></li>
                                 <li><span class="nav-link-wrap"><a data-hover-text="Endangered Species" data-href-title="Endangered Species" href="habitaion.php"><span>Endangered Species</span></a></span></li>
                              </ul>
                           </div>
                        </div>
                     </li>

                     <li>
                        <span class="nav-link-wrap"><a data-hover-text="Survelliance" data-href-title="survelliance" href="survelliance.php"><span>Survelliance</span></a></span> <span class="sub-menu-btn icon-circle-plus"></span>
                        
                        
                     </li>
                      <li>
                        <span class="nav-link-wrap"><a data-hover-text="Rescued" data-href-title="Rescued" href="rescued.php"><span>Rescued</span></a></span> <span class="sub-menu-btn icon-circle-plus"></span>
                        
                        
                     </li>
					 
                     <li style="background-color: red;">
                        <span class="nav-link-wrap"><a data-hover-text="Emergency" data-href-title="Emergency" href="emergency.php"><span>Emergency</span></a></span>
                   
                     </li>
					 
					    <li>
                        <span class="nav-link-wrap"><a data-hover-text="Logout" data-href-title="Logout" href="" onclick="lgout()"><span>Logout</span></a></span>
                   
                     </li>
					 
                     
                  </ul>
               </nav>
               <!-- main-navigation --></div></div></header>

                <main style="padding-top: 200px;" id="main" class="site-main" itemscope itemtype="http://schema.org/WebPageElement" itemprop="mainEntityOfPage">

                  <?php

                    //DB details
                $dbHost     = 'localhost';
                $dbUsername = 'root';
                $dbPassword = '';
                $dbName     = 'ifa_hack';
                
                //Create connection and select DB
                $db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);
                
                //Check connection
                if($db->connect_error){
                   die("Connection failed: " . $db->connect_error);
                }
                else
                {

                  $sq1 = "SELECT * FROM `temp_report`";
                  $dataTable = mysqli_query($conn,$sq1);
                  $rowTable = mysqli_num_rows($dataTable);
                  
                  if($rowTable >= 1)
                  {
                      $sq2 = "SELECT * FROM `store` Where 1 ";
                      $dataTable2 = mysqli_query($conn,$sq2);

                      while($allData2 = mysqli_fetch_assoc($dataTable2))
                      {
                        
              
                  ?>
      
         <div class="it-lists">
         <div class="container row">
         <div class="col-sm-6">

        <div class="img-hover thumbnail">
        <p><?php 
                $result = $allData2['img'];
            
            if($result->num_rows > 0){
                $imgData = $result->fetch_assoc();
                
                //Render image
                header("Content-type: image/jpg"); 
                echo $imgData['image']; 
            }else{
                echo 'Image not found...';
            }
             ?>" class="img-responsive center-block">
        </p></div>
        <h4>Rabindranath Das</h4>


         </div>
         <div class="col-sm-6">
          <table>
            <tr>
              <td>Location :</td>
              <td><?php echo $allData2['location'];?></td>
            </tr>
            <tr>
              <td>Date :</td>
              <td><?php echo $allData2['time'];?></td>
            </tr>
             <tr>
              <td>Lattitude :</td>
              <td><?php echo $allData2['lattitude'];?></td>
            </tr>
             <tr>
              <td>Longitude :</td>
              <td><?php echo $allData2['longitude'];?></td>
            </tr>
             <tr>
              <td>Map</td>
              <td><a href="<?php echo $allData2['map'];?>"><?php echo $allData2['map'];?></a></td>
            </tr>
          </table>
         </div>
         </div>
         </div>
       </main>


       <footer class="site-footer" id="mastfoot" itemscope itemtype="http://schema.org/Organization">
         <link itemprop="additionalType" href="http://www.productontology.org/id/Digital_agency" />
         <meta itemprop="name" content="One's Segain">
         <link itemprop="url" href="/">
         <meta itemprop="taxID" content="106642910">
         <a href="#" id="toTop"><span class="icon-arrow-up"></span></a><br>
         <span class="footer-pretitle">Do you have an idea?</span>
         <h2 class="section-title">Contact us</h2>
         <span class="footer-email">E-mail: <a href="mailto:onessegain@yahoo.com" class="no-anim"><span itemprop="email">onessegain@yahoo.com</span></a></span>
         <div class="footer-info container">
         </div></footer>



  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="js/jquery.min.js"></script>
   <script src="js/TweenMax.min.js"></script> 
      <script src="js/ScrollMagic.min.js"></script>   
      <script src="js/animation.gsap.min.js"></script> 
      <!-- PLUGINS FOR HORIZONTAL SCROLL END -->
       <script src="js/scrollspy.bootstrap.min.js" defer></script>
     <script src="js/index.js"></script> <!-- ONLY INDEX PLUGIN END -->
    <script src="js/all-pages.js"></script> <!-- PLUGIN FOR ALL PAGES END -->
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/wow.min.js"></script>
  <script src="js/main.js"></script>

             </div>
           </div>
         </header>
       </body>
       </html>