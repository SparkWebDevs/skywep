<?php
    if (isset($_POST['func']) and function_exists($_POST['func'])){
            include 'masterDB.php';
	}else{
		 echo 'Invalid call';
		 die();
		}

    $function = $_POST['func'];
    $data1 = $_POST['arg1'];//the form values object
    $data2 = $_POST['arg2'];
    $data3 = $_POST['arg3'];
    $data4 = $_POST['arg4'];
    $data5 = $_POST['arg5'];
    $data6 = $_POST['arg6'];
    $data7 = $_POST['arg7'];
    $data8 = $_POST['arg8'];
    $data9 = $_POST['arg9'];
    $data10 = $_POST['arg10'];
    $data11 = $_POST['arg11'];
    $data12 = $_POST['arg12'];


    //THIS BUILDS THE FUNCTION AND CALLS IT
    $result = $function($data1, $data2,$data3,$data4,$data5,$data6,$data7,$data8,$data9,$data10,$data11,$data12);
    echo $result;
    
    function AJAXsubmitToolingRequest($newToolingRequest){
        submitToolingRequest($newToolingRequest);
    }

?>