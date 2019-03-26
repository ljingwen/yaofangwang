$(function(){
    //顶部隐藏部分
    $('#my_yfw').on('mouseover',function(){
            $('.hidebox').css('display','block');
        });
    $('#my_yfw').on('mouseout',function(){
            $('.hidebox').css('display','none');
        });
    $('#trusted_show_image').on('click',function(){
        $('#trusted_show_image').css('display','none');
        $('#trusted_hide_image').css('display','block');
        $('.trusted-head').css('display','block');

    });
    $('#trusted_hide_image').on('click',function(){
        $('#trusted_show_image').css('display','block');
        $('#trusted_hide_image').css('display','none');
        $('.trusted-head').css('display','none');

    });
    // 二级导航
    $('.nav-all').hover(function(){
        $('.yHeader').show();
    },function(){
        $('.yHeader').hide();
    })

    // $('.nav-all').on('mouseover',function(){
    //     $('.yHeader').show();
    // })
    // $('.nav-all').on('mouseout',function(){
    //     $('.yHeader').hide();
    // })
    $('.yHeader').on('mouseover',function(){
        $('.yHeader').show();
    })
    $('.yHeader').on('mouseout',function(){
        $('.yHeader').hide();
    })
    var num =0;
    $('.pullDownList').on('mouseover','li',function(){
       num = $(this).index();
       $('#yMenuListCon').css('display','block');
       // console.log( $('#yMenuListCon').eq(num));
       // $('.yMenuListConin').eq(num).css('display','block');
       $('.yMenuListConin').eq(num).css('display','block').siblings().css('display','none');
    })
     $('.pullDownList').on('mouseout','li',function(){
       num = $(this).index();
       $('#yMenuListCon').css('display','none');
       // console.log( $('#yMenuListCon').eq(num));
       // $('.yMenuListConin').eq(num).css('display','block');
       $('.yMenuListConin').eq(num).css('display','none');
    })

     $('#yMenuListCon').on('mouseover',function(){
        $('#yMenuListCon').css('display','block');
        $('.yMenuListConin').eq(num).css('display','block').siblings().css('display','none');
     })
     $('#yMenuListCon').on('mouseout',function(){
        $('#yMenuListCon').css('display','none');
        $('.yMenuListConin').eq(num).css('display','none').siblings().css('display','none');
     })

     // 侧边栏
     $('.toolbar-tabs').on('mouseover','.toolbar-tab',function(){
        $(this).css('background','#e53b46');
        $(this).children().eq(1).css({
            left: '-60px',
            background: '#e53b46'
        });
     })
     $('.toolbar-tabs').on('mouseout','.toolbar-tab',function(){
        $(this).children().eq(1).css({
            left: '40px',
            background: '#e53b46'
        });
     })
     $('.toolbar').on('mouseover','.toolbar-tab',function(){
        $(this).css('background','#e53b46');

     })
     $('.toolbar').on('mouseout','.toolbar-tab',function(){
        $(this).css('background','#4d4d4c');

     })

     $('.menu_left').mouseover(function(){
        console.log($(this).find('em'));
        $(this).find('em').css('left','-50px');
     })
     $('.menu_left').mouseout(function(){
        console.log($(this).find('em'));
        $(this).find('em').css('left','40px');
     })
     
     // 二维码显示
     $('.tbar-tab-erweima').mouseover(function(){
        $('.qrcode').css('display','block');
     })
     $('.tbar-tab-erweima').mouseout(function(){
        $('.qrcode').css('display','none');
     })

     //接受列表页传来的数据渲染
     $data = decodeURI(location.search);
     $id = $data.slice(1);
     console.log($id);
     haha($id);
     $num1 = '';
     function haha($id){
        $.ajax({
         url: '../api/car.php',
         type: 'post',
         data: {'id': $id},
         success: function(str){
            $arr = $.parseJSON(str);
            $res = $arr.data;
            console.log($res);
            // <div id="dealer_930" class="title3">
            //                 <div class="check_top">
            //                     <input class="Each " type="checkbox" name="checkShop">
            //                     ${item.company}
                                                                                                                                            
            //                 </div>
            //             </div>
            $res_car = $res.map(function(item){
                return`<div class="promotion cbuy_hg" data-id="${item.id}">
                            <div class="goods_line">
                                <div class="top list clearfix" style="margin-left: 0;" >
                                    <div class="check">
                                        <input type="checkbox" class="Each " name="checkItem">
                                    </div>
                                    <div class="goods">
                                        <dl>
                                            <a href="javascript:;">
                                                <dt><img src="../img/list/${item.img}" alt=""></dt>
                                                <dd>
                                                    <span>${item.name}<i style="color:#CD6E00;">[特例]</i></span>
                                                    <strong>${item.spec}</strong>
                                                </dd>
                                            </a>
                                        </dl>
                                    </div>
                                    <div class="pices">${item.price}</div>
                                    <div class="num ">
                                        <span class="reduc ">&nbsp;-&nbsp;</span>
                                        <input type="text" value="${item.num}" class="itxt" minnum="1" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
                                        <span class="add  unClick">&nbsp;+</span> 
                                    </div>
                                    <div class="totle">${item.price*item.num}</div>
                                    <div class="available">有货</div>
                                    <a class="del isDel">删除</a>
                                </div> 

                            </div>
                        </div>`
                }).join('');
                

                 $('.imfor_box').html($res_car);
                
                
                 // $('.num').on('click','.add',function(){
                 //        haha($id);
                 // })
                 // 数量的增加 
                 $('.promotion').on('click','.add',function(){
                    $idx = $(this).parent().parent().parent().parent().attr('data-id');
                    console.log($idx);
                    $num = $(this).prev().val();
                     $num++;
                     $(this).prev().val($num);
                    console.log($num);
                    goodTotal($(this));
                    $.ajax({
                        url: '../api/car_add.php',
                        type: 'post',
                        data: {'id': $idx,
                                'num': $num,
                                },
                        success: function(str){
                            if(str == 1){
                                alert('增加成功');
                            }else{
                                alert('增加失败');
                            }
                        }
                    })

                    
                 })
                 //数量的减少   
                 $('.promotion').on('click','.reduc',function(){
                    $idx = $(this).parent().parent().parent().parent().attr('data-id');
                    $num = $(this).next().val();   
                    $num--;
                    if($num <= 1 ){
                        $num=1;
                        $(this).next().val($num);
                    } 
                    $(this).next().val($num);
                    console.log($num);
                    goodTotal($(this));
                    $.ajax({
                        url: '../api/car_decreas.php',
                        type: 'post',
                        data: {'id': $idx,
                                'num': $num,
                                },
                        success: function(str){
                            if(str == 1){
                                alert('减少成功');
                            }else{
                                alert('减少失败');
                            }
                        }
                    })
                 })
                 //小计
                 function goodTotal(now){
                    //找单价
                    $price = now.parent().prev().text()*1;
                    //找数量
                    $num = now.parent().find('input').val() * 1;
                    $total = ($price * $num).toFixed(2);
                    console.log($price,$num,$total);
                    now.parent().next().html($total);
                    NumPrice();
                 }
                 //点击删除就删除当行
                 $('.promotion').on('click','.del',function(){
                    $idx = $(this).parent().parent().parent().attr('data-id');
                    console.log($idx);
                    $res = confirm('您确定要删除吗？');
                    if($res){
                        $.ajax({
                            url: '../api/car_delete.php',
                            type: 'post',
                            data: {'id': $idx},
                            success: function(str){
                                if(str == 1){
                                    console.log('删除成功');
                                }
                            }  
                        })
                        $(this).parent().parent().remove();  
                                    update();
                                    NumPrice();
                    }   
                 })
                 //删除所有行时，没必要保留总价了。
                 function update(){
                    if($('.add').size() == 0){
                        $('.foot').css('display','none');
                    }
                 }
                 //选中单行
                 $('.promotion').on('click','.Each',function(){
                    NumPrice();
                 })
                 //总数量和总价
                 $arr = [];
                
                 function NumPrice(){
                    $arr = [];
                    for($i = 0;$i < $('.check input').size(); $i++){
                        if($('.check input').eq($i).prop('checked')){
                            $arr.push($i);
                        }
                    }
                    if($arr.length == $('.check input').size()){
                        $('.all').prop('checked','checked');
                    }else{
                        $('.all').removeAttr('checked');
                    }
                     $priceAll = 0;//总价
                    $numAll = 0;//总数量
                    for($i=0; $i < $arr.length; $i++){
                        $numAll += $('.itxt').eq($arr[$i]).val() * 1;
                        $priceAll += $('.totle').eq($arr[$i]).text()* 1;
                    }
                    console.log($numAll);
                    console.log($priceAll);
                    $('#number').html($numAll.toFixed());
                    $('#susum').html($priceAll.toFixed());

                 }
                 //全选 不选
                 $('.all').on('click',function(){
                    if($(this).prop('checked')){
                        $('.Each').prop('checked','checked');  
                    }
                    else{
                        $('.Each').removeAttr('checked');
                    }
                    NumPrice();
                 })
                 //全删
                 //手动输入
                 $('.num').on('input','.itxt',function(){
                    goodTotal($(this));
                    NumPrice();
                 })
                 

    

            // $('.num').on('click','.add',function(){
            //     $.ajax({
            //      url: '../api/car.php',
            //      type: 'post',
            //      data: {'id': id},
            //      success: function(str){
            //         var arr = JSON.parse(str);
            //         var res = arr.data;
            //         console.log(res);
            //         var res_car = res.map(function(item){
            //             return` <div id="dealer_930" class="title3">
            //                         <div class="check_top">
            //                             <input class="Each " type="checkbox" name="checkShop">
            //                             攸县望岳东路百姓大药房万福店
                                                                                                                                                    
            //                         </div>
            //                     </div>
            //             <div class="promotion cbuy_hg">
            //                         <div class="goods_line">
            //                             <div class="top list clearfix" style="margin-left: 0;" >
            //                                 <div class="check">
            //                                     <input type="checkbox" class="Each " name="checkItem" checked="true">
                                                                                                                                                    
            //                                 </div>
            //                                 <div class="goods">
            //                                     <dl>
            //                                         <a href="javascript:;">
            //                                             <dt><img src="../img/list/${item.img}" alt=""></dt>
            //                                             <dd>
            //                                                 <span>${item.name}<i style="color:#CD6E00;">[特例]</i></span>
            //                                                 <strong>${item.spec}</strong>
            //                                             </dd>
            //                                         </a>
            //                                     </dl>
            //                                 </div>
            //                                 <div class="pices">${item.price}</div>
            //                                 <div class="num ">
            //                                     <span class="reduc ">&nbsp;-&nbsp;</span>
            //                                     <input type="text" value="${item.num}" class="itxt" minnum="1" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')">
            //                                     <span class="add  unClick">&nbsp;+</span>
            //                                     <span class="restrictions">最多可购买<i>2</i>件</span>
            //                                 </div>
            //                                 <div class="totle">${item.price}</div>
            //                                 <div class="available">有货</div>
            //                                 <a class="del isDel">删除</a>
            //                             </div> 

            //                         </div>
            //                     </div>`
            //         }).join('');
            //         ;
            //         // console.log(fina)
            //          $('.imfor_box').html(res_car);
            //         }
            //     })
            // })
        }
    });
    }

    


})
    
    

     


   
