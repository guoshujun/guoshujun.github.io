/**
 * Created by Administrator on 2016/9/22 0022.
 */
(function($){
    $(function(){
        //导航的消失与出现
        var allgoods=$("#navlist .allgood") ;
        var alllists=$("#navlist .alllist");
        var navlists=$('#navlist');
        alllists.mouseenter(function(){
            allgoods.css({display:"block"})
        });
        navlists.mouseleave(function(){
            allgoods.css({display:"none"})
        });


        /*==================左侧分类==================*/
        var goods=$(".left .good1 h4");
        var classify=$(".left .good1 ul");
        var btn=true;
        goods.click(function(){
            var iIndex=$(this).index()/2;
            if(btn){
                classify.eq(iIndex).css({display:"block"});
                goods.eq(iIndex).css({background:"#fff"});
                btn=false;
            }else{
                classify.eq(iIndex).css({display:"none"});
                goods.eq(iIndex).css({background:"#e8e6e7"});
                btn=true;
            }
        });




       /*==================右侧==========================*/
        //导航栏
        //点击多选出现相应的确定或消失
        var more1    =  $(".filter1 .more");
        var filter1  =  $(".filter1");
        var yesorno  =  $(".filter1 .yesorno");
        var is       =  $('.filterlist i');
        more1.click(function(){
            var iIndex=more1.index($(this));
            yesorno.eq(iIndex).css({display:"block"});
            filter1.eq(iIndex).find(is).css("background-position","0px -30px").css({display:"block"});
        });


        //点击更多，出来更多东西
        var most1   =  $('.most1');
        var most2   =  $('.most2');
        var most1a  =  $('.most1 a');
        var most2a  =  $('.most2 a');
        var hide1   =  $('.filterentry .hide');
        var hide2   =  $('.filtertag .hide');
        most1.click(function(){
            if(!this.btn){
                hide1.css({display:"block"});
                most1a.html('收起');
                btn=false;
            }else{
                hide1.css({display:"none"});
                most1a.html('更多');
                btn=true ;
            }
        })
        most2.click(function(){
            if(btn){
                hide2.css({display:"block"});
                most2a.html('收起');
                btn=false;
            }else{
                hide2.css({display:"none"});
                most2a.html('更多');
                btn=true ;
            }
        })



        //点击取消，确定取消消失
        var no   =  $(".yesorno .no");
        no.click(function(){
            var iIndex=no.index($(this));
             yesorno.eq(iIndex).css({display:"none"});
             filter1.eq(iIndex).find(is).css({display:"none"});
             is.css("background-position","0px -30px");
        });

        //点击复选框，对勾勾上
        is.click(function(){
            var iIndex1=is.index($(this));
            if(!this.btn){
                this.btn = true;
                is.eq(iIndex1).css("background-position","0px 0px");
            }else{
                this.btn = false;
                is.eq(iIndex1).css("background-position","0px -30px");
            }
        });





        //点击确定，已选的复选框的对应的内容变成黄色框，剩余没有选的隐藏
        var yes   =  $(".yesorno .yes");
        var istrue=  is.css("background-position","0px 0px");
        yes.click(function(){
            $(this).parent().prevAll().each(function () {
                if(!$(this).children('i')[0].btn) {
                    $(this).css({display: 'none'});

                   /* !$(this).addClass("select");*/
                    yesorno.css({display:'none'})
                }
            });
        });



        //重置筛选项
        var bs           =   $('.galleryfilter  b');
        var filterclean  =   $('.galleryfilter .filterclean');
        filterclean.click(function () {
            filterprice.css({display:"none"});
            filtercolor.css({display:"none"});
            filtercut.css({display:"none"});
            filtertag.css({display:"none"});
            yesorno.css({display:"none"});
            is.css({display:"none"}).css("background-position","0px -30px");
            hide1.css({display:"none"});
            most1a.html('更多');
            hide2.css({display:"none"});
            most2a.html('更多');
            bs.css({display:'block'});
            hide1.css({display:"none"});
        });



        //显示更多或隐藏
        var showmore     =  $('.galleryfilter .showmore');
        var showmorea    =  $('.showmore a');
        var filterprice  =  $('.galleryfilter .filterprice');
        var filtercolor  =  $('.galleryfilter .filtercolor');
        var filtercut    =  $('.galleryfilter .filtercut');
        var filtertag    =  $('.galleryfilter .filtertag');
        showmore.click(function(){
           if(!this.btn){
               this.btn=true;
               filterprice.css({display:"none"});
               filtercolor.css({display:"none"});
               filtercut.css({display:"none"});
               filtertag.css({display:"none"});
               showmorea.html('显示更多筛选项')
           }else{
               this.btn=false;
               filterprice.css({display:"block"});
               filtercolor.css({display:"block"});
               filtercut.css({display:"block"});
               filtertag.css({display:"block"});
               showmorea.html('收起筛选项')
               btn=true;
           }
        });

        //商品排行
        var gallerysortbarli=$(".gallery-sortbar li");
        gallerysortbarli.click(function(){
            var iIndex=$(this).index();
            gallerysortbarli.removeClass("active").eq(iIndex).addClass("active")
        });



        //点击换页
        var btnleft1=$(".gallery-sortbar .btnleft");
        var btnright1=$(".gallery-sortbar .btnright");
        var btnleftspan =$(".gallery-sortbar  .btnleftspan");
        var btnrightspan =$(".gallery-sortbar  .btnrightspan");
        btnleft1.click(function(){
            var btnleftspanval=btnleftspan.html();
            btnleftspanval--;
            if(btnleftspanval==0){
                btnleftspanval=5
            }
            btnleftspan.text(btnleftspanval)
        });
        btnright1.click(function(){
            var btnleftspanval=btnleftspan.html();
            btnleftspanval++;
            if(btnleftspanval>5){
                btnleftspanval=1
            }
            btnleftspan.text(btnleftspanval)
        });



        //列表进入离开加入购物车显示与隐藏
        var formall1           =   $('.formall1');
        var formall           =   $('.formall');
        var tobuy             =   $('.galleryshow .tobuy');
        var formallimgright   =   $('.formallimgright1');
        var formallimgright1  =   $('.formallimgright1 div');
        var decoration        =   $('.formall1 .decoration');
        var price             =   $('.formall1 .price');
        var tobuy1            =   $('.formall1 .tobuy');
        formall1.mouseenter(function(){
            var iIndex=formall1.index($(this));
            tobuy1.eq(iIndex).css({display:"block"});
            formallimgright.animate({left:253},100);
            formallimgright.css({display:"block"});
            tobuy1.width(340);
        });
        formall1.mouseleave(function(){
            var iIndex=formall1.index($(this));
            tobuy1.eq(iIndex).css({display:"none"});
            formallimgright.animate({left:160},100);
            formallimgright.css({display:"none"});
            formallimgright1.removeClass("active");
            tobuy1.width(233);
        });
        //加入购买的出现与消失
        formall.mouseenter(function(){
            var iIndex=formall.index($(this));
            tobuy.eq(iIndex).css({display:"block"});
                tobuy.eq(iIndex).animate({top:412},100)

        });
        formall.mouseleave(function(){
            var iIndex=formall.index($(this));
            tobuy.eq(iIndex).css({display:"none"});
                tobuy.eq(iIndex).animate({top:349},100)

        });
        //换图片
        var formallimg       =  $('.formallimg1 img')[0];
        var arr1=['../img/list2.jpg','../img/list22.jpg','../img/list23.jpg'];
        formallimgright1.mouseenter(function(){
            var iIndex=$(this).index();
            formallimgright1.removeClass("active").eq(iIndex).addClass("active");
            formallimg.src=arr1[iIndex]
        });
        //换页面
        var btnlista  =$ (".btnlist a");
        btnlista.click(function(){
            var iIndex= btnlista.index($(this));
            btnlista.removeClass('active').eq(iIndex).addClass('active');
            $('body,html').animate({scrollTop:550},1000)
        });
        var btnlistleftbtn=$('.btnlist .btnlistleftbtn');
        var btnlistrightbtn=$('.btnlist .btnlistrightbtn');
        var iIndexs=btnlista.index($(this));
        btnlistrightbtn.click(function(){
           iIndexs++;
            if(iIndexs>5){
                iIndexs=1
            }
            btnlista.removeClass('active').eq(iIndexs).addClass('active');
            $('body,html').animate({scrollTop:550},1000)
        });
        btnlistleftbtn.click(function(){
            console.log(iIndexs);
            iIndexs--;
            if(iIndexs<1){
                iIndexs=5
            }
            btnlista.removeClass('active').eq(iIndexs).addClass('active');
            $('body,html').animate({scrollTop:550},1000)
        });
        //加入购物车
        var galleryshow  =  $('.galleryshow');
        var addcart      =  $('.galleryshow .add-cart');

        addcart.click(function(){
            var iIndex      =  addcart.index($(this));
            var sGoodsSrc   =  addcart.eq(iIndex).attr('data-src');
            var iGoodsId    =  addcart.eq(iIndex).attr('data-id');
            var sGoodsTitle =  addcart.eq(iIndex).attr('data-title');
            var iGoodsPrice =  addcart.eq(iIndex).attr('data-price');
            //console.log(this)
            var sGoods     = $.cookie('goods');
            var bBtn       = true;
          // console.log(iGoodsId);
            if(sGoods === undefined) {
                var aGoods = [];
                //加入该商品第一次加入购物车则新增一个空数组
                //console.log(aGoods)
            } else {
                var aGoods = JSON.parse(sGoods);
                //若不是第一次加购物车则在数组中增加数量
               // console.log(aGoods)
            }

            for(var i =0; i < aGoods.length; i++) {
                if(aGoods[i].goodsId == iGoodsId){
                    aGoods[i].goodsNum++;
                    bBtn = false;
                }
            }

            if(bBtn) {
                var oGoods = {
                    goodsId: 	iGoodsId,
                    goodsTitle: sGoodsTitle,
                    goodsPrice: iGoodsPrice,
                    goodsSrc: 	sGoodsSrc,
                    goodsNum: 	1
                };
                aGoods.push(oGoods);
            }
            //var aGoods = []; // 存储所有商品信息的数组
            // console.log(aGoods)

            // 写入cookie
            $.cookie('goods', JSON.stringify(aGoods), {expires:7,path:"/"});
            function sumnumber(){
                var sum = 0;
                for(var i =0; i < aGoods.length; i++) {
                    sum+=aGoods[i].goodsNum;
                }
                //console.log(sum);
                $('.sumcount span').text(sum);
                $('#sidebar .car b').text(sum);
            }
            sumnumber()
        })

    })
})(jQuery);