<?php
    session_start();

    if(array_key_exists("userId", $_SESSION)){
        $data = array (
			"error"=>0,
			"report" =>"userLoddedIn"
        );
        echo json_encode($data);
    }else{
        $data = array (
			"error"=>1,
			"report" =>"userNotLoddedIn"
        );
        echo json_encode($data);
    }
?>

