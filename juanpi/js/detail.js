/**
 * Created by Administrator on 2016/11/2 0002.
 */
$(function(){
    $('.tbtoolbar').load('indextb.html .toolbar',toolbarfn);
    $('.tbtop').load('indextb.html .top');
    $('.tbnav').load('indextb.html .nav',navfn);
    $('.side').load('indextb.html .sidebar',sidebar);
        /*----------------------------头部回调函数部分----------------------------*/
    function navfn(){
        //签到领积分
        $('.signscore').mouseover(function(){
            $('.signindex').css('display','block')
        });
        $('.signscore').mouseout(function(){
            $('.signindex').css('display','none')
        });
        $('.signindex').mouseover(function(){
            $('.signindex').css('display','block')
        });
        $('.signindex').mouseout(function(){
            $('.signindex').css('display','none')
        });
//手机版
        $('.nav_con').children('dl').children('dt').eq(4).bind({
            mouseenter:function(){
                $('.nav_con').children('.twocode').css('display','block');
            },
            mouseleave:function(){
                $('.nav_con').children('.twocode').css('display','none');
            }
        });
    }
      /*----------------------------头部回调函数部分结束----------------------------*/

    /*--------------------------------收藏分享举报部分-----------------------------*/
    $('.mall ul').children('.share').bind({
        mouseover:function(){
            $('.mall ul').children('.share').children('a').children('img').attr('src','images/mall2.jpg');
            $('.mall ul').children('.three').css('display','block');
        },
        mouseout:function(){
            $('.mall ul').children('.share').children('a').children('img').attr('src','images/mall3.jpg');
            $('.mall ul').children('.three').css('display','none');
        }
    });
    $('.mall ul').children('.three').bind({
        mouseover:function(){
            $('.mall ul').children('.three').css('display','block');
        },
        mouseout:function(){
            $('.mall ul').children('.three').css('display','none');
        }
    });
    /*--------------------------------收藏分享举报部分结束-----------------------------*/

    /*------------------------------------放大镜部分---------------------------------*/
    var scale = 4;
    var Width = $('#smallimg').width()*scale + 'px';
    var Height = $('#smallimg').height()*scale + 'px';
    var conWidth =  $('#smallimg').width()/scale + 'px';
    var conHeight = $('#smallimg').height()/scale + 'px';
    //小图
    var order = 0;
    $('#smallimg').attr('src',"images/biggoods" + order + ".jpg");

    $('.smallbox ul li').bind({
        mouseenter:function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            order = $(this).index();
            $('#smallimg').attr('src',"images/biggoods" + order + ".jpg?ABC=" + new Date());
        }
    });
    $('.bigbox').bind({
        mouseover:function(){
            $('.mag').css('display','block');
            $('#control').css('display','block').css('width',conWidth).css('height',conHeight);
            $('#bigimg').css('width',Width).css('height',Height);
            $('#bigimg').attr('src',"images/biggoods"+order+".jpg");
        },
        mousemove:function(ev){
            $('#control').css('display','block');
            var left = ev.clientX - $(this).offset().left - $('.control').width()/2;
            var top = ev.clientY - $(this).offset().top + $(window).scrollTop() - $('.control').height()/2 ;
            if(left <= 0){
                left = 0;
            }
            if(left >= $(this).width() - $('.control').width()){
                left = $(this).width() - $('.control').width();
            }
            if(top <= 0){
                top = 0;
            }
            if(top >= $(this).height() - $('.control').height()){
                top = $(this).height() - $('.control').height();
            }
            $('#control').css('left',left).css('top',top);
            $('#bigimg').css('left',-scale*left + 'px').css('top',-scale*top + 'px');
        },
        mouseleave : function(){
            $('#control').css('display','none');
            $('.mag').css('display','none');
        }
    });
    /*-------------------------------放大镜部分结束-------------------------------*/


    /*--------------------------------详情页的吸顶--------------------------------*/

    $(document).scroll(function(){
        if($(document).scrollTop()>800){
            $('.alltop').css({
                display:'block',
                position:'fixed',
                top:0,
                left:'111.5px'
            });
            $('.alltop').find('span').css('display','block');
            $('.prod').addClass('active3')

        }else {
            $('.alltop').css({
                position:'absolute',
                top:'-100px',
                left:0
            });
            $('.alltop').find('span').css('display','none');
            $('.prod').removeClass('active3')
        }
    });
    /*--------------------------------详情页的吸顶结束--------------------------------*/

    /*---------------------------------商品的详情部分--------------------------------*/
    //颜色
    $('.seclcolor ul li').bind({
        click:function(){
            $(this).siblings().removeClass();
            $(this).addClass('first');
        }
    });
    //尺寸
    $('.size ul li').bind({
        mouseenter:function(){
            $(this).css('border-color','#ff464e');
            $(this).children().eq(1).css('background','#ff464e')
        },
        mouseleave:function(){
            $(this).css('border-color','#ccc');
            $(this).children().eq(1).css('background','#ccc')
        }
    });
    //数量
    $('.goods_con .num span').children('a').eq(1).click(function(){
        var $num = $('input[class=numinput]').val();
        $num++;
        $('input[class=numinput]').val($num);
        if($num > 1){
            $('.goods_con .num span').children('a').eq(0).css('color','#666')
        }
    });
    $('.goods_con .num span').children('a').eq(0).click(function(){
        var $num = $('input[class=numinput]').val();
        $num--;
        if($num <= 1){
            $num = 1;
            $('.goods_con .num span').children('a').eq(0).css('color','#ccc')
        }
        $('input[class=numinput]').val($num);
    });
    /*---------------------------------商品的详情部分结束--------------------------------*/

    /*-----------------------------------加入购物车部分---------------------------------*/

    $('.addbag').bind({
        mouseenter:function(){
            $('.addbag').css('opacity',0.5)
        },
        mouseleave:function(){
            $('.addbag').css('opacity',1)
        },
        click:function(){

            var progoods = {
                id :$('input[type=hidden]').val(),
                name: $('.goods_con_right').find('h3').text(),
                price : $('.price').find('i').text(),
                orig: $('.price').find('b').text(),
                imgpath : $('.smallbox ul').find('.first').children().eq(0).attr('src'),
                num : $('input[class=numinput]').val(),
                color:'卡其色'
            };

            var tmpStr = JSON.stringify(progoods);
            $.cookie($('input[type=hidden]').val(),tmpStr,{expires:7});
            $.cookie("num",$('input[class=numinput]').val(),{expires:7});
            window.location.href="shop.html";
            $('input[class=numinput]').val(1);
        }
    });
    /*-----------------------------------加入购物车部分结束-------------------------------*/

    /*------------------------------------配送城市列表部分--------------------------------*/

    //地点
    var pro = ["北京","天津","上海","重庆","河北","山西","辽宁","吉林","黑龙江","江苏",
        "浙江","安徽","福建","江西","山东","河南","湖北"];
    /*动态创建省份列表*/
    for(var i=0;i<pro.length;i++){
        var $option = $("<option>"+pro[i]+"</option>");
        $(".province").append($option);
    }
    /*动态创建城市列表*/
    $(".province").change(function(){
        var proSelect = $(".province").children("option:selected").text();
        var proIndex = $(".province").children("option:selected").index();
        /*引入json*/
        $.get("json/area.json",function(res){
            var arr = res[proIndex-1][proSelect];
            $(".city").children().remove();
            for(var j=0;j<arr.length;j++){
                var $option = $("<option>"+arr[j]+"</option>");
                $(".city").append($option);
            }
        })
    });
    /*-------------------------------配送城市列表部分结束----------------------------*/

    /*-------------------------------------手机版----------------------------------*/
    $('.phonebuy').bind({
        mouseenter:function(){
            $('.phonebuy').children('.twocode').css('display','block');
        },
        mouseleave:function(){
            $('.phonebuy').children('.twocode').css('display','none');
        }
    });
    /*-----------------------------------手机版结束--------------------------------*/

    /*----------------------------------楼梯选项卡---------------------------------*/

    $('.tabul li').click(function(){
        var number = $(this).index();
        $(this).siblings().removeClass('active2');
        $(this).addClass('active2');
        if(number == 0){
            var _scrollTop = $('.goodsinfo').find('p').eq(0).offset().top - 200;
        }
        if(number == 1){
            var _scrollTop = $('.goodsinfo').find('p').eq(3).offset().top - 200;
        }
        if(number == 2){
            var _scrollTop = $('.goodsinfo').find('p').eq(4).offset().top - 200;
        }
        $(document).scrollTop(_scrollTop);
    });
    $('.prod li').click(function(){
        var number2 = $(this).index();
        if(number2 == 0){
            var _scrollTop2 = $('.goodsinfo').find('p').eq(1).offset().top - 200;
        }
        if(number2 == 1){
            var _scrollTop2 = $('.goodsinfo').find('p').eq(2).offset().top - 200;
        }
        $(document).scrollTop(_scrollTop2);
    });
    /*----------------------------------楼梯选项卡结束---------------------------------*/

    /*------------------------------------消费保障部分---------------------------------*/
    $('.consume_con li').mouseenter(function(){
        var num = $(this).index();
        $('.consume_img ul').find('li').css('display','none');
        $('.consume_img ul').children().eq(num).css('display','block');
    });
    /*----------------------------------消费保障部分结束-------------------------------*/

});