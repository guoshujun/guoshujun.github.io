
$(function() {
            /*-------------------------load加载部分--------------------------*/
    $('.tbtoolbar').load('indextb.html .toolbar', toolbarfn);
    $('.tbtop').load('indextb.html .top');
    $('.side').load('indextb.html .sidebar',sidebar);
    $('.bottom').load('indextb.html .foot_bottom');
            /*------------------------load加载部分结束-----------------------*/

            /*----------------------------签到领积分-------------------------*/
    $('.signscore').mouseover(function () {
        $('.signindex').css('display', 'block')
    });
    $('.signscore').mouseout(function () {
        $('.signindex').css('display', 'none')
    });
    $('.signindex').mouseover(function () {
        $('.signindex').css('display', 'block')
    });
    $('.signindex').mouseout(function () {
        $('.signindex').css('display', 'none')
    });
            /*---------------------------签到领积分结束------------------------*/

            /*-----------------------------手机版动画-------------------------*/
    $('.nav_con').children('dl').children('dt').eq(4).bind({
        mouseenter: function () {
            $('.nav_con').children('.twocode').css('display', 'block');
        },
        mouseleave: function () {
            $('.nav_con').children('.twocode').css('display', 'none');
        }
    });
            /*------------------------手机版动画结束--------------------------*/

            /*-------------------------点击左右轮播--------------------------*/
    //左右点击轮播图按钮显示消失
    $('.banner_con_mid').mouseover(function () {
        $('.left').css('visibility', 'visible');
        $('.right').css('visibility', 'visible');
    });
    $('.banner_con_mid').mouseout(function () {
        $('.left').css('visibility', 'hidden');
        $('.right').css('visibility', 'hidden');
    });

    var timer = null;
    //防止多次点击
    var isMoving = false;
    //点击左边
    $('.left').bind({
        mouseover: function () {
            $('.left').css('opacity', '0.7');
            clearInterval(timer)
        },
        mouseout: function () {
            $('.left').css('opacity', '0.5');
            autoPlay();
        },
        click: function () {
            if(isMoving){
                return;
            }
            isMoving = true;
                index--;
                if (index == -1) {
                    index = 2;
                }
                $('.midnav ul').children().removeClass('current');
                $('.midnav ul').children().eq(index).addClass('current');
                $('.banner_con_mid ul').children('li').eq(index).fadeIn(1000,function(){
                    isMoving = false;
                }).siblings('li').fadeOut(1000);
        }
    });
    //点击右边
    $('.right').bind({
        mouseover: function () {
            $('.right').css('opacity', '0.7');
            clearInterval(timer)
        },
        mouseout: function () {
            $('.right').css('opacity', '0.5');
            autoPlay();
        },
        click: function () {
            if(isMoving){
                return;
            }
                isMoving = true;
            index++;
            if (index == 3) {
                index = 0;
            }
            $('.midnav ul').children().removeClass('current');
            $('.midnav ul').children().eq(index).addClass('current');
            $('.banner_con_mid ul').children('li').eq(index).fadeIn(1000,function(){
                isMoving = false;
            }).siblings('li').fadeOut(1000);
        }
    });
            /*---------------------------点击左右轮播结束-----------------------*/

            /*------------------------------轮播图----------------------------*/
    var index = 0;
    clearInterval(timer);
    var timer = null;
    autoPlay();
    function autoPlay() {
        timer = setInterval(function () {
            index++;
            if (index == 3) {
                index = 0;
            }
            $('.midnav ul').children().removeClass();
            $('.midnav ul').children().eq(index).addClass('current');
            $('.banner_con_mid ul').children('li').eq(index).fadeIn(1000).siblings('li').fadeOut(1000);
        }, 5000)
    }
            /*-----------------------------轮播图结束---------------------------*/

            /*-----------------------------轮播图导航---------------------------*/
    $('.midnav ul').children().bind({
        mouseover: function () {
            var indexnav = $(this).index();
            index = indexnav;
            $('.midnav ul').children().removeClass();
            $('.midnav ul').children().eq(indexnav).addClass('current');
            $('.banner_con_mid ul').children('li').eq(indexnav).fadeIn(1000).siblings('li').fadeOut(1000);
    //鼠标移入停止轮播
            clearInterval(timer)
        },
        mouseout: function () {
            autoPlay();
        }
    });
            /*-----------------------------轮播图导航结束-----------------------*/

            /*---------------------------商品透明度及今日品牌导航-----------------*/
    $('.banner_con_right ul li').bind({
        mouseenter: function () {
            $(this).css('opacity', 0.5);
        },
        mouseleave: function () {
            $(this).css('opacity', 1);
        }
    });

    $('.band_con_top ul li:not(.last)').bind({
        mouseenter:function(){
            $(this).children("em").children("img").attr("src",'images/icon-arrow-hover.png');
        },
        mouseleave:function(){
            $(this).children("em").children("img").attr("src",'images/icon-arrow.png');
        }
    });
            /*---------------------商品透明度及今日品牌导航结束--------------------*/

            /*--------------------------------倒计时---------------------------*/
    var starttime = new Date("2016/11/20");
    setInterval(function () {
        var nowtime = new Date();
        var time = starttime - nowtime;
        var day = parseInt(time / 1000 / 60 / 60 / 24);
        var hour = parseInt(time / 1000 / 60 / 60 % 24);
        var minute = parseInt(time / 1000 / 60 % 60);
        var seconds = parseInt(time / 1000 % 60);
        $('.timespan').html("<img src='images/clock.jpg'/>"+day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒");
    }, 1000);
            /*-----------------------------倒计时结束--------------------------*/

            /*------------------------------轮播文字--------------------------*/
    $(".word ul").append($(".word ul li").eq(0).clone());
    var count = 0;
    var timing = null;
    timing = setInterval(Text,2000);
    function Text(){
        count++;
        if(count == 3){
            $(".word ul").css("top",0);
            count = 1;
        }
        $(".word ul").stop().animate({top:-count*20},1000);
    }
    //鼠标划入停止文字的轮播
    $(".word").mouseenter(function () {
        clearInterval(timing);
    });
    $(".word").mouseleave(function () {
        timing= setInterval(Text,2000);
    });
            /*-----------------------------轮播文字结束----------------------------*/

            /*-----------------------------没有分页的商品--------------------------*/
    var bandData = [];
    var $banList = $('.band_con_index ul');
    $.get("json/nopagejson.json", function (resp) {
        bandData = resp;
        var str1 = '';
        for (var j = 0; j < 3; j++) {
            str1 += '<li>' + '<img src="' + bandData[j].imgSrc + '"/>' +
                '<p>' + '<span>0.9折起' + '</span>' + '<a>马上抢' + '</a>' + '</p>' +
                '<div class="timespan">' + '</div>' +
                '</li>'
        }
        $banList.html(str1);
        $('.band_con_index ').children().eq(0).children().bind({
            mouseenter: function () {
                $(this).children('p').children('a').css('color', '#fff').css('background', '#ff464e');
                $(this).css("border-color","#ccc");
            },
            mouseleave: function () {
                $(this).children('p').children('a').css('color', '#ff464e').css('background', 'none');
                $(this).css("border-color","#F6F6F6");
            },
            click:function(){
                window.location.href="detail.html";
            }
        });
    });
            /*----------------------------没有分页的商品结束------------------------*/

            /*-----------------------------商品（带分页）--------------------------*/
    //存放所有的商品
    var productDate = [];
    //每页的显示的行数
    var pageRows = 16;
    var $proList = $('.new_con_index ul');
    $.get("json/product.json", function (res) {
        productDate = res;
        //   计算总页数
        var pageCount = Math.ceil(productDate.length / pageRows);
        addData(1);//显示第一页的数据
        $('.pages .pages_con').createPage({
            pageCount: pageCount,
            current: 1,
            backFn: function (page) {
                addData(page);
            }
        })
    });
    function addData(page) {
        var iNum = (page - 1) * pageRows;
        var str = '';
        for (var i = 0; i < pageRows; i++) {
            if (!productDate[iNum + i]) {
                break;
            }
            str += '<li>' + '<img class="lazy" data-original="' + productDate[iNum + i].imgSrc + '"/>' +
                '<p>' + '<a>' + productDate[iNum + i].info + '</a>' + '<span>' + productDate[iNum + i].upnew + '</span>' + '</p>' +
                '<p class="bottom">' + '<em> ￥' + '</em>' + '<i>' + productDate[iNum + i].price + '</i>' +
                '<b>' + productDate[iNum + i].Orig + '</b>' + '<strong>' + productDate[iNum + i].count + '</strong>' +
                '<img src="' + productDate[iNum + i].littleimgSrc + '"/>' +
                '</p>' +
                '<div class="collect">' + '<img src="' + productDate[iNum + i].collect + '"/>' + '</div>' +
                '<div class="collect2">' + '<img src="' + productDate[iNum + i].collect2 + '"/>' + '</div>' +
                '<div class="go">' + productDate[iNum + i].gowhere + '</div>' +
                '<i class="new_pic">' +'<img src="' + productDate[iNum + i].pic + '"/>'+'</i>'+
                '</li>'
        }
        $proList.html(str);
    //懒加载【注意：要先把图片加载出来，在进行懒加载】
        $(".lazy").lazyload({
            placeholder:"images/load.png" ,
            effect:"fadeIn"
        },2000);
    //商品动画
        $('.new_con_index ul').children().bind({
            mouseenter: function () {
                $(this).css("border-color","#ccc");
                $(this).children('div').eq(0).css('display', 'block').end().eq(2).css('display', 'block');
            },
            mouseleave: function () {
                $(this).css("border-color","#F6F6F6");
                $(this).children('div').eq(0).css('display', 'none').end().eq(2).css('display', 'none');
            }
        });
        $('.collect').mouseenter(function () {
            $('.collect').css('display', 'none');
            $(this).next().css('display', 'block');
        });
        $('.collect2').mouseleave(function () {
            $('.collect2').css('display', 'none');
            $(this).prev().css('display', 'block');
        });
    //商品跳转详情页
        $(".new_con_index ul li").click(function(){
            window.location.href="detail.html";
        });
    }
            /*---------------------------商品（带分页）结束--------------------------*/

            /*--------------------------------吸顶---------------------------------*/
    $(document).scroll(function () {
        if ($(document).scrollTop() > 500) {
            $('.mount').css({
                display: 'block',
                position: 'fixed',
                top: 0
            });
        } else {
            $('.mount').css({
                display: 'none'
            });
        }
    });
            /*-----------------------------吸顶结束-------------------------------*/

            /*------------------------------搜索框--------------------------------*/
    $('.search').children().eq(0).keydown(function (event) {
        var text = $('.secachinput').val();
        if(text != ''){
    //空格时不显示
            if(event.keyCode == 9 || event.keyCode == 32){
                //此处也可以用正则判断；\s匹配字符，空格，换行符，制表符
                $('.box ul').children().remove();
                $('.search').find('.box').css('display','none');
            }
            $('.search').find('.box').css('display','block');
        }
    //得到搜索数据（百度）
        $.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+text+"&cb=?",
            function(data) {
                var temp = data.s;
                for(var m = 0;m<9;m++){
                    $('.box ul').children().eq(m).children('a').text(temp[m]);
                }
            });
    });
    //删除搜索内容
    $('.search').children().eq(0).keyup(function(){
        if($('.secachinput').val() == ''){
            $('.search').find('.box').css('display','none');
        }
    });
    //搜索内容 变色，点击赋值
    $('.search .box ul li').bind({
        mouseenter:function(){
            $(this).css('background','#5bc0de');
        },
        mouseleave:function(){
            $(this).css('background','#fff');
        },
        click:function(){
            $('.secachinput').val($(this).text());
            $('.search').find('.box').css('display','none');
        }
    });
            /*--------------------------------搜索框结束-------------------------------*/
});