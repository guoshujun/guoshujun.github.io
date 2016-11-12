/**
 * Created by Administrator on 2016/9/20 0020.
 */
(function ($){
    $(function(){
        /*==============导航部分=========================*/
        //cookie   记录头部名字
        var firstb    =  $('#header .login .first');
        var twob      =  $('#header .login .two');
        var threeb    =  $('#header .login .three');
        var foubr     =  $('#header .login .four');
        var telcook   =  $.cookie('telphonenumber') ;
        if(!telcook){
            $('.afterlogin').html('欢迎光临莎莎官网!');
            foubr.html(' ');
            firstb.html('登录');
            twob.html('或');
            threeb.html('免费注册');
        }else{
            $('.afterlogin').html('您好！'+ telcook);
            foubr.html('退出');
            firstb.html(' ');
            twob.html(' ');
            threeb.html(' ');
        }
        //退出登录
        foubr.click(function(){
            $.removeCookie('telphonenumber',{path: '/'}) ;
            $('.afterlogin').html('欢迎光临莎莎官网!');
            foubr.html(' ');
            firstb.html('登录');
            twob.html('或');
            threeb.html('免费注册');
        });

        //导航我的账户消失与出现
      $("#header .user2").mouseenter(function(){
          $("#header .user1").stop(true).slideDown()
      })
        $("#header .user2").mouseleave(function(){
            $("#header .user1").stop(true).slideUp()
        })
        //导航我的购物车消失与出现
        $("#header .shopcart2").mouseenter(function(){
            $("#header .shopcart1").css({display:"block"})
        })
        $("#header .shopcart2").mouseleave(function(){
            $("#header .shopcart1").css({display:"none"})
        })
        //导航微博的消失与出现
        $("#header .weibo").mouseenter(function(){
            $("#header .wb").css({display:"block"})
        })
        $("#header .weibo").mouseleave(function(){
            $("#header .wb").css({display:"none"})
        })
        //导航微信的消失与出现
        $("#header .weixin").mouseenter(function(){
            $("#header .wx").css({display:"block"})
        })
        $("#header .weixin").mouseleave(function(){
            $("#header .wx").css({display:"none"})
        })
        /*==============logo部分=========================*/
        //搜索框的得失去焦点
        $("#logo .text").focus(function(){
            if(this.value==this.defaultValue){
                this.value="";
            }
        })
        $("#logo .text").blur(function(){
            if(this.value==""){
                this.value=this.defaultValue;
            }
        });
        //导航的消失与出现
        var allgoods=$("#navlist .allgood") ;
        var alllists=$("#navlist .alllist");
        var navlists=$('#navlist');
        var navlistdiv=$("#navlist .allgood div");
        alllists.mouseenter(function(){
            allgoods.css({display:"block"})
        });
        navlists.mouseleave(function(){
          navlistdiv.css({display:"none"})
        });
        /*$("#logo .text").bind({
            focus:function(){
                if (this.value == this.defaultValue){
                    this.value="";
                }
            },
            blur:function(){
                if (this.value == ""){
                    this.value = this.defaultValue;
                }
            }
        });*/
        //全部分类的出现与消失
        var navlistli=$("#navlist .allgood li");

        navlistli.mouseenter(function(){
            var iIndex=$(this).index();
            navlistli.removeClass("select").eq(iIndex).addClass("select");
            navlistdiv.css({display:"none"}).eq(iIndex).css({display:"block"})
        });
        navlistli.mouseleave(function(){
            navlistli.removeClass("select");
            navlistdiv.css({display:"none"})
        })
        /*================banner上半部分=========================*/
       $('#navlist .all').mouseenter(function(){
           $("#navlist .clb").css({display:"block"});
       });
        $(".clb").mouseenter(function(){
            console.log("laa");
            $(".lala").find('.lala1').css({color:'#ec3e7d'});
        })
        $(".clb").mouseleave(function(){
            console.log("laa");
            $(".lala").find('.lala1').css({color:'#3e3e3e'});
        })
        $("#navlist .all").mouseleave(function(){
            $("#navlist .clb").css({display:"none"});
        })
       /*=====================banner轮播图=================================*/
        var oBtnliatA   =  $(".btnlist a");
        var oImglistLi  =  $(".imglist li");
        var banner=$(".banner1");
        var iIndex=0;
        var iTimer=null;
        oBtnliatA.mouseenter(function(){
            iIndex=$(this).index();
            //console.log(iIndex);
            oBtnliatA.removeClass("select").eq(iIndex).addClass("select");
            oImglistLi.animate({opacity:0},function(){
                $(this).css({display:"none"})
            });
            oImglistLi.eq(iIndex).css({display:"block"}).stop(true).animate({opacity:1})
        });
        //轮播图停止走
        banner.mouseenter(function(){
            clearInterval(iTimer)
        });
        //轮播图自动走
        banner.mouseleave(function(){
            iTimer=setInterval(function () {
                iIndex++;
                if(iIndex==oImglistLi.length){
                    iIndex=0;
                }
                oBtnliatA.removeClass("select").eq(iIndex).addClass("select");
                oImglistLi.animate({opacity:0},function(){
                    $(this).css({display:"none"})
                });
                oImglistLi.eq(iIndex).css({display:"block"}).stop(true).animate({opacity:1})
            },2000)
        })
        iTimer=setInterval(function () {
            iIndex++;
            if(iIndex==oImglistLi.length){
                iIndex=0;
            }
            oBtnliatA.removeClass("select").eq(iIndex).addClass("select");
            oImglistLi.animate({opacity:0},function(){
                $(this).css({display:"none"})
            });
            oImglistLi.eq(iIndex).css({display:"block"}).stop(true).animate({opacity:1})
        },2000);
       /*=========================限时特卖LIMITED OFFER=================*/
        //到第二天的早上九点更新还剩余的时间
        $(function(){
            setInterval(function(){
                var myDate=new Date();//获得当前的时间
                var hour=myDate.getHours();//当前的小时
                var minute=myDate.getMinutes();//当前的分钟
                var seconds=myDate.getSeconds();//当前的秒数
                var h=$("#limitedoffed .hour");
                var m=$("#limitedoffed .minutes");
                var s=$("#limitedoffed .seconds");
                if(h<9){
                    h.text("0"+"24-hour+8");
                }else{
                    h.text(24-hour+8);
                }
                if(m<9){
                    m.text("0"+"59-minute");
                }else{
                    m.text(59-minute);
                }
                if(s<9){
                    s.text("0"+"59-seconds");
                }else{
                    s.text(59-seconds);
                }
            },1000)
        });
    /*==================左侧导航===================*/
        var c1=$(".c1");
        var c2=$(".c2");
        var c3=$(".c3");
        var c4=$(".c4");
        var navleft=$("#leftnav");
        var navleftdiv=$("#leftnav div");
        c1.click(function(){
            navleftdiv.removeClass("active");
            c1.addClass("active");
            $("body,html").animate({scrollTop:706},1000)
        });
        c2.click(function(){
            navleftdiv.removeClass("active");
            c2.addClass("active");
            $("body,html").animate({scrollTop:2080},1000)
        });
        c3.click(function(){
            navleftdiv.removeClass("active");
            c3.addClass("active");
            $("body,html").animate({scrollTop:6500},1000)
        });
        c4.click(function(){
            navleftdiv.removeClass("active");
            c4.addClass("active");
            $("body,html").animate({scrollTop:7300},1000);
        });
        $(window).scroll(function (){
            var oscrollTop=document.documentElement.scrollTop || document.body.scrollTop;
            if(oscrollTop<706){
                navleft.css({display:"none"})
            }
            if(oscrollTop>=706&&oscrollTop<2080){
                navleft.css({display:"block"});
                navleftdiv.removeClass("active");
                c1.addClass("active");
            }else if(oscrollTop<6500&&oscrollTop>=2080){
                navleft.css({display:"block"});
                navleftdiv.removeClass("active");
                c2.addClass("active");
            }else if(oscrollTop>=6500&&oscrollTop<7300){
                navleft.css({display:"block"});
                navleftdiv.removeClass("active");
                c3.addClass("active");
            }else if(oscrollTop<8050&&oscrollTop>=7300){
                navleft.css({display:"block"});
                navleftdiv.removeClass("active");
                c4.addClass("active");
            }else{
                navleftdiv.removeClass("active");
            }
        });
        /*==================右侧导航======================*/
        //客服
        var sidebarkefu=$("#sidebar .kefu");
        var sidebarkefup=$("#sidebar .custom .xianshi");
        var sidecustom=$("#sidebar .custom");
        sidebarkefu.mouseenter(function(){
            sidebarkefup.css({display:"block"}).animate({opacity:1},function(){
                sidebarkefup.animate({right:"50"},function(){
                    sidebarkefup.animate({right:"0"})
                })
            })

          }) ;
        sidecustom.mouseleave(function(){
             sidebarkefup.animate({opacity:0},function(){
                 sidebarkefup.css({display:"none"})
            })
         });
        sidebarkefup.mouseenter(function(){
            sidecustom.find(".sidebarkefu").css({background:"#ec3e7d"})
        });
        sidebarkefup.mouseleave(function(){
            sidecustom.find(".sidebarkefu").css({background:"#4c4c4c"})
        });
        //我的收藏
        var sidebarxin=$("#sidebar .xin");
        var sidebarxinp=$("#sidebar .heart .xianshi");
        var sidecheart=$("#sidebar .heart")
        sidebarxin.mouseenter(function(){
            sidebarxinp.css({display:"block"}).animate({opacity:1},function(){
                sidebarxinp.animate({right:"50"},function(){
                    sidebarxinp.animate({right:"0"})
                })
            })

        }) ;
        sidecheart.mouseleave(function(){
            sidebarxinp.animate({opacity:0},function(){
                sidebarxinp.css({display:"none"})
            })
        });
        //浏览记录
        var sidebarjilu1=$("#sidebar .jilu1");
        var sidejilup=$("#sidebar .jilu .xianshi");
        var sidejilu=$("#sidebar .jilu")
        sidebarjilu1.mouseenter(function(){
            sidejilup.css({display:"block"}).animate({opacity:1},function(){
                sidejilup.animate({right:"50"},function(){
                    sidejilup.animate({right:"0"})
                })
            })

        }) ;
        sidejilu.mouseleave(function(){
            sidejilup.animate({opacity:0},function(){
                sidejilup.css({display:"none"})
            })
        });
        //客服
        var sidebarerji11=$("#sidebar .erji1");
        var sideerjip=$("#sidebar .erji .xianshi");
        var sideerji=$("#sidebar .erji")
        sidebarerji11.mouseenter(function(){
            sideerjip.css({display:"block"}).animate({opacity:1},function(){
                sideerjip.animate({right:"50"},function(){
                    sideerjip.animate({right:"0"})
                })
            })

        }) ;
        sideerji.mouseleave(function(){
            sideerjip.animate({opacity:0},function(){
                sideerjip.css({display:"none"})
            })
        });
        //回到顶部
        var backtop=$("#sidebar .backtop");
        backtop.click(function(){
            $("body,html").animate({scrollTop:0},2000);
        });




        /*================注册页面=====================*/
        var tel      =   $("#main .form .tel");
        var psd1     =   $("#main .form .psd1");
        var psd2     =   $("#main .form .psd2");
        var number   =   $("#main .form .number");
        var number1  =   $("#main .form .number1");
        var number2  =   $("#main .form .number2");
        var span1    =   $("#main .form .span1");
        var span2    =   $("#main .form .span2");
        var span3    =   $("#main .form .span3");
        var span4    =   $("#main .form .span4");
        var reg      =   $("#reg");
        //手机号
        tel.focus(function(){
            tel.css('box-shadow',"1px 1px 1px #ec3e7d")
        });
        tel.blur(function(){
            tel.css('box-shadow',"0px 0px 0px #ec3e7d");
            if(this.value.length != 11 || isNaN(this.value)){
                span1.css({display:"block"});
                return false;
            }
        });
        //密码
        psd1.focus(function(){
            if(this.value==this.defaultValue){
                this.value="";
            }
            psd1.css('box-shadow',"1px 1px 1px #ec3e7d");
        });
        var reg1=/^\w{6,16}$/;
        psd1.blur(function(){
            if(this.value==""){
                this.value=this.defaultValue;
            }
            if(reg1.test(psd1.val())==false){
                span2.css({display:"block"});
                return false;
            }
            psd1.css('box-shadow',"0px 0px 0px #ec3e7d")
        });
        //再次输入密码
        psd2.focus(function(){
            if(this.value==this.defaultValue){
                this.value="";
            }
            psd2.css('box-shadow',"1px 1px 1px #ec3e7d");
        });
        psd2.blur(function(){
            if(this.value==""){
                this.value=this.defaultValue;
            }
            if(psd1.val()!=psd2.val()){
                span3.css({display:"block"});
                return false;
            }
            psd2.css('box-shadow',"0px 0px 0px #ec3e7d")
        });
        //验证码
        number.focus(function(){
            if(this.value==this.defaultValue){
                this.value="";
            }
            number.css('box-shadow',"1px 1px 1px #ec3e7d")
        });
        number.blur(function(){
            if(this.value==""){
                this.value=this.defaultValue;
            }
            if(number.val()!=number1.text()){
                span4.css({display:"block"});
                return false;
            }
            number.css('box-shadow',"0px 0px 0px #ec3e7d")
        });
        function yan(){
            var num=parseInt(Math.random()*10000);
            if(num<1000){
                num="0"+num;
            } else if(num<100){
                num="00"+num;
            }else if(num<10){
                num="000"+num;
            }else{
                num=num;
            }
            num=parseInt(num);
            number1.text(num)
        };
        yan();

        number1.click(function(){
            yan()
        });
        number2.click(function(){
            yan()
        });

        //写入cookie
        reg.click(function(){
           if((tel.val().length == 11 )/*&& (isNaN(tel.val()))&&(reg1.test(psd1.val()))&&(psd1.val()==psd2.val())*/) {
               $.cookie('telphonenumber',tel.val(),{expires:7,path:"/"});
           /*/!*----------------------------------------------注册页面*!/
               var countyz=6;
               var time3=null;
               var str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
               $(".sjhm").focus(function(){
                   var a1 = /^1[34578]\d{9}$/;
                   $(".sjhm").blur(function(){
                       if(!a1.test($(".sjhm").val())){
                           alert("您输入的手机号错误！");
                           $(".sjhm")[0].value="";
                           return false;
                       }
                   });
               });
               $(".mm").focus(function(){
                   var a2=/^\w{6,16}$/;
                   $(".mm").blur(function(){
                       if(!a2.test($(".mm").val())){
                           alert("密码包含数字或字母或下划线，长度在6-16");
                           $(".mm")[0].value="";
                           return false;
                       }
                   });
               });
               $(".fs").click(function(){
                   clearInterval(time3);
                   $(".yzmappear").css({display:"block"});
                   time3=setInterval(function(){
                       countyz--;
                       $(".yzcs")[0].innerText=countyz;
                       if(countyz<=0){
                           clearInterval(time3);
                           $(".yzjg").css({display:"block"});
                           $(".yzmappear").animate({opacity:0},2000);
                       }
                   },1000);
               });
// =======================封装一个函数用来判定点击完注册按钮之后的  各种效果
               function yzm(){
                   var str1="";
                   for(var i=0;i<4;i++){
                       var jg=parseInt(Math.random()*str.length);
                       str1+=str.charAt(jg);
                   }
                   $(".yzjg").text(str1);

                   $(".zc").click(function(){
                       if($(".yzm")[0].value==$(".yzjg").text()){
                           var imoblenumber=$(".sjhm").val();
                           var ipassword=$(".mm").val();
                           var sUsers=getCookie("users");
                           var bBtn=true;
                           if(sUsers===undefined){
                               var aUsers=[];
                           }else{
                               var aUsers=JSON.parse(sUsers);
                           }
                           console.log(getCookie('users'));
                           for(var i=0;i<aUsers.length;i++){
                               if(aUsers[i].moblenumber==imoblenumber){
                                   alert("尊敬的新用户，此用户已经被注册！");
                                   return false;
                                   bBtn=false;
                               }
                           }
                           if(bBtn){
                               var oUsers={
                                   moblenumber:imoblenumber,
                                   password:ipassword
                               };
                               aUsers.push(oUsers);
                           }
                           setCookie('users',JSON.stringify(aUsers),7,'/');
                           var a=confirm("尊敬的用户，您已注册成功，是否现在登陆？");
                           if(a){

                           }
                           else{
                               return false;
                           }
                       }
                       else{
                           alert("输入验证码错误！");
                           return false;
                       }
                   });
               }
               yzm();
// ================================当用户被注册时，在第一个框里面就被pass
               var sUsers=getCookie("users");
               var aUsers=JSON.parse(sUsers);
               $(".sjhm").focus(function(){
                   $(".sjhm").blur(function(){
                       var imoblenumber=$(".sjhm").val();
                       for(var i=0;i<aUsers.length;i++){
                           if(aUsers[i].moblenumber==imoblenumber){
                               alert("尊敬的新用户，此用户已经被注册过了！");
                               return false;
                           }
                       }
                   });
               });
               /!*------------------------------------------------------------登录界面 *!/
               $(".denglu").click(function(){
                   var flag=true;
                   setCookie('login','false,'+$(".zh").val(),7,'/');
                   if($(".zh").val()==''||$(".password").val()==''){
                       alert("输入的账户和密码不能为空");
                       return false;
                   }
                   var userinfo=JSON.parse(getCookie('users'));
                   for(var m=0;m<userinfo.length;m++){
                       if($(".zh").val()==userinfo[m]['moblenumber']&&$(".password").val()==userinfo[m]['password']){
                           flag=false;
                           alert("登陆成功，祝您购物愉快！");
                       }
                   }
                   if(flag){
                       for(var n=0;n<userinfo.length;n++){
                           if($(".zh").val()!=userinfo[n]['moblenumber']){
                               alert("此用户不存在")
                           }
                           else if($(".password").val()!=userinfo[n]['password']){
                               alert("密码错误");
                           }
                           return false;
                       }
                   }
                   setCookie('login','true,'+$(".zh").val(),7,'/');
               });
               // =========================================登录，注册，退出，三者之间的切换
               var login = getCookie('login');
               login = login.split(",");
               if (login[0] == 'true') {
                   $(".aaa").text("退出");
                   $(".bbb").text("我的MEMEBOX");
               }
               if($(".aaa").text() == '退出'){
                   $(".aaa").click(function(){
                       setCookie('login','false,'+$(".zh").val(),7,'/');
                   })
               }
               else{
                   $(".aaa").attr("href","login.html");
               }
*/


           }
               /* var iphone     =  $('.tel').val();
               console.log(iphone);
               var ipassword  =  $('.psd1').val();
               console.log(ipassword)
               var sUser      =  $.cookie('user');
               var flag       =  true;
               if(sUser===undefined){
                   var aUsers=[];
               } else{
                   var aUsers=JSON.parse(sUser);
               }
               if(flag){
                   var oUsers={
                       moblenumber  :  iphone,
                       password     :  ipassword
                   };
                   aUsers.push(oUsers);
               }
               $.cookie('user',JSON.stringify(aUsers),{expires:7,path:"/"});
               for(var i=0;i<aUsers.length;i++){
                   if(aUsers[i].moblenumber==iphone){
                       alert("尊敬的新用户，此用户已经被注册！");
                       flag=false;
                       return false;
                   }
               }
               console.log(aUsers);
               var a=confirm("尊敬的用户，您已注册成功，是否现在登陆？");
               if(a){

               }
               else  {
                   return false;
               }
           }else{

           }*/
        /* var imoblenumber=$(".sjhm").val();
         var ipassword=$(".mm").val();
         var sUsers=$.cookie("users");
         console.log(imoblenumber);
         console.log(ipassword);
         var bBtn=true;
         if(sUsers===undefined){
         var aUsers=[];
         }else{
         var aUsers=JSON.parse(sUsers);
         }
         if(bBtn){
         var oUsers={
         moblenumber:imoblenumber,
         password:ipassword
         };
         aUsers.push(oUsers);
         }
         $.cookie('users',JSON.stringify(aUsers),{expires:7,path:"/"});
         console.log($.cookie("users"));
         var a=confirm("尊敬的用户，您已注册成功，是否现在登陆？");
         if(a){

         }
         else{
         return false;
         }
         for(var i=0;i<aUsers.length;i++){
         if(aUsers[i].moblenumber==imoblenumber){
         alert("尊敬的新用户，此用户已经被注册！");
         return false;
         bBtn=false;
         }
         }

         }
         else{
         alert("输入验证码错误！");
         return false;
         }*/
        });
        /*=====================登录页面===================*/
        //手机号密码失去获得焦点
        var  tel1        =  $('.tel1');
        var  psd3        =  $('.psd3');
        var  logs        =  $('#logs');
        var  afterlogin  =  $('.afterlogin');
        tel1.focus(function(){
            if(this.value==this.defaultValue){
                this.value=""
            }
        })
        tel1.blur(function(){
            if(this.value==""){
                this.value=this.defaultValue
            }
        })
        psd3.focus(function(){
            if(this.value==this.defaultValue){
                this.value=""
            }
        })
        psd3.blur(function(){
            if(this.value==""){
                this.value=this.defaultValue
            }
        });
        //获得已经写入的cookie值
        //使其显示在登录页面中
        tel1.val($.cookie('telphonenumber'));
        psd3.val($.cookie('password'));
        //登录后首页的头变成自己的名称
        logs.click(function(){
            /*if(){

            }*/

        });



       /* /!*----------------------------------#####￥￥%%%…………&&*&**注册页面*!/
        var countyz=6;
        var time3=null;
        var str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
        $(".sjhm").focus(function(){
            var a1 = /^1[34578]\d{9}$/;
            $(".sjhm").blur(function(){
                if(!a1.test($(".sjhm").val())){
                    alert("您输入的手机号错误！");
                    $(".sjhm")[0].value="";
                    return false;
                }
            });
        });
        $(".mm").focus(function(){
            var a2=/^\w{6,16}$/;
            $(".mm").blur(function(){
                if(!a2.test($(".mm").val())){
                    alert("密码包含数字或字母或下划线，长度在6-16");
                    $(".mm")[0].value="";
                    return false;
                }
            });
        });
        $(".fs").click(function(){
            clearInterval(time3);
            $(".yzmappear").css({display:"block"});
            time3=setInterval(function(){
                countyz--;
                $(".yzcs")[0].innerText=countyz;
                if(countyz<=0){
                    clearInterval(time3);
                    $(".yzjg").css({display:"block"});
                    $(".yzmappear").animate({opacity:0},2000);
                }
            },1000);
        });

        function yzm(){
            var str1="";
            for(var i=0;i<4;i++){
                var jg=parseInt(Math.random()*str.length);
                str1+=str.charAt(jg);
            }
            $(".yzjg").text(str1);

            $(".zc").click(function(){
                if($(".yzm")[0].value==$(".yzjg").text()){
                    var imoblenumber=$(".sjhm").val();
                    var ipassword=$(".mm").val();
                    var sUsers=$.cookie("users");
                    console.log(imoblenumber);
                    console.log(ipassword);
                    var bBtn=true;
                    if(sUsers===undefined){
                        var aUsers=[];
                    }else{
                        var aUsers=JSON.parse(sUsers);
                    }
                    if(bBtn){
                        var oUsers={
                            moblenumber:imoblenumber,
                            password:ipassword
                        };
                        aUsers.push(oUsers);
                    }
                    $.cookie('users',JSON.stringify(aUsers),{expires:7,path:"/"});
                    console.log($.cookie("users"));
                    var a=confirm("尊敬的用户，您已注册成功，是否现在登陆？");
                    if(a){

                    }
                    else{
                        return false;
                    }
                    for(var i=0;i<aUsers.length;i++){
                        if(aUsers[i].moblenumber==imoblenumber){
                            alert("尊敬的新用户，此用户已经被注册！");
                            return false;
                            bBtn=false;
                        }
                    }

                }
                else{
                    alert("输入验证码错误！");
                    return false;
                }
            });
        }
        yzm();

        /!*------------------------------------------------------------登录界面 *!/

        $(".denglu").click(function(){
            var flag=true;
            if($(".zh").val()==''||$(".password").val()==''){
                alert("输入的账户和密码不能为空");
                return false;
            }
            var userinfo=JSON.parse($.cookie('users'));
            console.log(userinfo);
            for(var m=0;m<userinfo.length;m++){
                console.log(userinfo[m]['moblenumber']);
                if($(".zh").val()==userinfo[m]['moblenumber']&&$(".password").val()==userinfo[m]['password']){
                    flag=false;
                    alert("登陆成功，祝您购物愉快！");
                    setCookie('moblenumber1',$(".zh").val(),7,'/');
                    setCookie('password1',$(".password").val(),7,'/');
                }
            }
            if(flag){
                alert("密码错误或此用户无效");
                return false;
            }
        });
        var cunzai=getCookie("moblenumber1");
        if(cunzai==undefined){
            $(".aaa").text("登录");
            $(".bbb").text("注册");
        }
        else{
            $(".aaa").text("退出");
            $(".bbb").text("我的MEMEBOX");
        }
        $(".qjs").click(function(){
            if(cunzai==undefined){
                alert("请您先登录");
                $(".qjs").attr('href','login.html');
            }
        });*/


        /*=====================侧栏购物车选项=============================*/
        //点击x关闭购物车选项
        $('#cartshops .carttitle a').click(function(){
            $('#cartshops').css({display:'none'})
        });
        //点击购物车图标购物车选项出来
        $('#sidebar .car').click(function(){
            $('#cartshops').css({display:'block'})
        })
        //进入离开购物车选项页面购物车的当前的选项颜色变化
        $('#cartshops').mouseenter(function(){
            $('#sidebar .car').css("background-color",'#ec3e7d')
        })
        $('#cartshops').mouseleave(function(){
            $('#sidebar .car').css("background-color",'#494949')
        })

         //在购物车选项页中显示已加入金融与的购物清单
        var
            sGoods = $.cookie('goods'),
            aGoods = JSON.parse(sGoods),
            sUlHtml = '';
        // console.dir(aGoods);
        //console.dir(aGoods[0].goodsId);
        for(var i =0; i < aGoods.length; i++) {
            sUlHtml += '<li data-id="' + aGoods[i].goodsId +'">' +
                '<div class="img">' + '<img src="' + aGoods[i].goodsSrc +'" alt="">' + '</div>' +
                '<div class="title">' + aGoods[i].goodsTitle +'</div>' +
                    '<div class="box">'+
                '<div class="price">￥' + aGoods[i].goodsPrice +'</div>' +
                '<div class="num">x' +aGoods[i].goodsNum+ '</div>' +
                '<div class="del"></div>'+
                    '</div>' +
                '</li>';
        }
        $('.cartlist').prepend(sUlHtml) ;//追加到文本中
        //删除购物车中的物品
        var dels=$('#cartshops .del');
        dels.click(function(){
            var iIndex =dels.index($(this));
            $(this).parent().parent().remove();
            aGoods.splice(iIndex,1);
            $.cookie('goods', JSON.stringify(aGoods), {expires:7,path:"/"});
            location.reload();
        }) ;

    })
})(jQuery);