/**
 * Created by Administrator on 2016/9/27 0027.
 */
(function($){
    $(function(){
        //固定电话框的得失焦点
        var telainput=$('.newaddress .tela input');
        telainput.focus(function(){
            var iIndex = telainput.index($(this));
            if(this.value==this.defaultValue){
                  this.value=""
            }
        })
        telainput.blur(function(){
            var iIndex = telainput.index($(this));
            if(this.value==""){
                this.value=this.defaultValue
            }
        }) ;


        //新增地址的出现与消失
        var newh4       =  $('#address h4');
        var newaddress  =  $('#address .newaddress');
        newh4.click(function(){
            if(!this.btn){
                this.btn = true;
                newaddress.css({display:'block'})
            }else{
                this.btn = false;
            }
        });
        //将写进新增地址中的内容存入cookie，并显示在已有地址中

        var yesaddress     =  $('.newaddress .yesorno .yes');
        var noaddress      =  $('.newaddress .yesorno .no');
        var oldaddress     =  $('.oldaddress');
        var oldm           =  $('.oldaddress .oldsm');
        var usernames      =  $('.oldaddress .username');
        var addn           =  $(".oldaddress .add");
        var longaddress    =  $('.oldaddress .longadd');
        var telm           =  $('.oldaddress .tel');
        var newnames       =  $('.box1 .newname input').html();
        var emails         =  $('.box1 .email input').html();
        var province       =  $('#s_province').html();
        var city           =  $('#s_city').html();
        var county         =  $('#s_county').html();
        var detailaddress  =  $('.newaddress .detailadd input').html();
        var telss          =  $('.newaddress .tels').html();
        var onetel         =  $(".newaddress .tela .one").html();
        var twotel         =  $(".newaddress .tela .two").html();
        var threetel       =  $(".newaddress .tela .three").html();

        var oldlength=0;
        yesaddress.click(function(){
            oldlength++;
            oldm.length=oldlength;
            //写入cookie
            /*$.cookie('newnames',newnames.val(), {expires:7,path:"/"});
            $.cookie('emails',emails.val(), {expires:7,path:"/"});
            $.cookie('province',$('#s_province option:selected').text(), {expires:7,path:"/"});
            $.cookie('city',$('#s_city option:selected').text(), {expires:7,path:"/"});
            $.cookie('county',$('#s_country option:selected').text(), {expires:7,path:"/"});
            $.cookie('detailaddress',detailaddress.val(), {expires:7,path:"/"});
            $.cookie('telss',telss.val(), {expires:7,path:"/"});
            $.cookie('onetel',onetel.val(), {expires:7,path:"/"});
            $.cookie('twotel',twotel.val(), {expires:7,path:"/"});
            $.cookie('threetel',threetel.val(), {expires:7,path:"/"});*/

            var arr=[$('.box1 .newname input').html(),'emails','province','city','county','detailaddress','telss','onetel','twotel','threetel'];
            console.log(arr);
            var test='["colkey", "col", "colsinfo","NameList" ]';
            var obj2=eval("("+test+")");
            alert(obj2.length);
            //获得cookie，并显示在已有地址中
            usernames.text($.cookie('newnames'));
            addn.text($('#s_province option:selected').text()+$('#s_city option:selected').text()+$('#s_county option:selected').text());//省市区
            longaddress.text($.cookie('detailaddress'));
            telm.text($.cookie('telss'));
            $.cookie('onetel');
            $.cookie('twotel');
            $.cookie('threetel');
            var divHtml = '';
            divHtml +='<li class="olds">'+
                '<div class="del">'+
                '<div class="write">编辑</div>'+
                '<div class="dels">删除</div>'+
                '</div>'+
                '<div class="username"></div>'+
                '<div class="add"></div>'+
                '<div class="longadd"></div>'+
                '<div class="tel"></div>'+
                '</li>';
            $('.oldaddress').append(divHtml);
        });
        noaddress.click(function(){
            newnames.val('');
            emails.val('');
            $('#s_province option:selected').text('请选择省份');
            $('#s_city option:selected').text('请选择城市');
            $('#s_country option:selected').text('请选择县区');
            detailaddress.val('');
            telss.val('');
            onetel.val('');
            twotel.val('');
            threetel.val('');
        })

        //划过相应的物品名称，图片出现
        var goodstitle  =  $('#goodlistm .goods-title');
        var goodsimg    =  $('#goodlistm .img');
        goodstitle.mouseenter(function(){
            var iIndex=goodstitle.index($(this));
            console.log(iIndex);
            goodsimg.css({display:'none'}).eq(iIndex).css({display:'block'})
        })
        goodstitle.mouseleave(function(){
            var iIndex=goodstitle.index($(this));
            goodsimg.css({display:'none'})
        })


        //优惠券的出现与消失
        var cutpricetitle   =  $('.cutprice h3');
        var cutpricetitles  =  $('.cutprice h3 span');
        var cutpricejuan    =  $('.cutprice .juan');
        cutpricetitle.click(function(){
            if(!this.btn) {
                this.btn=true;
                cutpricejuan.css({display:'block'});
                cutpricetitles.text('+')

            } else{
                this.btn=false;
                cutpricejuan.css({display:'none'});
                cutpricetitles.text('-')
            }
        })
        //信用卡的消失与出现
        var dollarpeople  =  $('.dollarpeople input');
        var cardm         =  $('#card');
        dollarpeople.click(function(){
            if(!this.btn){
                this.btn=true;
                cardm.css({display:"block"})
            }else{
                this.btn=false;
                cardm.css({display:'none'})
            }

        })

        //15分钟后出现15分钟未反应页面
        var mainmm = $('#mainmm');
        var mainm  = $('#mainm');
        setTimeout(function(){
            mainmm.css({display:'block'});
            mainm.css({display:'none'})
        },900000)

    })
}) (jQuery);