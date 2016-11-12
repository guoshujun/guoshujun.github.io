/**
 * Created by Administrator on 2016/9/24 0024.
 */
(function($){
    $(function(){
         var pensli         =  $('.products  li');
         var productshow1    =  $('.productshow img')[0];
         var fangda1         =  $('.fangda img')[0];
         var fangda2         =  $('.fangda').find('img');

         var imgs=['../img/detail1.png','../img/detail2.png','../img/detail3.png','../img/detail4.png']
         pensli.mouseenter(function(){
            var iIndex=$(this).index();
            pensli.removeClass("active").eq(iIndex).addClass("active");
            productshow1.src=imgs[iIndex];
            fangda1.src=imgs[iIndex]
        });

        //放大图片的功能
        var move        =   $('.detailleft .move');
        var movewidth   =   parseInt(move.width());
        var moveheight  =   parseInt(move.height());
        var productshow =   $('.productshow');
        var fangda       =   $('.fangda');
        var multiple = 2;//倍数

        productshow.mouseenter(function(){
            move.css({display:'block'});
            fangda.css({display:'block'})
        });
        productshow.mouseleave(function(){
            move.css({display:'none'});
            fangda.css({display:'none'})
        });
        productshow.mousemove(function(evt){
            var iX=evt.pageX-$(this).offset().left-movewidth/2;
            var iY=evt.pageY-$(this).offset().top-moveheight/2;
            var maxX=productshow.width()-move.width();
            var maxY=productshow.height()-move.height();
            if(iX<0){
                iX=0
            }
            if(iX>maxX){
                iX=maxX
            }
            if(iY<0){
                iY=0
            }
            if(iY>maxY){
                iY=maxY
            }
            move.css({left:iX+'px',top:iY+'px'});
            fangda2.css({left:-multiple*iX+'px',top:-multiple*iY+'px'});
        });

     //切换眉笔颜色的图片按钮
        var penimgs     =  $('.detailright .sore2 img');
        var penis       =  $('.detailright .sore2 i');
        var detailleft  =  $('.detailleft');
        penimgs.click(function(){
            var iIndex=penimgs.index($(this));
            console.log(iIndex);
            penimgs.removeClass("select").eq(iIndex).addClass('select');
            penis.removeClass("active").eq(iIndex).addClass('active');
            detailleft.css({display:"none"}).eq(iIndex).css({display:"block"})
        });
    //增减数量
        var countleft  =  $('.detailright .countleft');
        var countright =  $('.detailright .countright');
        var counti     =  $('.detailright .count i');
        var countem     =  $('.detailright .count em');
        var countinput     =  $('.detailright .count input');
        countleft.click(function(){
            var  countval = countinput.val();
            countval--;
            if(countval<1){
                counti.css({display:"block"});
                setTimeout(function(){
                    counti.css({display:"none"})
                },1000);
                return false;
            }
            countinput.val(countval);
        });
        countright.click(function(){
            var countval=countinput.val();
            countval++;
            if(countval>36){
                countem.css({display:"block"});
                setTimeout(function(){
                    countem.css({display:"none"})
                },1000);
                return false;
            }
            countinput.val(countval);
        });
    /*===============商品参数商品详情滚动距离================*/
        var producttags =   $('#rightproduct .producttags');
        var a1          =   $('.a1');
        var a2          =   $('.a2');
        var a3          =   $('.a3');
        var productlist =   $('.productlist li');
        $(window).scroll(function(){
            var oscrollTop=document.documentElement.scrollTop || document.body.scrollTop;
            if(oscrollTop>800){
                producttags.css({
                    position:"fixed",
                    top:"0",
                });
                producttags.css('box-shadow',"10px 10px 10px #ccc")
            }else{
                producttags.css({
                    position:"relative"
                });
                producttags.css('box-shadow',"0px 0px 0px #ccc")
            }
            if(oscrollTop>350&&oscrollTop<=1140){
                productlist.removeClass("active");
                a1.addClass("active")
            }else if(oscrollTop>1140&&oscrollTop<=1830){
                productlist.removeClass("active");
                a2.addClass("active")
            }else{
                productlist.removeClass("active");
                a3.addClass("active")
            }
        });
        a1.click(function(){
            productlist.removeClass("active");
            a1.addClass("active");
            $('body,html').animate({scrollTop:800},1000)
        });
        a2.click(function(){
            productlist.removeClass("active");
            a2.addClass("active");
            $('body,html').animate({scrollTop:1141},1000)
        });
        a3.click(function(){
            productlist.removeClass("active");
            a3.addClass("active");
            $('body,html').animate({scrollTop:1851},1000)
        });
        //ajax跨域

        $.ajax({
            url:"http://sclub.jd.com/productpage/p-1591457-s-0-t-3-p-1.html?",
            jsonp:'callback',
            dataType:'jsonp',
            success:function(data){
                console.log(data);
                var sHtml='';
                data.comments.forEach(function(v){
                    sHtml+=' <li class="mumn1">' +
                        '<ul class="left">' +
                        '<li class="xingxing">该用户给出'+v.score+'星好评</li>' +
                        '<li class="time1">评价时间：'+v.creationTime+'</li>' +
                        '<li class="time2">该用户是下单'+v.days+'天后评价</li>' +
                        '<li class="goods-name">'+v.referenceName+'</li>' +
                        '</ul>' +
                        '<span class="middle">'+v.content+'</span>' +
                        '<ul class="right"><li class="touxiang">' +
                        '<i class="name-logo">' +
                          '<img src="http://'+v.userImage+'"></i>' +
                        '<span class="name">'+v.nickname+'</span>' +
                        '</li>' +
                        '<li class="pai">'+v.userLevelName+'</li>' +
                        '<li class="khd">'+v.userClientShow+'</li>' +
                        '</ul>' +
                        '</li> '
                });

                $(".comment .comments").html(sHtml);
            }
        });

        //换页面
        var btnlista  =$ ("#btnlistm a");
        btnlista.click(function(){
            var iIndex= btnlista.index($(this));
            //console.log(iIndex)
            btnlista.removeClass('active').eq(iIndex).addClass('active');
            $.ajax({
                url:"http://sclub.jd.com/productpage/p-1591457-s-0-t-3-p-"+iIndex+".html?",
                jsonp:'callback',
                dataType:'jsonp',
                success:function(data){
                    console.log(data);
                    var sHtml='';
                    data.comments.forEach(function(v){
                        sHtml+=' <li class="mumn1">' +
                            '<ul class="left">' +
                            '<li class="xingxing">该用户给出'+v.score+'星好评</li>' +
                            '<li class="time1">评价时间：'+v.creationTime+'</li>' +
                            '<li class="time2">该用户是下单'+v.days+'天后评价</li>' +
                            '<li class="goods-name">'+v.referenceName+'</li>' +
                            '</ul><span class="middle">'+v.content+'</span>' +
                            '<ul class="right">' +
                            '<li class="touxiang">' +
                            '<i class="name-logo">' +
                            '<img src="http://'+v.userImage+'">' +
                            '</i>' +
                            '<span class="name">'+v.nickname+'</span>' +
                            '</li>' +
                            '<li class="pai">'+v.userLevelName+'</li>' +
                            '<li class="khd">'+v.userClientShow+'</li>' +
                            '</ul>' +
                            '</li> '
                    });

                    $(".comment .comments").html(sHtml);
                }
            });
            $('body,html').animate({scrollTop:1851},1000)
        });
        var btnlistleftbtn=$('.btnlist .btnlistleftbtn');
        var btnlistrightbtn=$('.btnlist .btnlistrightbtn');
        var iIndexs=btnlista.index($(this));
        btnlistrightbtn.click(function(){
            //console.log(iIndexs);
            iIndexs++;
            if(iIndexs>5){
                iIndexs=1
            }
            btnlista.removeClass('active').eq(iIndexs).addClass('active');
            $('body,html').animate({scrollTop:1851},1000)
        });
        btnlistleftbtn.click(function(){
            //console.log(iIndexs);
            iIndexs--;
            if(iIndexs<1){
                iIndexs=5
            }
            btnlista.removeClass('active').eq(iIndexs).addClass('active');
            $('body,html').animate({scrollTop:1851},1000)
        })

        //跨域评论
    })
})(jQuery);