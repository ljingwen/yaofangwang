$(function(){
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
 
    //注册登录color: #f00;
    $('#register').on('focus','input',function(){
        // $('.Validform_wrong').css('visibility','visible');
        $(this).next().css('visibility','visible').css('color','#ccc');
        // if(checkReg.psweasy())
    });
        var isok = false;
        var isok1 = false;
        var isok0 = false;
        var username = '';
        var password1 = '';
        var password2 = '';
        $('.phone').on('blur',function(){
            username= $(this).val();
            console.log(username);
            if(checkReg.tel(username)){
                // $(this).next().css('visibility','hidden');
                $.ajax({
                    url: '../api/reg.php',
                    type: 'post',
                    data: {'username': username},
                    success: function(str){
                        console.log(str);
                        if(str == 1){
                            console.log(666);
                            $('.error_msg_m1').html('该用户名可以注册').css('color','#ccc');
                            isok0 = !isok0;
                        }else if(str == 0){
                            $('.error_msg_m1').html('该用户名已被注册，请换一个');
                            $('.error_msg_m1').css('color','#f00');
                        }
                    }
                })
                
                
            }else{
                $(this).next().css('color','#f00');
            }
        })
        
        $('.psw').on('blur',function(){
           password1 = $(this).val();
            console.log(password1);
            if(checkReg.psweasy(password1)){
                $(this).next().css('visibility','hidden');
            }else{
                $(this).next().css('color','#f00');
            }
        })
            
        $('.psw1').on('blur',function(){
            password2 = $(this).val();
            console.log(password1,password2);
            if(password2 == ''){
                $('.error_msg_m3').html('两次输入的密码不一致').css('color','#f00');
            }else if(checkReg.pwwagain(password1,password2)){
                $('.error_msg_m3').html('两次输入的密码一致').css('color','#ccc');
                isok = !isok;
            }else{
                $('.error_msg_m3').html('两次输入的密码不一致').css('color','#f00');

            }        
        })
        //验证码
        $('.smsVer').html(randomCode());
        $('.smsVer').on('click',function(){
            var num = randomCode();
            $(this).html(num);
        })

        $('.text2').on('focus',function(){
           $('.error_msg_y').css('visibility','visible');
           $('.smsVer').css('color','#000');
        })
        $('.text2').on('blur',function(){
            $('.error_msg_y').css('color','#f00')
            $yzm = $('.text2').val().trim();
            $yzm_c = $('.smsVer').html();
            if($yzm){
               if($yzm == $yzm_c){
                $('.error_msg_y').html('验证码输入正确');
                $('.error_msg_y').css('color','#ccc');
                isok1 = !isok1;
                }
                     
            }else{
                 $('.error_msg_y').css('visibility','visible');
                 
            }
            
        })

        //点击提交时
        $('.btn').on('click',function(){
            if(isok0&&isok &&isok1){
                console.log(555);
                $.ajax({
                    url: '../api/reg1.php',
                    type: 'post',
                   
                    data: {'username': username,
                        'password1': password1,
                        'password2': password2
                    },
                    success:function(str){
                        if(str == 'yes'){
                            
                        }else{
                            alert('您还有信息输错了');
                        }
                    }
                })
                
        }else{
            alert(666);location.href = '../index.html';
        }
        })
        //登录跳转注册
        $('.login').click(function(){
            location.href = 'login.html';
        })
        $('.reg_now').click(function(){
            location.href = 'login.html';
        })
        

        
        
  
})

