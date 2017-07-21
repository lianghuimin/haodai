$(".menu_li").hover(function(){
    $("#menu_content_bg").css("border","1px solid #D0D0D0");
    $(this).css("color","#ff6700");
    $("#"+$(this).attr("control")).stop().slideDown(300);
    $("#menu_content_bg").height(230);
},function(){
 $("#"+$(this).attr("control")).stop().slideUp(300);
   $(this).css("color"," #424242");
    $("#menu_content_bg").height(0);
    $("#menu_content_bg").css("border","0px solid #D0D0D0");
})
$(".ul111>li>*").hover(function(){
    $("#menu_content_bg").css("border","1px solid #D0D0D0");
    $(this).css("color","#ff6700");
    $("#"+$(this).attr("control")).stop().slideDown(300);
    $("#menu_content_bg").height(230);
})
//$(".ul111>li>*").hover(function(){
//  $("#menu_content_bg").css("border","1px solid #D0D0D0");
//  $(this).css("color","#ff6700");
//  $("#"+$(this).attr("control")).stop().slideDown(300);
//  $("#menu_content_bg").height(230);
//})
//输入框获取焦点
$("#find_input").focus(function(){
    $("#find_wrap").css("border","1px solid #ff6700");
    $("#find_but").css("border-left","1px solid #ff6700");
})
//输入框失去焦点
$("#find_input").blur(function(){
    $("#find_wrap").css("border","1px solid #F0F0F0");
    $("#find_but").css("border-left","1px solid #F0F0F0");
})
//Go按钮
$("#find_but").hover(function(){
    $(this).css({"background":"#ff6700",color:"#fff"});
},function(){
    $(this).css({"background":"#fff",color:"#424242"});
})
//左侧菜单栏
$("#banner_menu_wrap").children().hover(function(){
    $(this).css("background","#ff6700");
    $(this).children(".banner_menu_content").css("border","1px solid #F0F0F0").show();
},function(){
    $(this).css("background","none");
    $(this).children(".banner_menu_content").css("border","0px solid #F0F0F0").hide();
})
//大图切换
$(function(){
    var i=0;
    var big_banner_pic = $("#big_banner_pic");
    var allimg=$("#big_banner_pic li").length;
    function img_change(){
        var img_i=i*-1226+"px";
        big_banner_pic.animate({opacity:".2"},100,function(){
            big_banner_pic.css("left",img_i );
            big_banner_pic.animate({
                opacity: "1"
            }, 100);
        })
    }
    function automatic(){
        i+=1;
        if(i>=allimg){
            i=0;
        }
        img_change();
    }
    change_self_time = setInterval(automatic, 3000);
    //大图鼠标移入  箭头显示
    $("#big_banner_change_wrap").hover(function(){
        clearInterval(change_self_time);
        $("#big_banner_change_wrap").children().show();
    },function(){
        //移出 箭头隐藏
        change_self_time = setInterval(automatic, 3000);
        $("#big_banner_change_wrap").children().hide();
    })
    //上一张
    $("#big_banner_change_prev").click(function(){
        i += 1;
        if (i >= allimg) {
            i = 0;
        }
        img_change();
    })
    //下一张
    $("#big_banner_change_next").click(function(){
        i -= 1;
        if (i <= 0) {
            i = allimg - 1;
        }
        img_change();
    })
})