<?php
include 'conn.php';
$name = isset($_POST['name']) ? $_POST['name'] : '';
$psw1 = isset($_POST['psw']) ? $_POST['psw'] : '';
// $psw2 = isset($_POST['password2']) ? $_POST['password2'] : '';
// $sql = "select * from user where name='$name' and psw1='$psw1' and psw2 = '$psw2'";
// $sql = "select * from user where name='$name' and psw1='$psw1'";
$sql = "select * from user where name='$name'";
$res = $conn->query($sql);
$sql2 = "select * from user where name='$name' and psw1='$psw1'";
$res2 = $conn->query($sql2);
if($res->num_rows){
    echo 'yes'; 
}else{
    echo 'no';
}
if($res2->num_rows){
        echo '1';//表示表里面有可以登录
    }else{
        echo '0';
    }



?>