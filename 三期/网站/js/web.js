;!function(){
	  var carousel = layui.carousel;
	  //建造实例
	  carousel.render({
	    elem: '#test1'
	    ,width: '100%' //设置容器宽度
	    ,arrow: 'always' //始终显示箭头
	    ,height:"350px"
	    ,indicator:'none'
	    //,anim: 'updown' //切换动画方式
	  });
}();


$(function(){
	var widW=true;
	$('.depdiv').mouseover(depdivmouse);
	$('.fzx').hover(fzxover,fzxout);
	$('.layui-tab-title>li').click(tabliclick);
	$('.ulmore>li:first').show();
	$('.shudh>ul>li:last').click(FhTop);
	$('.shudh>ul>li').hover(shudhove,shudhout);
	$(window).resize(windowT,zjheight)
	

	function depdivmouse(){
		if(widW){
			$(this).addClass('active').siblings().removeClass('active');
		}
	}

	function fzxover(){
		$(this).find('ul').show();
	}

	function fzxout(){
		$(this).find('ul').hide();
	}

	function tabliclick(len){
		var len=$(this).parent('ul').children('li').index(this);
		$(this).siblings('ul.ulmore').children('li').eq(len).show().siblings('li').hide();;
	};

	function FhTop(){
		$('html , body').animate({scrollTop: 0},'slow');
	};

	function shudhove(){
		$(this).find('div').show();
	};

	function shudhout(){
		$(this).find('div').hide();
	};

	function windowT(){
		var windowWidth=$(window).width();
		if(windowWidth<992){
			$('.depdiv').addClass('active');
			widW=false;
		}else{
			$('.depdiv').removeClass('active');
			$('.depdiv:first').addClass('active')
			widW=true;
		}
	};
	windowT();


})