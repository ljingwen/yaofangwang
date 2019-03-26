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
     //公告与服务
     $('#con_service').on('mouseover','li',function(){
        var number = $(this).index();
        $('.news_div').eq(number).show().siblings().hide();
        $(this).css({
            color: '#bc8720',
            borderBottom: '2px solid #bc8720'
        }).siblings().css({
            color: '#5b5b5b',
            borderBottom: 'none'
        });
     })
     //移除的时候
     $('#con_service').on('mouseout','li',function(){
        $(this).css({
            color: '#5b5b5b',
            borderBottom: 'none'
        });
     })
     //药头部
     $('#y_t_bu').on('mouseover','li',function(){
        var nums = $(this).index();
        // $(this).css('display','block').siblings().css('display','block');
        // console.log($(this).parent());
        $('.news_dv').eq(nums).css('display','block').siblings().css('display','none');
        $(this).css('background','#fff').siblings().css('background','#f8f8f8');
        $('.news_dv').parent().children().eq(0).css('display','block');
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
     //1F新药特药特效
     // $('.dRig_drugList dl').on('mouseover',function(){
     //    // $(this).find('img').css('top','10px');
     //    $(this).find('img').animate({
     //       'top': '10px'},'normal').siblings().hide();
     //    console.log(1)
     // })
     
     // $('.dRig_drugList dl').mouseover(function(){
     //    $(this).find('img').animate({
     //       'top': '10px'},'normal').siblings().hide();
     //    console.log(1);
     // })
     //  $('.dRig_drugList dl').mouseout(function(){
     //    $(this).find('img').animate({
     //       'top': '15px'},'normal').siblings().hide();
     //    console.log(2);
     // })  
    // 以上错误经尝试总结委托的子类太大，以致于进去的过程执行了很多次，出来的过程也执行了很多次。
    $('.dRig_drugList').on('mouseover','img',function(){
        $(this).animate({
           'top': '10px'},'normal');
     })


     $('.dRig_drugList').on('mouseout','img',function(){
        $(this).animate({
           'top': '15px'},'normal');
     })
     
     $('.dRig_drug img').hover(function(){
        $(this).animate({'top' : '-5px'},'normal').siblings().hide();
    },function(){
        $(this).animate({'top' : '0px'},'normal');
    });
    //  $('.dRig_drugList img').hover(function(){
    //     $(this).animate({'top' : '10px'},'normal').siblings().hide();
    // },function(){
    //     $(this).animate({'top' : '15px'},'normal');
    // });

    // 底部友情链接

        $('.arrow_down').click(function(){
            if($(this).hasClass('arrow_up')){
                $(this).removeClass('arrow_up').siblings('dd').css('height','25px');
            }else{
                $(this).addClass('arrow_up').siblings('dd').css('height','auto');
            }
            
        })

   // var friendship_links = $('.friendship_links');
    // friendship_links.find('dl').each(function(){
    //     if($(this).find('dd').height()>25){
    //         $(this).append('<a href="javascript:;" class="arrow_down"></a>');
    //     }
    //     $(this).find('dd').css('height',25);
    // })
    
    // $('.arrow_down').click(function(){
    //     // $(this).parents('dl').siblings('dl').find('dd').css({
    //     //     height:25
    //     // })
    //     //     .end().find('.arrow_down');
    //     // $(this).parents('dl').siblings('dl').find('.arrow_down').removeClass('arrow_up');
    //     if($(this).hasClass('arrow_up')){
    //         $(this).removeClass('arrow_up');
    //         $(this).siblings('dd').css({
    //             height:25
    //         })
    //     }else{
    //         $(this).addClass('arrow_up');
    //         $(this).siblings('dd').css({
    //             height:'auto'
    //         })
    //     }
    // })
    // 

    //用户登录
    $userphone = getCookie('phone');
    $userpsw = getCookie('psw'); 
    if($userphone){
        $('.header_existe').css('display','none');
        $('#my_username_header').show().find('span').html($userphone +'，欢迎来到药房网！');
        $('.tuichu').show();
    }else{
        $('.header_existe').css('display','block');
    } 
    //点击退出时退出帐号
    $('.tuichu').on('click',function(){
        removeCookie('phone','',-1);
        removeCookie('psw','',-1);
        $('.header_existe').css('display','block');
    })
    //点击注册时登录注册页
    $('.reg').click(function(){
        console.log(666);
        location.href = 'html/reg.html';
    })
    //点击登录时登录登录页
    $('.login').click(function(){
        location.href = 'html/login.html';
    })
    //抑郁症跳转
    $('.tiaozhuan').on('click',function(){
        window.location = 'html/list.html';
    })  
    
            

    








 



});
  
