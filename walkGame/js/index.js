(function ($) {
    $(function () {

        var oDiv=$('.hehe')[0];
        var timer = null;
        var left = false;
        var top = false;
        var bottom = false;
        var right = false;
        setInterval(function(){
            if(left){
                oDiv.style.left = oDiv.offsetLeft-10+"px";
                if(oDiv.offsetLeft<=0){
                    oDiv.style.left = 0;
                }
                $('.hehe').css({backgroundImage:"url('img/left2.gif')"});
            }else if(right){
                oDiv.style.left = oDiv.offsetLeft+10+"px";
                $('.hehe').css({backgroundImage:"url('img/right2.gif')"});
                if(oDiv.offsetLeft>=window.innerWidth-50){
                    oDiv.style.left = window.innerWidth-50+'px';
                    obt=0;
                    $('#gongxi').css({display:'block'});
                }
            }
        },50);
        document.onkeydown = function(ev){
            var ev = ev || event;
            var keyCode = ev.keyCode;
            switch(keyCode){
                case 37: left = true;break;
                case 38: top = true;break;
                case 39: right = true;break;
                case 40: bottom = true;break;
            }
        };
        document.onkeyup = function(ev){
            var ev = ev || event;
            var keyCode = ev.keyCode;
            $('.hehe').css({backgroundImage:"url('img/right3.png')"});
            switch(keyCode){
                case 37: left = false;break;
                case 38: top = false;if(top==false){oDiv.style.top = -150+'px';console.log('1')};break;
                case 39: right = false;break;
                case 40: bottom = false;break;

            }
        };
        $('.but1').click(function(){
            $('#gongxi').css({display:'none'})
            window.location.href='jiesu.html'
        });
        $('.but2').click(function(){
            window.location.href='youxi2.html'
        });
        $('.but3').click(function(){
            window.location.href='jiesu.html'
        });
        $('.but4').click(function(){
            window.location.href='youxi.html'
        });
        var music = document.getElementById("bgMusic");
        /*$("#audioBtn").click(function(){
            if(music.paused){
                music.play();
                $("#audioBtn").removeClass("pause").addClass("play");
            }else{
                music.pause();
                $("#audioBtn").removeClass("play").addClass("pause");
            }
        });*/


        var oBox = $('.box');
        var oBax = $('.bax');
        var c = 1;//控制随机产生背景图的变量
        var h = 800;//石头掉落的最大高度
        var iTimer;//定时器
        var obtt=1;//走到头
        for(var i=0;i<oBox.length;i++) {//用for循环对石头进行定位
            c = parseInt(Math.random() * 8);
            oBox[i].style.left = i * 100 + 20 + 'px';
            oBax[i].style.left = i * 100 + 20 + 'px';
            if(i==12){oBax[i].style.left = i * 100 + 'px';}
            oBox[i].style.top = -40 + 'px';
            oBox[i].style.backgroundImage = "url('img/st" + c + ".png')";
        }
        iTimer = setInterval(function () {
            var d = parseInt(Math.random() * oBox.length);
            var x = parseInt(Math.random() * 3000) + 2000;
            if(x > 3000){
                x = 2000;
            }
            if(d == 0){
                $('.box1').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box1')[0].style.top) == h){
                        $('.bax1')[0].style.display="block";
                        setTimeout(function(){$('.bax1')[0].style.display="none";},500);
                        $('.box1')[0].style.top = -40 + 'px';
                        //$('.box1').html('<audio autoplay="autoplay"> <source src="../mus/shitou.mp3" type="audio/mp3"/> </audio> ');
                    }
                });
            }
            if(d == 1){
                $('.box2').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box2')[0].style.top) == h){
                        $('.bax2')[0].style.display="block";
                        setTimeout(function(){$('.bax2')[0].style.display="none";},500);

                        $('.box2')[0].style.top = -40 + 'px';
                        $('.box2').html('<audio autoplay="autoplay"> <source src="../mus/water.mp3" type="audio/mp3"/> </audio> ');
                    }
                });
            }
            if(d == 2){
                $('.box3').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box3')[0].style.top) == h){
                        $('.bax2')[0].style.display="block";
                        setTimeout(function(){$('.bax2')[0].style.display="none";},500);
                        $('.box3')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 3){
                $('.box4').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box4')[0].style.top) == h){
                        $('.bax4')[0].style.display="block";
                        setTimeout(function(){$('.bax4')[0].style.display="none";},500);
                        $('.box4')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 4){
                $('.box5').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box5')[0].style.top) == h){
                        $('.bax5')[0].style.display="block";
                        setTimeout(function(){$('.bax5')[0].style.display="none";},500);
                        $('.box5')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 5){
                $('.box6').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box6')[0].style.top) == h){
                        $('.bax6')[0].style.display="block";
                        setTimeout(function(){$('.bax6')[0].style.display="none";},500);
                        $('.box6')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 6){
                $('.box7').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box7')[0].style.top) == h){
                        $('.bax7')[0].style.display="block";
                        setTimeout(function(){$('.bax7')[0].style.display="none";},500);
                        $('.box7')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 7){
                $('.box8').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box8')[0].style.top) == h){
                        $('.bax8')[0].style.display="block";
                        setTimeout(function(){$('.bax8')[0].style.display="none";},500);
                        $('.box8')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 8){
                $('.box9').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box9')[0].style.top) == h){
                        $('.bax9')[0].style.display="block";
                        setTimeout(function(){$('.bax9')[0].style.display="none";},500);
                        $('.box9')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 9){
                $('.box10').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box10')[0].style.top) == h){
                        $('.bax10')[0].style.display="block";
                        setTimeout(function(){$('.bax10')[0].style.display="none";},500);
                        $('.box10')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 10){
                $('.box11').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box11')[0].style.top) == h){
                        $('.bax11')[0].style.display="block";
                        setTimeout(function(){$('.bax11')[0].style.display="none";},500);
                        $('.box11')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 11){
                $('.box12').animate({
                    top : h
                },x,function () {
                    if( parseInt($('.box12')[0].style.top) == h){
                        $('.bax12')[0].style.display="block";
                        setTimeout(function(){$('.bax12')[0].style.display="none";},500);
                        $('.box12')[0].style.top = -40 + 'px';
                    }
                });
            }
            if(d == 12){
                $('.box13').animate({
                    top : h
                },x, function () {
                    if( parseInt($('.box13')[0].style.top) == h){
                        $('.bax13')[0].style.display="block";
                        setTimeout(function(){$('.bax13')[0].style.display="none";},500);
                        $('.box13')[0].style.top = -40 + 'px';
                    }
                });
            }
        },400);
        //判断是否碰撞
        var oTimer; //定时器，获取实时位置；
        var obt=1;
        oTimer = setInterval(function () {
            var m=$('.hehe')[0].offsetLeft+$('.hehe')[0].clientWidth;
            var w = $('.box1').offset().top+40;
            var w2 = $('.box2').offset().top+40;
            var w3 = $('.box3').offset().top+40;
            var w4 = $('.box4').offset().top+40;
            var w5 = $('.box5').offset().top+40;
            var w6 = $('.box6').offset().top+40;
            var w7 = $('.box7').offset().top+40;
            var w8 = $('.box8').offset().top+40;
            var w9 = $('.box9').offset().top+40;
            var w10 = $('.box10').offset().top+40;
            var w11 = $('.box11').offset().top+40;
            var w12 = $('.box12').offset().top+40;
            var w13 = $('.box13').offset().top+40;
            var k=455;              //人到顶部的距离
            if((w>=k)&&(w<=560)&&(($('.hehe')[0].offsetLeft) < 40+$('.box1').offset().left)){
                obt=0;
            }
            if((w2>=k)&&(w2<=560)&&(($('.hehe')[0].offsetLeft) <($('.box2').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box2').offset().left)){
                obt=0;
            }
            if((w3>=k)&&(w3<=560)&&(($('.hehe')[0].offsetLeft) <($('.box3').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box3').offset().left)){
                obt=0;
            }
            if((w4>=k)&&(w4<=560)&&(($('.hehe')[0].offsetLeft) <($('.box4').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box4').offset().left)){
                obt=0;
            }
            if((w5>=k)&&(w5<=560)&&(($('.hehe')[0].offsetLeft) <($('.box5').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box5').offset().left)){
                obt=0;
            }
            if((w6>=k)&&(w6<=560)&&(($('.hehe')[0].offsetLeft) <($('.box6').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box6').offset().left)){
                obt=0;
            }
            if((w7>=k)&&(w7<=560)&&(($('.hehe')[0].offsetLeft) <($('.box7').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box7').offset().left)){
                obt=0;
            }
            if((w8>=k)&&(w8<=560)&&(($('.hehe')[0].offsetLeft) <($('.box8').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box8').offset().left)){
                obt=0;
            }
            if((w9>=k)&&(w9<=560)&&(($('.hehe')[0].offsetLeft) <($('.box9').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box9').offset().left)){
                obt=0;
            }
            if((w10>=k)&&(w10<=560)&&(($('.hehe')[0].offsetLeft) <($('.box10').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box10').offset().left)){
                obt=0;
            }
            if((w11>=k)&&(w11<=560)&&(($('.hehe')[0].offsetLeft) <($('.box11').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box11').offset().left)){
                obt=0;
            }
            if((w12>=k)&&(w12<=560)&&(($('.hehe')[0].offsetLeft) <($('.box12').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box12').offset().left)){
                obt=0;
            }
            if((w13>=k)&&(w13<=560)&&(($('.hehe')[0].offsetLeft) <($('.box13').offset().left)+40)&&((($('.hehe')[0].offsetLeft)+50) > $('.box13').offset().left)){
                obt=0;
            }
            if (obt==0){
                $('#wandan').css({display:"block"});
                oDiv.style.display='none';
                oBox.stop();
                music.pause();
            }
        },10);
        var oMax = $('.max');
        var oBaz = $('.baz');

        oMax.css({
            left : window.innerWidth,
            top  : 440
        });
        oBaz.css({
            left : window.innerWidth,
            top  : 520
        });
        var zTimer;
        var xxx = 0;
        zTimer = setInterval(function () {
            xxx ++;
            if(xxx == 4){
                xxx = 0;
            }
            var x = parseInt(Math.random() * 8000) + 7000;
            if(x > 8000){
                x = 8000;
            }
            if(xxx == 1){
                $('.baz1').animate({
                    left : -100
                },x, function () {
                    if($('.baz1').offset().left  === -100){
                        $('.baz1').css({
                            left  : window.innerWidth
                        })
                    }
                });
            }
            if(xxx == 2){
                $('.baz2').animate({
                    left : -100
                },x, function () {
                    if($('.baz2').offset().left  === -100){
                        $('.baz2').css({
                            left  : window.innerWidth
                        })
                    }
                });
            }
            if(xxx == 3){
                $('.baz3').animate({
                    left : -100
                },x, function () {
                    if($('.baz3').offset().left  === -100){
                        $('.baz3').css({
                            left  : window.innerWidth
                        })
                    }
                });
            }
        },2500);





    });
})(jQuery);
