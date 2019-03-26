<?php
// 查询数据库所有的数据，将它返回过去
    include 'conn.php';
    header("content-type:text/html;charset=utf-8");
    $id = isset($_POST['id']) ? $_POST['id'] : '' ;
    $sql = "delete FROM shoppingcar where id ='$id'";
    $res = $conn->query($sql);
    // $arr = $res->fetch_all(MYSQLI_ASSOC);
    // var_dump($arr);
    if($res){
        echo 1;
    }else{
        echo 0;
    }
    
?>