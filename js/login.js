$(function(){
    console.log(66)
 $('#menu_cli').on('click',function(){
        $('.userLogin').show();   
        $('.mobileLogin').hide();
        $('#menu_cli').addClass('on');
         $('#menu_cli2').removeClass('on'); 
       
    })
    $('#menu_cli2').on('click',function(){
        $('.userLogin').hide();
        $('.mobileLogin').show();
        $('#menu_cli2').addClass('on');
        $('#menu_cli').removeClass('on');
    })

    //账户登录
    
    $name = '';
    $psw ='';
    // $isok_p= false;
    // $isok_psw = false;
    $isok_yzm = false;
    $('#un').on('blur',function(){
        $name = $('#un').val().trim();
        if(checkReg.tel($name)){
            $('.tishi_1').hide();
            $.ajax({
                url: '../api/login.php',
                type: 'post',
                data: {'name': $name},
                success: function(str){
                    console.log(str);
                    if(str == 'yes0'){
                        $('.tishi_1').hide();
                        // $isok_p = !$isok_p;
                    }else{
                        $('.error_msg').html('账户不存在！');
                        $('.tishi_1').show();
                    }
                }
            })
            
            
        }else {      
            $('.error_msg').html('请输入11位数手机号码');
            $('.tishi_1').show();
        }
    })
    //验证密码
    $('#pwd').on('blur',function(){
        $psw = $('#pwd').val().trim();
        if(checkReg.psweasy($psw)){
            $('.tishi_1').hide();
        }else{
            $('.error_msg').html('密码范围在6~20位之间！');
            $('.tishi_1').show();
        }
    })
     
     //点击改变验证码
     $('.yzm').html(randomCode());
    $('.echange').on('click',function(){
        $('.yzm').html(randomCode());
        
    })
    //验证验证码
    $num_r = '';
    $('#yzm').on('blur',function(){
        $num_l = $(this).val().trim();
         $num_r = $('.yzm').html().trim();  
        console.log($num_r,$num_l);
        if($num_l){
            $('.tishi_1').hide();
            if($num_l !== $num_r){
                $('.error_msg').html('验证码错误');
                $('.tishi_1').show();
         }else{
            $isok_yzm = !$isok_yzm;
         }
        }else{
            $('.error_msg').html('请输入四位验证码');
            $('.tishi_1').show();
         }

    })
    //验证表单
            
            $userphone = getCookie('phone');
            $userpsw = getCookie('psw');
            console.log($userphone,$userpsw);
            $('#un').val($userphone);
            $('#pwd').val($userpsw);
            $('#yzm').val('');
            $('#cli_login').on('click',function(){
                // console.log($isok_p);
                // console.log($isok_psw);
                console.log($isok_yzm);               
                if($isok_yzm){
                    $name = $('#un').val().trim();
                    $psw = $('#pwd').val().trim();
                    $.ajax({
                            url: '../api/login.php',
                            type: 'post',
                            data: {'name': $name,
                                'psw': $psw,
                            },
                            success:function(str){

                                console.log($name,$psw)
                                if(str == 'yes1'){
                                    setCookie('phone',$name,7);
                                    setCookie('psw',$psw,7);
                                    location.href = '../index.html';
                                }else{
                                    $('.error_msg').html('用户名或密码错误');
                                    $('.tishi_1').show();
                                }
                            }
                        })
                }
            
        })
   
    

    //2、手机验证
    $name2 = '';
    $num_r2 = '';
    $isok_n = false;
    $isok_y = false;
    $('#p_un').on('blur',function(){
        $('.p_error_msg').html('请输入11位数手机号码');
        $('.tishi_2').show();
        $name2 = $('#p_un').val();
        if(checkReg.tel($name2)){
            $('.tishi_2').hide();
            $isok_n = !$isok_n;
        }else {      
            $('.p_error_msg').html('请输入11位数手机号码');
            $('.tishi_2').show();
        }

    })
    //验证码验证
    $('#p_yzm').on('blur',function(){
        $num_l2 = $('#p_yzm').val().trim();
        $num_r2 = $('.check_yzm').html();

        if($num_l2){
            $('.tishi_2').hide();
            if($num_l2==$num_r2){
                $('.tishi_2').hide();
                console.log($num_l2,$num_r2)
                $isok_y = !$isok_y;
            }else{
                $('.p_error_msg').html('验证码错误!');
                $('.tishi_2').show();
            }
        }else{
            $('.p_error_msg').html('请输入4位验证码!');
            $('.tishi_2').show();  
        }
        
    })

    //验证码直接登录
    $('#cli_p_login').on('click',function(){
                console.log($isok_n);
                console.log($isok_y);
                if( $isok_n&&$isok_y){
                    $.ajax({
                            url: '../api/login.php',
                            type: 'post',
                            data: {'name': $name2,
                            },
                            success:function(str){
                                console.log(str); 
                                if(str == 'yes0'){
                                    location.href = '../yaofangwang.html';
                                }
                            }
                        })
                }
            
        })
    //登录跳转注册
    $('.register_link').on('click',function(){
        console.log(111);
        location.href = 'reg.html';
    })

    $('.reg').click(function(){
        location.href = 'reg.html';
    })
    
    
})