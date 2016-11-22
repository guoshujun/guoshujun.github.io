/**
 * Created by Administrator on 2016/9/26 0026.
 */
$(function(){
    $('.header').load('tb.html .top');
    $('.footer').load('tb.html .bottom');
    var arr = ["YNNC","BDF9","JA7X","NWNB","HK66","67GK","ZRJY","WT3Y","PVKF","JGCR","39SZ","FFJZ","7HZF","Z7CP","FTYJ","6NZS"];
    var a, b,c;
//保存用户名和密码
    $('input[id=inputname]').val($.cookie("用户名"));
    $('input[id=inputpwd]').val($.cookie("密码"));
    /*----------------------------用户名部分--------------------------------*/
    $('input[id=inputname]').focus(function(){
        $('span[class=namespan]').css('visibility','hidden');
        $('div[class=name]').css('border-color','#c6c6c6');
    });
    $('input[id=inputname]').blur(function(){
        var nameval = $('input[id=inputname]').val();
        if(nameval == ''){
            $('div[class=name]').css('border-color','#ff464e');
            $('span[class=namespan]').css('visibility','visible');
            a=0;
        }
    });
    /*---------------------------用户名部分结束-----------------------------*/

    /*------------------------------密码部分-------------------------------*/
    $('input[type=password]').focus(function(){
        $('span[class=pwdspan]').css('visibility','hidden');
        $('div[class=pwd]').css('border-color','#c6c6c6');
    });
    $('input[type=password]').blur(function(){
        var pwdval = $('input[type=password]').val();
        if(pwdval == ''){
            $('span[class=pwdspan]').css('visibility','visible');
            $('div[class=pwd]').css('border-color','#ff464e');
            b=0;
        }
    });
    /*-------------------------------密码部分结束-------------------------------*/

    /*---------------------------------按钮部分--------------------------------*/
    $('input[class=btn]').hover(fn1,fn2);
    function fn1(){
        $('input[class=btn]').css('opacity',0.5);
    }
    function fn2(){
        $('input[class=btn]').css('opacity',1);
    }
    /*-------------------------------按钮部分结束--------------------------------*/

    /*------------------------------随机验证码部分-------------------------------*/
    //每刷新一次就有随机图片
    var randomnum = getrandomNum(0,15);
    $('em[class=rancode]').children().eq(0).attr('src','images/code'+randomnum +'.png');
    //每点击一次就有随机图片
    $('a[class=changecode]').click(function(){
        /*refesh();*/
        var randomnum = getrandomNum(0,15);
        console.log(randomnum);
        $('em[class=rancode]').children().eq(0).attr('src','images/code'+randomnum +'.png');
    });
    function getrandomNum (min,max,isFloat){
        if(isFloat){
            return Math.random()*(max - min) + min;
        }
        return Math.floor(Math.random()*(max - min)) + min;
    }
    /*------------------------------随机验证码部分结束-----------------------------*/

    /*--------------------------------判断验证码部分------------------------------*/
    $('.inputcode').focus(function(){
        $('.codespan').css('visibility','hidden');
        $('.verify').css('border-color','#c6c6c6');
    });
    $('.inputcode').blur(function(){
            if($('.inputcode').val() == ''){
                $('.codespan').css('visibility','visible');
                $('.codespan').html('验证码不能为空');
                $('.verify').css('border-color','#ff464e');
                c=0;
            }else {
                for(var i=0;i<arr.length;i++){
                if($('.inputcode').val() == arr[i]){

                    c=1;
                    return;
                }
                 }
                    $('.codespan').css('visibility','visible');
                    $('.codespan').html('验证码错误');
                    $('.verify').css('border-color','#ff464e');
                    c=0;
        }
    });
    /*--------------------------------判断验证码部分结束------------------------------*/

    /*----------------------------------点击登录部分---------------------------------*/
    $('input[class=btn]').click(function(){
        /*---------------------------获取cookie判断账户密码--------------------*/
        var tmpVal = $.cookie($('input[id=inputname]').val());
        if(tmpVal == undefined){
            $('span[class=namespan]').css('visibility','visible');
            $('span[class=namespan]').html('账户不存在');
            $('div[class=name]').css('border-color','#ff464e');
            a=0;
        }else {
            a=1;
            var tmpJSON = JSON.parse(tmpVal);

            if($('input[class=nonlog]').prop("checked")){
                $("#inputname").val(tmpJSON.phonecookie);
            }

            if($('input[id=inputpwd]').val() != tmpJSON.pwdcookie ){
                $('span[class=pwdspan]').css('visibility','visible');
                $('span[class=pwdspan]').html('密码错误');
                $('div[class=pwd]').css('border-color','#ff464e');
                b=0;
            }else {
                b=1;
                $('span[class=pwdspan]').css('visibility','hidden');
            }
        }
        /*---------------------------获取cookie判断账户密码--------------------*/
        if((a*b*c == 1)){
            window.location.href="index.html";
            /*------------------------------免登陆保存用户名密码----------------------------*/
            if($('input[class=nonlog]').prop("checked")){
                $.cookie("用户名",$('input[id=inputname]').val(),{expires:2});
                $.cookie("密码",$('input[id=inputpwd]').val(),{expires:2})
            }else {
                $.removeCookie("用户名",$('input[id=inputname]').val());
                $.removeCookie("密码",$('input[id=inputpwd]').val());
            }
            /*------------------------------免登陆保存用户名密码结束-------------------------*/

        }
    });
    /*--------------------------------点击登录部分结束------------------------------*/

    //跳到注册页面
    $('a[class=clickreg]').click(function(){
        window.location.href="registered.html";
    })
});