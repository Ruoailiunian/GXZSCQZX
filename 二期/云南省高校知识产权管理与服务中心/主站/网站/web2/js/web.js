$(function(){
		//选项卡
	$('.XxNewBt').each(function(){
		$(this).children('ul').children('li').eq(0).addClass('active')
	});
	$('.XxList').each(function(){
		$(this).children('ul').eq(0).show();
	});
	$('.XxNewBt>ul>li').mouseover(Xxk);
	function Xxk(){
		var len=$(this).parent('ul').children('li').index(this);
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active');
		$(this).parents('.XxNewBt').siblings('.XxList').children('ul').hide();
		$(this).parents('.XxNewBt').siblings('.XxList').children('ul').eq(len).show();
	}

	//导航条
	//
	$('.navN>ul>li').hover(function(){
		$(this).siblings('li').removeClass('active');
		$(this).addClass('active')
		$(this).find('a').addClass('animated flipInX');
	},function(){
		$('.navN>ul>li').removeClass('active');
		$('.navN>ul>li>a').removeClass('animated flipInX');
		$('.navN>ul>li:first').addClass('active');
	})

	//站点切换
	$('#QhList').click(function(){
		$('.QhListli').slideToggle()
	})

	
	//子页面左边列表同步高度
	$('.listR').height()>$('.listL').height() ? $('.listL').height($('.listR').height()) :  '';

})