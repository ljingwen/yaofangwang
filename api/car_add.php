<?php
// 查询数据库所有的数据，将它返回过去
    include 'conn.php';
    header("content-type:text/html;charset=utf-8");
    $id = isset($_POST['id']) ? $_POST['id'] : '4554' ;
    $num = isset($_POST['num']) ? $_POST['num'] : '1' ;
    $sql = "SELECT * FROM shoppingcar WHERE id = $id";  
    $res = $conn->query($sql);
    if($res->num_rows){
      $sql2 = "UPDATE shoppingcar SET num = '$num' WHERE id = '$id'";
      $res2 = $conn->query($sql2);
      echo $res2;  
    }else{
        echo 0;
    }
    
?>