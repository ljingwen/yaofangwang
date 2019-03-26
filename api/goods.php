<?php
include 'conn.php';
header("content-type:text/html;charset=utf-8");
$id = isset($_POST['id']) ? $_POST['id'] : '' ;
$sql = "SELECT * FROM list where id ='$id'";
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
$list = array(
    'data'=> $arr,
    );      
echo json_encode($list,JSON_UNESCAPED_UNICODE);
 ?>