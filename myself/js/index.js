$(function(){
 var mySwiper = new Swiper('.swiper-container', {
				direction: 'vertical',
				pagination : '.swiper-pagination',
                paginationType : 'progress',
				
				onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
					swiperAnimateCache(swiper); //隐藏动画元素
					swiperAnimate(swiper); //初始化完成开始动画
				},
				onSlideChangeEnd: function(swiper) {
					swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
				}
		
			})
          
         
			var oPlay=$("#audio_btn")
			var oAudio=$("#audio")
			
			var isPlay=false;
			oPlay.click(function(){
			   if(isPlay){
			       oAudio[0].play();  
			       oPlay.addClass("audio_btn")
			       console.log(11111111111111)
			   }
			   else{
			   oAudio[0].pause(); 
			       oPlay.removeClass("audio_btn")
			       console.log(2222222222)
			   }
			     isPlay=!isPlay;
			 })

     
})
