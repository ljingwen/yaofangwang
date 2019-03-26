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


    //列表页渲染 start
    desc();
    $('.list_page').on('click','a',function(){
        $(this).addClass('list_s').css('color','#fff').siblings().css('color','#4095d4').removeClass('list_s');
        var nums = $(this).index()+1;
        show(nums);



    })
    // 列表页渲染 end
    // 升序 降序 start
    $('.fSort').on('click','a',function(){
        $(this).addClass('sCurr').siblings().removeClass('sCurr');

    })
    $('.sort').click(function(){
        if($(this).find('i').hasClass('iconfont icon-jiantou1')){
            $(this).find('i').removeClass('iconfont icon-jiantou1').addClass('iconfont icon-jiantou-copy-copy-copy');
            sort1();//升序

        }else if($(this).find('i').hasClass('iconfont icon-jiantou-copy-copy-copy')){
            $(this).find('i').removeClass('iconfont icon-jiantou-copy-copy-copy').addClass('iconfont icon-jiantou1')
            sort();//降序
        }else{
            $(this).find('i').addClass('iconfont icon-jiantou1');
            sort1();
        }
        
    })

    // $('.fSort').on('click','i',function(){
    //     if($(this).hasClass('iconfont icon-jiantou1')){
    //         $(this).removeClass('iconfont icon-jiantou1').addClass('iconfont icon-jiantou-copy-copy-copy')
    //     }else if($(this).hasClass('iconfont icon-jiantou-copy-copy-copy')){
    //         $(this).removeClass('iconfont icon-jiantou-copy-copy-copy').addClass('iconfont icon-jiantou1')
    //     }
    // })


    // 初始渲染
    function desc(){
        $.ajax({
         url: '../api/list.php',
         type: 'post',
         async:true,
         dataType:'json',
         data: {
            'page': '1',
            'num': '8'
            },
        success:function(str){
            console.log(str);
            var res = str.data;
            console.log(res);
            // data-id="${data.cid}"
            var arr = res.map(function(item){
                return`<div class="drug_item" data-id="${item.id}" >
                           <div class="drug_item_img">
                               <a href="javascript:;"><img src="../img/list/${item.img}" alt="" /></a>
                           </div>
                           <i>￥${item.price}</i>
                           <a href="javascript:;">${item.name}</a>
                           <span>${item.spec}</span>
                           <span>${item.company}</span>
                           <div class="drug_action">
                               <a href="javascript:;" class="collect_btn">
                                   <i class="iconfont icon-shoucang"></i>
                                   <em>收藏</em>
                               </a>
                               <a href="">
                                    <i class="iconfont icon-gouwuche1"></i>
                                    查看商品详情
                               </a>
                           </div>
                       </div>`;
            }).join('');
            $('.cla_drug_border').html(arr);
            var page = Math.ceil(str.total/str.num);
            var html = '';
            for(var i=0;i<page;i++){
                html += `<a>${i+1}</a>`;
            }
            console.log(html);
            $('.list_page').html(html);
        }
     })
    }

     //封装的函数 start
     function show(num){
        $.ajax({
         url: '../api/list.php',
         type: 'post',
         async:true,
         dataType:'json',
         data: {
            'page': num,
            'num': '8'
            },
            success:function(str){
                console.log(str);
                var res = str.data;
                console.log(res);
                var arr = res.map(function(item){
                    return`<div class="drug_item" data-id="${item.id}">
                               <div class="drug_item_img">
                                   <a href=""><img src="../img/list/${item.img}" alt="" /></a>
                               </div>
                               <i>￥${item.price}</i>
                               <a href="javascript:;">${item.name}</a>
                               <span>${item.spec}</span>
                               <span>${item.company}</span>
                               <div class="drug_action">
                                   <a href="javascript:;" class="collect_btn">
                                       <i class="iconfont icon-shoucang"></i>
                                       <em>收藏</em>
                                   </a>
                                   <a href="javascript:;">
                                        <i class="iconfont icon-gouwuche1"></i>
                                        查看商品详情
                                   </a>
                               </div>
                       </div>`;
                    }).join('');
                    $('.cla_drug_border').html(arr);
                }
            })
    }
    //封装的函数 end
    //降序sort start
     function sort(){
    $.ajax({
     url: '../api/sort.php',
     type: 'post',
     async:true,
     dataType:'json',
     data: {
        'page': '1',
        'num': '8'
        },
        success:function(str){
            console.log(str);
            var res = str.data;
            console.log(res);
            var arr = res.map(function(item){
                return`<div class="drug_item" data-id="${item.id}">
                           <div class="drug_item_img">
                               <a href="javascript:;"><img src="../img/list/${item.img}" alt="" /></a>
                           </div>
                           <i>￥${item.price}</i>
                           <a href="javascript:;">${item.name}</a>
                           <span>${item.spec}</span>
                           <span>${item.company}</span>
                           <div class="drug_action">
                               <a href="" class="collect_btn">
                                   <i class="iconfont icon-shoucang"></i>
                                   <em>收藏</em>
                               </a>
                               <a href="javascript:;">
                                    <i class="iconfont icon-gouwuche1"></i>
                                    查看商品详情
                               </a>
                           </div>
                   </div>`;
                }).join('');
                $('.cla_drug_border').html(arr);
            var page = Math.ceil(str.total/str.num);
            var html = '';
            for(var i=0;i<page;i++){
                html += `<a>${i+1}</a>`;
            }
            console.log(html);
            $('.list_page').html(html);
            }
        })
    }
    // 降序sort end
    // 升序 start
    function sort1(){
    $.ajax({
     url: '../api/sort1.php',
     type: 'post',
     async:true,
     dataType:'json',
     data: {
        'page': '1',
        'num': '8'
        },
        success:function(str){
            console.log(str);
            var res = str.data;
            console.log(res);
            var arr = res.map(function(item){
                return`<div class="drug_item" data-id="${item.id}">
                           <div class="drug_item_img">
                               <a href="javascript:;"><img src="../img/list/${item.img}" alt="" /></a>
                           </div>
                           <i>￥${item.price}</i>
                           <a href="javascript:;">${item.name}</a>
                           <span>${item.spec}</span>
                           <span>${item.company}</span>
                           <div class="drug_action">
                               <a href="javascript:;" class="collect_btn">
                                   <i class="iconfont icon-shoucang"></i>
                                   <em>收藏</em>
                               </a>
                               <a href="javascript:;">
                                    <i class="iconfont icon-gouwuche1"></i>
                                    查看商品详情
                               </a>
                           </div>
                   </div>`;
                }).join('');
                $('.cla_drug_border').html(arr);
            var page = Math.ceil(str.total/str.num);
            var html = '';
            for(var i=0;i<page;i++){
                html += `<a>${i+1}</a>`;
            }
            console.log(html);
            $('.list_page').html(html);
            }
        })
    }
    // 升序 end

    // 跳转的时候传id
    // var id = document.getElementsByClassName('drug_item');
    // console.log(id);
    // $('.drug_item').('click')
    $('.cla_drug_border').on('click','.drug_item',function(){
        console.log($(this).index());
        var dis = $(this).attr('data-id');
        location.href = 'goods.html?'+dis;
    })

    //显示隐藏  
    $isok = false;         
    $('.classify_fold').on('click','.updown',function(){
        if($isok){
          $(this).next().hide();
        }else{
          $(this).next().show();
        }
        $isok = !$isok;
    })
    
})