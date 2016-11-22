/**
 * Created by Administrator on 2016/9/26 0026.
 */
$(function(){
    $('.header').load('tb.html .top');
    $('.footer').load('tb.html .bottom');
    //初始时有模拟事件
    $('form').children().eq(0).trigger('focus');
    $('form .phonespan').css('visibility','visible');

    var arr = ["YNNC","BDF9","JA7X","NWNB","HK66","67GK","ZRJY","WT3Y","PVKF","JGCR","39SZ","FFJZ","7HZF","Z7CP","FTYJ","6NZS"];
    var a, b, c,d;
    var regphone =/^[1][0-9]{10}/;
    var regpwd = /^\w\S{5,15}/;

    /*-------------------------------判断手机号部分--------------------------------*/

    $('form').children().eq(0).bind({
        focus:function(){
            $('form .phonespan').html('请输入11位手机号');
            $('form .phonespan').css('color','black');
            $('form').children().eq(1).css('visibility','hidden');
            $('form').children().eq(0).css('border-color','#c6c6c6');
        },
        blur:function(){
            var phone = $('form').children().eq(0).val();
            if(phone == ""){
                $('form .phonespan').html('请输入手机号码');
                $('form .phonespan').css('color','#ff464e');
                $('form').children().eq(0).css('border-color','#ff464e');
                $('form').children().eq(1).css('visibility','visible');
                $('form').children().eq(1).children().eq(0).attr('src','images/error.jpg');
                a=0;
            }else {
                var phone = $('form').children().eq(0).val();
                if(regphone.test(phone) == false){
                    $('form .phonespan').html('请输入正确的手机号码');
                    $('form .phonespan').css('color','#ff464e');
                    $('form').children().eq(0).css('border-color','#ff464e');
                    $('form').children().eq(1).css('visibility','visible');
                    $('form').children().eq(1).children().eq(0).attr('src','images/error.jpg');
                    a=0;
                }else {
                    if(regphone.test(phone) == true){
                        if($.cookie( $('form').children().eq(0).val())){
                            $('form .phonespan').html('该账户已被注册,<a href="login.html" class="gologin">去登录</a>');
                            $('form .phonespan').css('color','#ff464e');
                            $('form').children().eq(0).css('border-color','#ff464e');
                            $('form').children().eq(1).css('visibility','visible');
                            $('form').children().eq(1).children().eq(0).attr('src','images/error.jpg');
                        }else {

                            $('form .phonespan').html('');
                            $('form').children().eq(0).css('border-color','#c6c6c6');
                            $('form').children().eq(1).css('visibility','visible');
                            $('form').children().eq(1).children().eq(0).attr('src','images/sucess.jpg');
                            a=1;
                        }
                    }
                }
            }
        }
    });
    /*---------------------------------判断手机号部分结束-------------------------*/

    /*-----------------------------------判断密码部分----------------------------*/

    $('input[type=password]').eq(0).bind({
        focus: function () {
            $('span[class=pwdspan]').css('visibility','visible');
            $('span[class=pwdspan]').html('6-16个数字，字母或符号，字母区分大小写');
            $('span[class=pwdspan]').css('color','black');
            $('input[type=password]').eq(0).next().css('visibility','hidden');
            $('input[type=password]').eq(0).css('border-color','#c6c6c6');
        },
        blur:function(){
            var pwd = $('input[type=password]').eq(0).val();
            if(pwd == ""){
                $('form .pwdspan').html('请输入密码');
                $('form .pwdspan').css('color','#ff464e');
                $('input[type=password]').eq(0).css('border-color','#ff464e');
                $('input[type=password]').eq(0).next().css('visibility','visible');
                $('input[type=password]').eq(0).next().children().eq(0).attr('src','images/error.jpg');
                b=0;
            }else {
                var pwd = $('input[type=password]').eq(0).val();
                if(regpwd.test(pwd) == false){
                    $('form .pwdspan').html('密码格式不符合规范');
                    $('form .pwdspan').css('color','#ff464e');
                    $('input[type=password]').eq(0).css('border-color','#ff464e');
                    $('input[type=password]').eq(0).next().css('visibility','visible');
                    $('input[type=password]').eq(0).next().children().eq(0).attr('src','images/error.jpg');
                    b=0;
                }else {
                    if(regpwd.test(pwd) == true){
                        $('form .pwdspan').html('<div><strong class="low"></strong><strong class="mid"></strong><strong class="high"></strong><b class="leval"></b></div>');
                        /*$('form .pwdspan').css('visibility','visibile');*/
                        $('input[type=password]').eq(0).css('border-color','#c6c6c6');
                        $('input[type=password]').eq(0).next().css('visibility','visible');
                        $('input[type=password]').eq(0).next().children().eq(0).attr('src','images/sucess.jpg');
                        b=1;

            /*--------------------判断密码的安全级别部分-----------------*/

                        var count = 0;
                        if (/\d/.test(pwd)) {
                            count++;
                        }
                        if (/[a-z]/.test(pwd)) {
                            count++;
                        }
                        if (/[A-Z]/.test(pwd)) {
                            count++;
                        }
                        if (/[\\\~\!\@\#\$\%\^\&]/.test(pwd)) {
                            count++;
                        }
                        if (count <= 2) {
                            $('strong[class=low]').addClass('active1');
                            $('b[class=leval]').html('低');
                            $('b[class=leval]').css('color','#ff3838');
                        }
                        if (count == 3) {
                            $('strong[class=low]').addClass('active2');
                            $('strong[class=mid]').addClass('active2');
                            $('b[class=leval]').html('中');
                            $('b[class=leval]').css('color','#ff6600');
                        }
                        if (count == 4) {
                            $('strong[class=low]').addClass('active3');
                            $('strong[class=mid]').addClass('active3');
                            $('strong[class=high]').addClass('active3');
                            $('b[class=leval]').html('高');
                            $('b[class=leval]').css('color','green');
                        }
            /*--------------------判断密码的安全级别部分结束-----------------*/

                    }
                }
            }
        }
    });
    /*-----------------------------------判断密码部分结束----------------------------*/

    /*------------------------------------确认密码部分------------------------------*/

    $('input[type=password]').eq(1).bind({
        focus: function () {
            $('form .againspan').css('visibility', 'visible');
            $('form .againspan').html('请再次输入密码');
            $('form .againspan').css('color','black');
            $('input[type=password]').eq(1).css('border-color','#c6c6c6');
        },
        blur:function(){
            var pwd = $('input[type=password]').eq(0).val();
            var againpwd = $('input[type=password]').eq(1).val();
            if(againpwd == ""){
                $('form .againspan').html('请输入确认密码');
                $('form .againspan').css('color','#ff464e');
                $('input[type=password]').eq(1).css('border-color','#ff464e');
                $('input[type=password]').eq(1).next().css('visibility','visible');
                $('input[type=password]').eq(1).next().children().eq(0).attr('src','images/error.jpg');
                c=0;
            }else {
                if( againpwd != pwd || pwd == ''){
                    $('form .againspan').html('两次密码输入不一致');
                    $('form .againspan').css('color','#ff464e');
                    $('input[type=password]').eq(1).css('border-color','#ff464e');
                    $('input[type=password]').eq(1).next().css('visibility','visible');
                    $('input[type=password]').eq(1).next().children().eq(0).attr('src','images/error.jpg');
                    c=0;
                }else {
                    if(againpwd == pwd){
                        $('form .pwdspan').html('');
                        $('input[type=password]').eq(1).css('border-color','#c6c6c6');
                        $('input[type=password]').eq(1).next().css('visibility','visible');
                        $('form .againspan').css('visibility', 'hidden');
                        $('input[type=password]').eq(1).next().children().eq(0).attr('src','images/sucess.jpg');
                        c=1;
                    }
                }
            }
        }
    });
    /*------------------------------------确认密码部分结束------------------------------*/

    //跳到登录页面
    $('a[class=clicklog]').click(function(){
        window.location.href="login.html";
    });
    $('a[class=gologin]').click(function(){
        window.location.href="login.html";
    });
    //按钮变色
    $('input[class=regsbtn]').hover(fn1,fn2);
    function fn1(){
        $('input[class=regsbtn]').css('opacity',0.5);
    }
    function fn2(){
        $('input[class=regsbtn]').css('opacity',1);
    }

    /*------------------------------------完成注册存cookie------------------------------*/

    $('input[class=regsbtn]').click(function(){
        if((a * b * c == 1)&&($('input[class=checkbox]')).prop("checked")){
            $('#cover').css('display','block');
            $('.cover_con').css('display','block');
            var tmpJSON = {
                phonecookie : $('form').children().eq(0).val(),
                pwdcookie : $('input[type=password]').eq(0).val()
            };
            var tmpStr = JSON.stringify(tmpJSON);
            $.cookie($('form').children().eq(0).val(),tmpStr,{expires:30});
        }
    });
    /*----------------------------------完成注册存cookie结束------------------------------*/

    /*--------------------------------------body覆盖层---=-------------------------------*/

    //每刷新一次就有随机图片
    var randomnum = getrandomNum(1,16);
    $('em[class=coverrancode]').children().eq(0).attr('src','images/code'+randomnum +'.png');
    //每点击一次就有随机图片
    $('a[class=coverrancode]').click(function(){
        var randomnum = getrandomNum(1,16);
        $('em[class=coverrancode]').children().eq(0).attr('src','images/code'+randomnum +'.png');
    });
    //产生随机数
    function getrandomNum (min,max,isFloat){
        if(isFloat){
            return Math.random()*(max - min) + min;
        }
        return Math.floor(Math.random()*(max - min)) + min;
    };
    //点击X消失
    $('.cancel').click(function(){
        $('#cover').css('display','none');
        $('.cover_con').css('display','none')
    });

    //点击确定注册成功，跳转
    $('.coververify').focus(function(){
        $('.codespan').css('visibility','hidden');
        $('.coververify').css('border-color','#c6c6c6');
    });
    $('.ok').click(function(){
        //判断验证码
        if($('.coververify').val() == ''){
            $('.codespan').css('visibility','visible');
            $('.codespan').html('验证码不能为空');
            $('.coververify').css('border-color','#ff464e');
        }else {
            for(var i=0;i<arr.length;i++){
                if($('.coververify').val() != arr[i]){
                    $('.codespan').css('visibility','visible');
                    $('.codespan').html('验证码错误');
                    $('.coververify').css('border-color','#ff464e');
                }else {
                    window.location.href="index.html";
                    $('#cover').css('display','none');
                    $('.cover_con').css('display','none')
                }
            }
        }
    });
    /*----------------------------------body覆盖层结束--------------------------------*/

});