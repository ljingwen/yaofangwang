<?php
// 查询数据库所有的数据，将它返回过去
    include 'conn.php';
    header("content-type:text/html;charset=utf-8");
    $sql = "SELECT * FROM shoppingcar";
    $res = $conn->query($sql);
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    $list = array(
        'data'=> $arr,
        'total'=>$res->num_rows,
        );          
    echo json_encode($list,JSON_UNESCAPED_UNICODE);
?>