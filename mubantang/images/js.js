/**
 * Created by Administrator on 2016/9/14.
 */
$(function(){
  var li15=$(".li15");
  var li16=$(".li16");
  var car=$(".car");
  var netnav=$("#netnav");
  var Li2=$(".ul1 .li2");
  var oDiv2=$(".ul1 .li2 div");
  var Li3=$(".ul1 .li3");
  var oDiv3=$(".ul1 .li3 div");
  var Li4=$(".ul1 .li4");
  var oDiv4=$(".ul1 .li4 div");
 // var a2=$(".ul1 li a");
  var ul1Li=$("#ul1 li");
  var ban_wrap=$("#ban_wrap");
  var boxDiv=$("#box .bo");
  var aList=$("#btn_list a");
  var imgList=$("#img_list");
  var btnL=$("#left_btn");
  var btnR=$("#right_btn");
  var btnRight=$("#right-btn");
  var btnLeft=$("#left-btn");
  var faul=$("#faul");
  var flag=true;

    var cli=$("#cont1 li");
    var cliimg=$("#cont1 li img");

    var c2li=$("#cont2 li");
    var c2div=$("#cont2 li .bb1 div ");

    var c3li=$("#cont3 li");
    var c3div=$("#cont3 li .bb1 div ");

/*head_top部分*/
    li15.on("mouseenter",function(){
        netnav.slideDown(1000,function(){
            netnav.animate({opacity:1},500);
        });
    });
    li15.mouseleave(function(){
            netnav.stop().slideUp(50,function(){
            })
    });

    li16.on("mouseenter",function(){
        car.slideDown(1000,function(){
            car.animate({opacity:1},500);
        });
    });
    li16.on("mouseleave",function(){
        car.stop().slideUp(50,function(){
        });
    });

/*nav部分*/
    Li2.mouseenter(function(){
        //oDiv2.css({display:"block"});
        oDiv2.slideDown(1000,function(){
            oDiv2.animate({opacity:1},500);
        });

    });
    Li2.mouseleave(function(){
       // oDiv2.css({display:"none"});
        oDiv2.stop().slideUp(50,function(){
        });
    });
    //用animate时css中高度设置为0
    Li3.mouseenter(function(){
        oDiv3.css({display:"block"}).animate({height:250},500)
    });
    Li3.mouseleave(function(){
        oDiv3.stop().css({display:"none"}).animate({height:0},50);
    });
    Li4.mouseenter(function(){
        oDiv4.slideDown(1000,function(){
            oDiv4.animate({opacity:1},300);
        });
    });
    Li4.mouseleave(function(){
        oDiv4.stop().slideUp(50,function(){
        })
    });
    btnRight.click(function(){
        faul.animate({left:-1500},5000);
    });
    //侧栏
    ul1Li.mouseenter(function(){
        var iIndex=$(this).index();
        $("#box").css({display:"block"});
        ul1Li.removeClass("active").eq(iIndex).addClass("active");
        boxDiv.css({display:"none"}).eq(iIndex).css({display:"block"});
    });
    ban_wrap.mouseleave(function(){
        ul1Li.removeClass("active");
        boxDiv.css({display:"none"});
        $("#box").css({display:"none"})
    });
    //轮播
    var iIndex=1;
    /*aList.mouseenter(function(){
         iIndex=$(this).index();
        aList.removeClass("select").eq(iIndex).addClass("select");
        imgList.animate({left:-iIndex*1920});
    });
    aList.mouseleave(function(){
        aList.removeClass("select")

    })
    btnL.click(function(){
        iIndex--;
        /!*if(iIndex<0){
            iIndex=imgList.length-1;
        }*!/
        aList.removeClass("select").eq(iIndex).addClass("select");
        imgList.animate({left:-iIndex*1920});
    })
    btnR.click(function(){
        iIndex++;
        /!*if(iIndex===imgList.length){
            iIndex=0;
        }*!/
        aList.removeClass("select").eq(iIndex).addClass("select");
        imgList.animate({left:-iIndex*1920});
    })*/


    aList.mouseenter(function(){
        clearInterval(iTimer);
        iIndex=$(this).index()+1;
        aList.removeClass("select").eq(iIndex-1).addClass("select");
        imgList.animate({left:-(iIndex-1)*1920+ "px"});
    });
    aList.mouseleave(function(){
        iTimer = setInterval(function(){
            iIndex++;
            imgList.animate({left:-iIndex*1920 + "px"},function(){
                if(iIndex===1){
                    imgList.css({left:-1920 +"px"});
                }
            });
            if(iIndex===aList.length+1){
                iIndex = 1;
            }
            aList.removeClass("select").eq(iIndex-1).addClass("select");
        },3000)
    });

//自动滚动
    var iTimer = setInterval(function(){
        iIndex++;
        imgList.animate({left:-iIndex*1920 + "px"},function(){
            if(iIndex===1){
                imgList.css({left:-1920 +"px"});
            }
        });
        if(iIndex===aList.length+1){
            iIndex = 1;
        }
        aList.removeClass("select").eq(iIndex-1).addClass("select");
    },3000)
//给left加onclick事件
    btnL.click(function(){
        if(flag){
            flag = false;
            iIndex--;
            imgList.animate({left:-iIndex*1920 + "px"},function(){
                flag = true;
                if(iIndex===imgList.length-2){
                    imgList.css({left:-iIndex*1920 +"px"});
                }
            });
            if(iIndex===0){
                iIndex = imgList.length-2;
            }
            aList.removeClass("select").eq(iIndex-1).addClass("select");

        }
    });
//给right加事件
    btnR.click(function(){
        if(flag){
            iIndex++;
            imgList.animate({left:-iIndex*1920 + "px"},function(){
                flag = true;
                if(iIndex===1){
                    imgList.css({left:-iIndex*1920 +"px"});
                }
            });
            if(iIndex===imgList.length-1){
                iIndex = 1;
            }
            aList.removeClass("select").eq(iIndex-1).addClass("select");


        }
    });


/*左右移动*/
    cli.mouseenter(function(){
        var aindex=$(this).index();
        cliimg.css({left:0}).eq(aindex).animate({left:-8},200)
    });

    cli.mouseleave(function(){
        cliimg.animate({left:0},200)
    });

/*电商系统 */
    c2li.mouseenter(function(){
        var aindex=$(this).index();
        c2div.css({height:59}).eq(aindex).animate({height:81},100)
    });
    c2li.mouseleave(function(){
        c2div.stop().animate({height:59},100);
    });

/*精品推荐 */
    c3li.mouseenter(function(){
        var aindex=$(this).index();
        c3div.css({height:59}).eq(aindex).animate({height:81},100)
    });
    c3li.mouseleave(function(){
        c3div.stop().animate({height:59},100);
    });











});






