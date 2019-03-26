<?php
include 'conn.php';
$name = isset($_POST['username']) ? $_POST['username'] : '';
$psw1 = isset($_POST['password1']) ? $_POST['password1'] : '';
$psw2 = isset($_POST['password2']) ? $_POST['password2'] : '';
$sql = "select * from user where name = '$name'";
$res = $conn->query($sql);
if(!$res->num_rows){
    if($psw1 == $psw2){
    $sql1 = "insert into user(name,psw1,psw2) values ('$name','$psw1','$psw2')";
    $res1 = $conn->query($sql1);
        if($res1) {
                echo 'yes';
            }else{
                echo 'no';
            }   
    }else{
        echo '两次输入的密码不一致';
    }    
}else{
    echo 0;//表示注册表有不能注册
}



?>