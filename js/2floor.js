//“药”秒杀 start
//倒计时
// var interval = 0;
// function ShowCountDown(year,month,day,divname)
// {
//     var now = new Date();
//     var endDate = new Date(year, month-1, day);
//     var leftTime=endDate.getTime()-now.getTime();
//     var leftsecond = parseInt(leftTime/1000);
//     var day1=Math.floor(leftsecond/(60*60*24));
//     var hour=Math.floor((leftsecond-day1*24*60*60)/3600);
//     var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);
//     var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);
//     if(hour < 10){
//         hour = "0" + hour;
//     }
//     if(minute < 10){
//         minute = "0" + minute;
//     }
//     if(second < 10){
//         second = "0" + second;
//     }

//     var cc = document.getElementById(divname);
//     cc.innerHTML ="<b>"+hour+"</b>"+"<b>"+minute+"</b>"+"<b>"+second+"</b>";
// }
// window.setInterval(function(){ShowCountDown(2017,05,11,'time');}, interval);
//“药”秒杀 end
var LINK_STR = '/';
$(function(){
    //精选商品.品牌旗舰店 start
    jQuery(".drug_picScroll .focusBox").slide({ mainCell:".pic",effect:"left", autoPlay:true, delayTime:300});

    $(".brands_img a").eq(0).attr("style","border-top:1px solid #fff;");
    $(".brands_img a").eq(1).attr("style","border-top:1px solid #fff;");
    $(".brands_img a:nth-child(2n)").addClass("rig_b0");
    $(".brands_floatR a").eq(0).attr("style","border-top:1px solid #fff;");
    $(".brands_floatR a").eq(1).attr("style","border-top:1px solid #fff;");
    $(".brands_floatR a:nth-child(odd)").addClass("left_b0");
    $(".brands_img a").hover(function () {
        $(this).removeClass("rig_b0").attr("style","");
        $(this).addClass("bHover");
    },function () {
        $(".brands_img a").eq(0).attr("style","border-top:1px solid #fff;");
        $(".brands_img a").eq(1).attr("style","border-top:1px solid #fff;");
        $(".brands_img a:nth-child(2n)").addClass("rig_b0");
        $(this).removeClass("bHover");
    });
    $(".brands_floatR a").hover(function () {
        $(this).removeClass("left_b0").attr("style","");
        $(this).addClass("bHover");
    },function () {
        $(".brands_floatR a").eq(0).attr("style","border-top:1px solid #fff;");
        $(".brands_floatR a").eq(1).attr("style","border-top:1px solid #fff;");
        $(".brands_floatR a:nth-child(odd)").addClass("left_b0");
        $(this).removeClass("bHover");
    });
    //精选商品.品牌旗舰店 end

    //1F 新药特药 start
    jQuery(".dRig_picScroll .focusBox").slide({ mainCell:".pic",effect:"left", autoPlay:true, delayTime:300});
    $(".dRig_drugList dl:last-child").attr("style","border-right:1px solid #fff;");
    //1F 新药特药 end
});

var intervalid;
$(function(){
    //公告 优质服务
    jQuery("#advice_service").slide();
    //药实惠
    jQuery("#iTab_drugNews").slide();
    //头部的 全屏图片轮播
    jQuery("#banner_picScroll .focusBox").slide({
        mainCell:".pic",
        effect:"left",
        autoPlay:true,
        delayTime:300,
        interTime:5000
    });
    //5F轮播
    jQuery(".dRig_picScroll").slide({
        autoPlay:true
    });
    //新药特药 tab选项卡
    jQuery(".drug_news").slide();
    //媒体报道 图片滚动
    jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
    //右边导航我的关注
    jQuery(".tbar-panel-follow").slide({trigger:"click"});

    //所有图片移入效果
    $('.drug_mRig img,.medBen dl dt img,.dRig_drug img').hover(function(){
        $(this).animate({'top' : '-5px'},'normal').siblings().hide();
    },function(){
        $(this).animate({'top' : '0px'},'normal');
    });

    //优惠券
    
    $(".index_getCoupon").on("click",".noCollar,.ling,.yong",function(){

        var type = $(this).parent().attr('btid');
        var obj = $(this);
        LINK_STR = $(this).parent().attr('link');

        //判断是否不予发放
        if ( 1 ==type) {
            window.open(LINK_STR);
            return;
        }

        $.post('/c/common/Common/homeSendBonus',{type:type},function(data){
            data = eval('('+ data + ')');
            if ( 9== data) {
                $('.dialog .dialog_con .dialog_btn .btn1').attr('href',LINK_STR);
                $(".grabCoupons").fadeIn();
                //obj.next().attr("src","//img.yaofang.cn/pc/yong.png?v=201701");
                //obj.parent().children('img').eq(1).attr("src","//img.yaofang.cn/pc/yong.png?v=201701");
                //3秒倒计时关闭弹框
                i=3;
                $("#auto_close").text(i);
                intervalid = setInterval("fun()", 1000);
            } else if ( 1== data) {
                $('.login_dialog').fadeIn();
            } else {
                layer.msg(data);
                //obj.next().attr("src","//img.yaofang.cn/pc/yong.png?v=201701");
                //obj.parent().children('img').eq(1).attr("src","//img.yaofang.cn/pc/yong.png?v=201701");
                //window.open(LINK_STR);    //运营暂未提供跳转地址，暂时不予放开
            }
        });

    });

    $(".dialog .title a,.coupon_close").click(function(){
        $(".dialog").fadeOut();
    });








});
//3秒倒计时关闭弹框 start
var i = 3;
function fun() {
    if (i == 0) {
        $(".grabCoupons").fadeOut();
        clearInterval(intervalid);
        i = 3;
        console.log(LINK_STR);
        window.open(LINK_STR);
    }
    $("#auto_close").text(i);
    i--;
}
//3秒倒计时关闭弹框 end


//优惠券领取start
$(function(){
    $(".container .index_getCoupon dd a").append("<img class='ling' src='//img.yaofang.cn/pc/ling.png?v=201701'/>");
});
//优惠券领取end

//浏览器兼容
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
//以下是调用上面的函数
var mb = myBrowser();
if ("IE" == mb) {
    alert("建议您切换极速模式再进行访问或者更换其他浏览器进行访问！");
}
