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
  var ul1Li=$("#ul1 li");
  var ban_wrap=$("#ban_wrap");
  var boxDiv=$("#box .bo");
  var aList=$("#btn_list a");
  var imgList=$("#img_list");
  var aImgListLi = $("#img_list li");
  var btnL=$("#left_btn");
  var btnR=$("#right_btn");
  var btnRight=$("#right-btn");
  var btnLeft=$("#left-btn");
  var faul=$("#faul");
  var banner=$("#banner");
  var flag=true;

    var cli=$("#cont1 li");
    var cliimg=$("#cont1 li img");

    var c2li=$(".cont2 li");
    var c2div=$(".cont2 li .bb1 div");

    var c3li=$(".cont3 li");
    var c3div=$(".cont3 li .bb1 div");

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
    banner.mouseenter(function(){
        clearInterval(iTimer);
    });
    var iIndex=1;
    var iTimer=null;
    aList.mouseenter(function(){
        clearInterval(iTimer);
        iIndex=$(this).index()+1;
        aList.removeClass("select").eq(iIndex-1).addClass("select");
        imgList.animate({left:-iIndex*1920+ "px"});
    });
    banner.mouseleave(function(){
        iTimer = setInterval(function(){
            iIndex++;
            imgList.animate({left:-iIndex*1920},function(){
                if(iIndex==aImgListLi.length-1){
                    iIndex = 1;
                }
            });
            if(iIndex==1){
                imgList.css({left:-1920 +"px"});
            }
            aList.removeClass("select").eq(iIndex-1).addClass("select");
        },1000)
    });

//自动滚动
     iTimer = setInterval(function(){
        iIndex++;
        imgList.animate({left:-iIndex*1920},function(){
             if(iIndex==1){
                imgList.css({left:-1920 +"px"})
            }
        });
        if(iIndex==aImgListLi.length-1){
            iIndex = 1;
        }
        aList.removeClass("select").eq(iIndex-1).addClass("select");
    },3000);
//给left加onclick事件
    btnL.click(function(){
        if(flag){
            flag = false;
            iIndex--;
            imgList.animate({left:-iIndex*1920 + "px"},function(){
                flag = true;
                if(iIndex==aImgListLi.length-2){
                    imgList.css({left:-iIndex +"px"});
                }
            });
            if(iIndex==0){
                iIndex = aImgListLi.length-2;
            }
            aList.removeClass("select").eq(iIndex-1).addClass("select");

        }
    });
//给right加事件
    btnR.click(function(){
        if(flag){
            flag=false;
            iIndex++;
            imgList.animate({left:-iIndex*1920 + "px"},function(){
                flag = true;
                if(iIndex==1){
                    imgList.css({left:-iIndex*1920 +"px"});
                }
            });
            if(iIndex==aImgListLi.length-1){
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
        c2div.css({height:59}).eq(aindex).stop().animate({height:81},100)
    });
    c2li.mouseleave(function(){
        c2div.stop().animate({height:59},100);
    });

/*精品推荐 */
    c3li.mouseenter(function(){
        var aindex=$(this).index();
        c3div.css({height:59}).eq(aindex).stop().animate({height:81},100)
    });
    c3li.mouseleave(function(){
        c3div.stop().animate({height:59},100);
    });


// 检查方向
    $(".items").bind("mouseenter mouseleave",function(e) {
        var oMove = $(this).children('a');
        var w = $(this).width();
        var h = $(this).height();

        var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
        var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
        var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
        var eventType = e.type;
        if(e.type == 'mouseenter'){
            switch(direction) {
                case 0:
                    oMove.css({
                        left: 0,
                        top: -242
                    });
                    break;
                case 1:
                    oMove.css({
                        left: 242,
                        top: 0
                    });
                    break;
                case 2:
                    oMove.css({
                        left: 0,
                        top: 242
                    });
                    break;
                case 3:
                    oMove.css({
                        left: -242,
                        top: 0
                    });
                    break;
            }
            oMove.animate({
                left:0,
                top:0
            }, 150);
        }else{
            switch(direction) {
                case 0:
                    oMove.stop(true).animate({
                        left: 0,
                        top: -242
                    },150);
                    break;
                case 1:
                    oMove.stop(true).animate({
                        left: 242,
                        top: 0
                    }, 150);
                    break;
                case 2:
                    oMove.stop(true).animate({
                        left: 0,
                        top: 242
                    }, 150);
                    break;
                case 3:
                    oMove.stop(true).animate({
                        left: -242,
                        top: 0
                    },150);
                    break;
            }
        }
    });




//跨域
    var oSearchContent=$("#search-content");
    console.log(oSearchContent)
    var  oSearchList= $('#search-list');
    var iIndex = -1;

    oSearchContent.bind("input propertychange",function(){
        $.ajax({
            url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?&json=1&p=3&sid=20962_20742_1468_17947_21097_21042_21161_20718&req=2&csor=1",
                   //https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=&json=1&p=3&sid=1449_18284_17946_21099_18559_21190_21161_20928&req=2&sc=eb&csor=0&cb=jQuery110205808985652016563_1474297054252&_=1474297054254
              // url:"http://www.ecmoban.com/suggest.php?step=suggestion",
            dataType: 'jsonp',
            jsonp: 'step',
            data:{
                wd:this.value
                //wd:$(this).val()
            },
            success: function (data, sInfo, xhr) {
                console.log(data);
                var sUlHtml  = ' ';
                for(var i=0;i<data.s.length;i++){
                    sUlHtml  += "<li><a href='javascript:;'>" + data.s[i]+"</a></li>";
                }
                $('#search-list')[0].innerHTML = sUlHtml;
            },


        })

    });

// 添加键盘事件
    oSearchContent.keydown(function (ev) {
        console.log(data);
            var aSearchListLi = $("#search-list").children("li");
            //var aSearchListLi = $("#search-list li");
            var ev = ev || window.event;
            if(aSearchListLi.length && (ev.keyCode === 38 || ev.keyCode === 40)) {
                if(ev.keyCode === 38) {
                    iIndex--;
                    if(iIndex < 0) {
                        iIndex = aSearchListLi.length - 1;
                    }
                } else {
                    iIndex++;
                    if(iIndex === aSearchListLi.length) {
                        iIndex = 0;
                    }
                }
                // //让现在选中的内容变成灰色
                aSearchListLi.removeClass("active").eq(iIndex).addClass("active");
                //取出当前选中的项 赋值到输入框内
                var oText = aSearchListLi.eq(iIndex).text();
                oSearchContent.val(oText);
                return false;
            }
        }
    );
    // 获取焦点
    oSearchContent.focus(function () {
        oSearchList.css({display:'block'});
    });
    // 失去焦点
    oSearchContent.blur(function () {
        oSearchList.css({display:'none'});
    })


});






