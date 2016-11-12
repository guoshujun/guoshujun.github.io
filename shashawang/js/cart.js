/**
 * Created by Administrator on 2016/9/26 0026.
 */
(function($){
    $(function(){
/*=======================购物车页面=========================================*/
        var
            sGoods = $.cookie('goods'),
            aGoods = JSON.parse(sGoods),
            sUlHtml = '';
        for(var i =0; i < aGoods.length; i++) {
            sUlHtml += '<li data-id="' + aGoods[i].goodsId +'">' +
                '<div class="img">' + '<img src="' + aGoods[i].goodsSrc +'" alt="">' + '</div>' +
                '<div class="goods-title">' + aGoods[i].goodsTitle +'</div>' +
                '<div class="goods-price">￥' + aGoods[i].goodsPrice +'</div>' +
                '<div class="goods-num">' + '<a href="javascript:;" class="countleft">-</a>'
                +'<input class="tx" type="text" value='+aGoods[i].goodsNum+'>'+
                    '<a href="javascript:;" class="countright">+</a></div>' +
                    '<div class="goods-sum">'+(aGoods[i].goodsNum)*(aGoods[i].goodsPrice)+'</div>'+
                    '<div class="goods-del">删除</div>'+
                '</li>';
            //不能对新增的节点直接进行DOM操作
        }
        $('.mains').prepend(sUlHtml);
        //document.getElementsByClassName('mains')[0].innerHTML = sUlHtml;

        //增减数量
        var countleft      =  $('.countleft');
        var countright     =  $('.countright');
        var countinput     =  $(' input');
        countleft.click(function(){
            var iIndex = countleft.index($(this));
            var countval = countinput.eq(iIndex).val();
            countval--;
            if(countval<1){
                return false;
            }
            location.reload();
            //更新数组
            aGoods[iIndex].goodsNum--;
            $.cookie('goods', JSON.stringify(aGoods), {expires:7,path:"/"});
            countinput.eq(iIndex).val(countval);
            //显示在购物篮的单项物品的价格改变
            setTotal();
            sumnumber();
        });
        countright.click(function(){
            var iIndex = countright.index($(this));
            var countval=countinput.eq(iIndex).val();
            countval++;
            //更新数组
            $('.goods-sum').text((aGoods[iIndex].goodsNum)*(aGoods[iIndex].goodsPrice))
            aGoods[iIndex].goodsNum++;
            $.cookie('goods', JSON.stringify(aGoods), {expires:7,path:"/"});
            countinput.eq(iIndex).val(countval);
            location.reload();

            //显示在购物篮的单项物品的价格改变
            setTotal();
            sumnumber();
        });
        //商品总数
        function sumnumber(){
            var sum = 0;
            for(var i =0; i < aGoods.length; i++) {
                sum+=aGoods[i].goodsNum;
            }
            $('.sumcount span').text(sum);
            $('#sidebar .car b').text(sum);
            $('#cartshops .foots  span').text(sum);
        }
        sumnumber();
        //商品总价
        function setTotal(){
            var s=0;
            for(var i =0; i < aGoods.length; i++){
               s+=(aGoods[i].goodsNum)*(aGoods[i].goodsPrice)
            }
            $(".sumprice .spanx").html(s.toFixed(1));
            $("#cartshops .foots strong").html(s.toFixed(1));
            $('#goodlistm .ordersection .first a').html(s.toFixed(1));
            $('#goodlistm .ordersection .four a').html(s.toFixed(1));
            $('#goodlistm .ordersection .inner2 a').html(s.toFixed(1));
            $(".settlecheck a").html(s.toFixed(1));
        }
        setTotal();


        //删除商品
       $('.goods-del').click(function(){
           var iIndex=$('.goods-del').index($(this));
           $(this).parent().remove();
           aGoods.splice(iIndex,1);
           $.cookie('goods', JSON.stringify(aGoods), {expires:7,path:"/"});
           location.reload();
       });
    //清除购物车
        $('.clearcart').click(function(){
            $.removeCookie('goods', {path:"/"});
            location.reload();
        })


        //加购区
        var btnlistsA= $('.btnlists a');
        var img      = $('.box .addbuygoods');
        btnlistsA.click(function(){
            var iIndex=$(this).index();
            btnlistsA.removeClass('select').eq(iIndex).addClass('select');
            img.css({display:"none"}).eq(iIndex).css({display:'block'})
        })

        //无缝轮播
         var leftleft   = $('.leftleft');
         var rightright = $('.rightright');
         var ul         = $('.box .addbuygoods ul');
         var iIndexs    = 0;
         var btn        = true;
         leftleft.click(function(){
             if(btn){
                btn=false;
                 if(iIndexs<=0){
                     return false;
                 }
                 iIndexs--;
                 ul.animate({left:-iIndexs*1090},function(){
                     btn=true;
                 });
             }

         });
         rightright.click(function(){
             if(btn){
                 btn=false;
                  if(iIndexs>=4){
                     return false;
                 }
                 iIndexs++;
                 console.log(iIndexs);
                 ul.animate({left:-iIndexs*1090},function(){
                     btn=true;
                 })
             }
         })
    })
})(jQuery);