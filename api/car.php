<?php
include 'conn.php';
header("content-type:text/html;charset=utf-8");
$id = isset($_POST['id']) ? $_POST['id'] : '' ;
// $name = isset($_POST['name']) ? $_POST['name'] : '';
// $spec = isset($_POST['spec']) ? $_POST['spec'] : '';
// $img = isset($_POST['img']) ? $_POST['img'] : '';
// $company = isset($_POST['company']) ? $_POST['company'] : '';
// $price = isset($_POST['price']) ? $_POST['price'] : '' ;
// $num = isset($_POST['num']) ? $_POST['num'] : '' ;
// $num =1;

$sql = "SELECT * FROM shoppingcar where id ='$id'";
$res = $conn->query($sql);
if($res->num_rows<=0){
    $sql2 = "SELECT * FROM list where id ='$id'";
    $res2 = $conn->query($sql2);   
    $arr = $res2->fetch_all(MYSQLI_ASSOC);
    $name = $arr[0]['name'];
    $spec = $arr[0]['spec'];
    $img = $arr[0]['img'];
    $company = $arr[0]['company'];
    $price = $arr[0]['price'];
    $num = 1;
    $sql3="INSERT INTO shoppingcar(id,name,spec,img,company,price,num)VALUES('$id','$name','$spec','$img','$company','$price','$num')";
    $res3 = $conn->query($sql3); 
    // $sql4 = "select * from shoppingcar where id='$id'";
    $sql4 = "select * from shoppingcar";
    $res4 = $conn->query($sql4);
    $arr2 = $res4->fetch_all(MYSQLI_ASSOC);  
    $list = array('data' => $arr2,'insert' => '1');
    echo json_encode($list,JSON_UNESCAPED_UNICODE);

}else{
    $sql4 = "SELECT * FROM shoppingcar where id ='$id'";
    $res4 = $conn->query($sql4);
    $arr4 = $res4->fetch_all(MYSQLI_ASSOC);
    $num = $arr4[0]['num'];
    $num++;
    $sql5 = " UPDATE shoppingcar SET num='$num' where id='$id'";
    $res5 = $conn->query($sql5);
    // $sql6 = "select * from shoppingcar where id='$id'";
    $sql6 = "select * from shoppingcar"; 
    $res6 = $conn->query($sql6);
    $arr5 = $res6->fetch_all(MYSQLI_ASSOC);
    $list = array(
        'data'=>$arr5,
        'insert'=>'0',
        );
    echo json_encode($list,JSON_UNESCAPED_UNICODE);
     
}

   
 ?>
