$(document).ready(function(){
	$("#gnb > li > ul > li > a").click(function(event){
		var target = $(this.hash);
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, {
			duration: 1500,
			step: function (now, tween) {
				if (tween.end !== target.offset().top) {
					tween.end = target.offset().top
				}
			}
		});
	});

	const paths = location.pathname.split('/');
	const lastUri = paths[paths.length - 1];
	const aList = document.querySelector(`a[href*="${lastUri}"]`).nextElementSibling.querySelectorAll('a');
	aList.forEach(e => {
		e.setAttribute('href', `#${e.dataset.target}`);
	});

	const target = new URLSearchParams(location.search).get('target');
	if (target) {
		const a = Array.from(aList).find(item => item.dataset.target === target);
		history.replaceState({}, '', location.pathname);
		a.click();
	}
});

// Top Navigation Bar
function gnbMenu(depth1,depth2){
	$("#gnb > li").on('focusin mouseenter',function() {
		$(this).find("ul").css("display", "block");
		$(this).children('a').addClass('on');
		$(this).siblings().find("ul").css("display", "none");
		$(this).siblings().find("a").removeClass('on');
	});
	$("#gnb > li").on('mouseleave',function() {
		$(this).find('ul').css("display", "none");
		$(this).find("a").removeClass('on');
		$('#gnb > li:eq('+depth1+') > a').addClass("on");
		$('#gnb > li:eq('+depth1+') > a').find("ul").css("display", "block");
		$('#gnb > li:eq('+depth1+') ul li:eq('+depth2+') > a').addClass("on");
	});
	if ( $('#gnb > li').length > depth1){
		$('#gnb > li:eq('+depth1+') > a').addClass("on");
		$('#gnb > li:eq('+depth1+') > a').find("ul").css("display", "block");
		$('#gnb > li:eq('+depth1+') ul li:eq('+depth2+') > a').addClass("on");
	}
}

/* Menu Bar FIXED */
if ($(window).width() > 0) {
	$(window).on("scroll",function(ev){
		if($(window).scrollTop() > 80 ) { /* Add fixed class if scroll out of range */
			$('header').addClass('fixed');
		}
		else{
			$('header').removeClass('fixed');
		}
		return false;
	});
}
