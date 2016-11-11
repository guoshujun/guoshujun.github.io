/**
 * Created by Administrator on 2016/11/3.
 */
$(function(){
    //搜索框
    var search = $('.search');
    search.bind('input properchange',function(){
        $.ajax({
            type:'get',
            url:'http://list.mogujie.com/search?_mgjuuid=8604f3a9-7660-4734-9adb-223e77403359&sort=pop&cpc_offset=&cKey=h5-search-wall&page=1&q=3&userId=&ppath=&maxPrice=&minPrice=&ratio=3%3A4&_version=1&priceList=%5B10%2C+30%2C+30%2C+50%2C+50%2C+150%5D&_=1478182731560&callback=jsonp1'
        })
    });





    var swiperwrapper = $('#banner .swiper-wrapper');
    var sHtml = '';
    $.ajax({
        type:'get',
        url:'http://datainfo.duapp.com/shopdata/getBanner.php',
        dataType:'jsonp',
        success:function(data){
            console.log(data.length)
            for(var i=0;i<data.length;i++){
                sHtml+='<div class="swiper-slide"><img src="'+JSON.parse(data[i].goodsBenUrl)[0]+'" alt=""></div>'
            }
            console.log(sHtml);
            swiperwrapper.prepend(sHtml)
        }
    });

});