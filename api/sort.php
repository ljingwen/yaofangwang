<?php
include 'conn.php';
header("content-type:text/html;charset=utf-8");
$page = isset($_POST['page']) ? $_POST['page'] : '' ;
$num = isset($_POST['num']) ? $_POST['num'] : '';
$index = ($page - 1)*$num;
$sql = "SELECT * FROM list order by price desc limit $index,$num";
$res = $conn->query($sql);
$arr = $res->fetch_all(MYSQLI_ASSOC);
$sql2 = "SELECT * FROM list";
$res2 = $conn->query($sql2);
$arr2 = $res2->fetch_all(MYSQLI_ASSOC);

$list = array(
    'data'=> $arr,
    'total'=>$res2->num_rows,
    'page'=>$page,
    'num'=>$num
    ); 
      
echo json_encode($list,JSON_UNESCAPED_UNICODE);
 ?>