$(function(){
    $('.bottom').load('indextb.html .foot_bottom');

        /*----------------------------客户服务-------------------------*/
    $('.toolbar_con_right ul li:last').mouseenter(function(){
        $('.service').css('display','block')
    });
    $('.toolbar_con_right ul li:last').mouseleave(function(){
        $('.service').css('display','none')
    });
    $('.service').mouseenter(function(){
        $('.service').css('display','block')
    });
    $('.service').mouseleave(function(){
        $('.service').css('display','none')
    });
        /*-------------------------------客户服务结束-----------------------------*/

        /*---------------------------------猜你喜欢-------------------------------*/
    var bandData = [];
    var $banList = $('.like_con_list');
    $.get("json/shopjson.json",function(resp){
        bandData = resp;
        var str2 = '';
        for(var j=0;j < 12 ;j++){
            str2 += '<li>'+ '<img src="' + bandData[j].imgSrc + '"/>' +
                '<p class="up">'+'<span>'+bandData[j].info+'</span>'+'<em>'+bandData[j].upnew+'</em>'+'</p>'+
                '<p class="bottom">'+'<em>￥'+'</em>'+'<i>'+bandData[j].Orig+'</i>'+'<b>'+bandData[j].price+'</b>'+'<strong>'+bandData[j].count+'</strong>'+'<img src="'+bandData[j].littleimgSrc+'"/>'+'</p>'+
                '<div class="go">去购买'+'</div>'+
                '</li>'
        }
        $banList.html(str2);
        $('.like_con_list li').bind({
            mouseenter:function(){
                clearInterval(time);
                $(this).find('.go').css('display','block');
            },
            mouseleave:function(){
                autoplay();
                $(this).find('.go').css('display','none');
            }
        });
    });
        /*-----------------------------猜你喜欢结束-----------------------------*/

        /*--------------------------------轮播图-------------------------------*/
    var index = 0;
    clearInterval(time);
    var time = null;
    autoplay();
    function autoplay(){
        time = setInterval(function(){
            index = index - 1220;
            if(index == -3660){
                index = 0;
            }
            var ord = index/ -1220;
            $('.like_cont_ul').children().removeClass();
            $('.like_cont_ul').children().eq(ord).addClass('currnav');
            $('.like_con_list').animate({
                marginLeft:index+'px'
            })
        },3000)
    }
        /*--------------------------------轮播图结束-------------------------------*/

        /*--------------------------------轮播图导航-------------------------------*/
    $('.like_cont_ul').children().bind({
        mouseover:function(){
            var indexnav = $(this).index();
            $('.like_cont_ul').children().removeClass();
            $('.like_cont_ul').children().eq(indexnav).addClass('currnav');
            $('.like_con_list').animate({
                marginLeft:indexnav*(-1220)+'px'
            });
            clearInterval(time)
        },
        mouseout:function(){
            autoplay();
        }
    });
        /*------------------------------轮播图导航结束-----------------------------*/

        /*-------------------------------添加商品-------------------------------*/
    var getcookie = $.cookie('1');
    if(getcookie != undefined){
        var tmpJSON = JSON.parse(getcookie);
        var tmpnum = parseInt(tmpJSON.num);
        var $li = $('<li class="selgoods_info">'+
            '<img src='+tmpJSON.imgpath+'/>'+
            '<span class="span1">'+'<a>'+tmpJSON.name+'</a>'+'<br>'+'<i>颜色分类：'+tmpJSON.color+'</i>'+'</span>'+
            '<span class="span2">'+'<em>'+tmpJSON.price+'</em>'+'<br>'+'<b>'+tmpJSON.orig+'</b>'+'</span>'+
            '<em class="num">' + '<span> '+ '<a class="decnum">-' + '</a>' + '<input class="numinput" type="text" value="' + tmpnum + '"/>' + '<a class="addnum">+'+'</a>'+'</span>'+'</em>'+
            '<span class="span3">' + tmpJSON.price + '</span>'+
            '<span class="span4">'+'<img class="delgoods" src="images/del.jpg"/>'+'</span>'+
            '</li>');
        $('.goodslist').append($li);

        //数量++
        $('.addnum').click(function(){
            var $tmpnum = $('input[class=numinput]').val();
            $tmpnum++;
            $('input[class=numinput]').val($tmpnum);
            var num =  $('input[class=numinput]').val();
            $.cookie("num",num,{expires:7});
            if($tmpnum > 1){
                $('.selgoods_info .num span').children('a').eq(0).css('color','#666');
            }
        });
        //数量--
        $('.decnum').click(function(){
            var $tmpnum = $('input[class=numinput]').val();
            $tmpnum--;
            if($tmpnum <= 1){
                $tmpnum = 1;
                $('.selgoods_info .num span').children('a').eq(0).css('color','#ccc')
            }
            $('input[class=numinput]').val($tmpnum);
            var num =  $('input[class=numinput]').val();
            $.cookie("num",num,{expires:7});
        });
        var Num = $.cookie("num");
        $('input[class=numinput]').val(Num);
    };
    /*-------------------------------添加商品结束-------------------------------*/

    /*--------------------------------删除购物车-------------------------------*/
    $('.delgoods').click(function(){
        $.removeCookie("1");
        $.removeCookie("num");
        $('.selgoods_info').remove();
    });
    /*------------------------------删除购物车结束-----------------------------*/
});