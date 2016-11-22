/**
 * Created by Administrator on 2016/11/7 0007.
 *
 */

//sidebar
function sidebar(){
    function Move(obj, obj_box) {
        $(obj).bind({
            mouseenter: function () {
                $(obj_box).css('display', 'block');
                $(obj_box).stop().animate({
                    right: '35px'
                })
            },
            mouseleave: function () {
                $(obj_box).css('display', 'none');
                $(obj_box).stop().animate({
                    right: '85px'
                })
            }
        });
        $(obj_box).bind({
            mouseenter: function () {
                $(obj_box).css('display', 'block');
                $(obj_box).stop().animate({
                    right: '35px'
                })
            },
            mouseleave: function () {
                $(obj_box).css('display', 'none');
                $(obj_box).stop().animate({
                    right: '35px'
                });
                $(obj_box).stop().animate({
                    right: '85px'
                })
            }
        });
    }
    Move('.side_user', '.side_user_box');
    Move('.side_love', '.side_love_box');
    Move('.side_money', '.side_money_box');
    Move('.complain', '.complain_box');
    Move('.code', '.code_box');
    Move('.backtop', '.backtop_box');
//点击side_user_box消失
    $('.side_user_box span').click(function () {
        $('.side_user_box').css('display', 'none');
    });
//返回顶部
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.backtop').css('display', 'block');
        } else {
            $('.backtop').css('display', 'none');
        }
    });
    $('.backtop').click(function () {
        $("html,body").animate({"scrollTop": 0})
    });
//sidebar中li变色
    $('.sidebar ul li').bind({
        mouseenter: function () {
            $(this).css('background', '#ff464e');
        },
        mouseleave: function () {
            $(this).css('background', '#444');
        }
    });
//sidebar的购物袋也应该等于购物车的数量
    var getcookie = $.cookie('num');
    if(getcookie != undefined){
        $('.cart_num').html(parseInt($.cookie("num")));
    }else {
        $('.cart_num').html(0);
    }
}