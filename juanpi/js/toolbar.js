/**
 * Created by Administrator on 2016/11/7 0007.
 *
 */
function toolbarfn() {
//客户服务
    $('.toolbar_con_right ul li:last').mouseenter(function () {
        $('.service').css('display', 'block')
    });
    $('.toolbar_con_right ul li:last').mouseleave(function () {
        $('.service').css('display', 'none')
    });

    $('.service').mouseenter(function () {
        $('.service').css('display', 'block')
    });
    $('.service').mouseleave(function () {
        $('.service').css('display', 'none')
    });
//商家中心
    $('.toolbar_con_right ul').children().eq(4).mouseenter(function () {
        $('.centershop').css('display', 'block')
    });
    $('.toolbar_con_right ul').children().eq(4).mouseleave(function () {
        $('.centershop').css('display', 'none')
    });

    $('.centershop').mouseenter(function () {
        $('.centershop').css('display', 'block')
    });
    $('.centershop').mouseleave(function () {
        $('.centershop').css('display', 'none')
    });
//购物袋
    $('.lishop').bind({
        mouseenter: function () {
            $('.lishop').css('background', '#fff');
            $('.bag').css('display', 'block');
            $('.lishop a').css("border-color","#fff");
        },
        mouseleave: function () {
            $('.lishop').css('background', '#f6f6f6');
            $('.bag').css('display', 'none');
            $('.lishop a').css("border-color","#e2e2e2");
        }
    });
    $('.bag').bind({
        mouseenter: function () {
            $('.lishop').css('background', '#fff');
            $('.bag').css('display', 'block');
            $('.lishop a').css("border-color","#fff");
        },
        mouseleave: function () {
            $('.lishop').css('background', '#f6f6f6');
            $('.bag').css('display', 'none');
            $('.lishop a').css("border-color","#e2e2e2");
        }
    });
//购物袋等于购物车里的数量变化
    var getcookie = $.cookie('num');
    if(getcookie != undefined){
        $('.lishop a').find('em').html(parseInt($.cookie("num")));
    }else {
        $('.lishop a').find('em').html(0);
    }

    $(".banner_con_left ul li").bind({
        mouseenter:function(){
            $(this).eq(0).children().children().css('background-positionY', '-25px');
            $(this).children().css('color', '#ff464e');
            $(this).children().css('text-decoration', 'underline');
        },
        mouseleave:function(){
            $(this).eq(0).children().children().css('background-positionY', '-1px');
            $(this).children().css('color', '#5e5e5e');
            $(this).children().css('text-decoration', 'none');
        }
    });
    $(".banner_con_left ul li:even").children("a").css("border-right","solid 1px #eee")
}