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



     //选项卡
     $('.tab_menu').on('click','li',function(){
        var num =  $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.list_common').eq(num).show().siblings().hide();
       
     })

     var data = decodeURI(location.search);
     var id = data.slice(1);
     console.log(id);
        $.ajax({
         url: '../api/goods.php',
         type: 'post',
         data: {'id': id},
         success: function(str){
            var arr = JSON.parse(str);
            var res = arr.data[0];
            var now = `<div class="info">
                        <h1><i class="iconfont icon-rx"></i><span style="color:#CD6E00;">[特例]</span>${res.name}</h1>
                        <p class="title" style="color:#CD6E00;height:auto;font-size:15px;">抑郁症 焦虑 烦躁不安 抑郁
                        </p>
                        <p>
                        ${res.spec}&nbsp;/&nbsp;盒<br>
                        商品编码：${res.good_code}<br>
                        <input type="hidden" id="gids" value="113754">
                        批准文号：<a href="javascript:;">${res.offer_code}</a><br>
                        生产厂家：<a style="color: #0c69ae;" href="javascript:;">${res.company}</a>
                        </p>
                        <dl class="cheap_price">
                            <dt>
                                <span>会  员  价：</span>
                                <strong>￥${res.price}</strong>
                                <input type="hidden" id="price" value="73.50">
                            </dt>
                            <span class="tLSP" style="width: auto;"><span class="teLi" style="color: #e50007;">特例商品：</span>针对本品不享受优惠券折扣、积分折扣、每康卡不享受97折。</span>
                       </dl>
                       <div class="select">
                        <dl>
                            <dt>配送至   :</dt>
                            <dd>
                                <div id="summary-stock"></div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>数量         : </dt>
                            <dd>
                                <div class="num">
                                    <span class="minus">-</span>
                                    <input class="am-num-text" id="numInp" type="text" value="1" >
                                    <span class="plus">+</span>
                                </div>
                            </dd>                           
                        </dl>
                        <dl>
                            <dt>库存   : </dt>
                            <dd>
                                <span id="newKuc">91900</span>
                                <span style="color:#E76301;">（限购：<i id="kuc">2</i>件）</span>
                            </dd>
                        </dl>
                    </div>
                    <a href="javascript:;" class="confirm_btn1 btnCart" id="add_cart"><i class="iconfont icon-biaodan"></i>加入需求清单</a>
                    <div class="chu_tip">
                        <p>本品为处方药，您成功预订后，展示药品的药店会根据处方审核结果主动与您联系。（如需协助请拨打400-650-9988）</p>
                    </div>
                    </div>`;
                    $('.middle_property').html(now);
                    // 点击提交需求，把ID传过去
                     $('#add_cart ').click(function(){
                        location.href = 'car.html?'+id;
                     })
         }
     })
     
     
     
    


})