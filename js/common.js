$(document).ready(function(){
	$("#gnb").clone().appendTo(".mgnb").attr("id", "m_nav");
	// MOBILE NAVIGATION
	$("#m_nav > li > a").click(function(e){
		if($(this).parent().hasClass("has_sub")) {
			e.preventDefault();
		}
		if(!$(this).hasClass("open")) {
			// hide any open menus and remove all other classes
			$("#m_nav li > ul").slideUp();
			$("#m_nav li a").removeClass("open");
			// open our new menu and add the open class
			$(this).next("ul").slideDown();
			$(this).addClass("open");
		}else if($(this).hasClass("open")) {
			$(this).removeClass("open");
			$(this).next("ul").slideUp();
		}
	});

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

	// setTimeout (temporarily used for loading)
	setTimeout(removeLoader, 1000);
});

// loading
function removeLoader(){
    $('.mask').fadeOut(500);
	$('body').addClass('load_end');
}

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
// When clicked on all menus (MOBILE)
$(window).on("load", function(){
	// When clicked on all menus (MOBILE)
	$("#spinner-mb").click(function(){
		$(this).toggleClass('on');
		$(".togglemenu").toggleClass('on');
		$(".mgnb").toggleClass('mb_menu_top');
		$(".gnb_overlay").toggleClass('on');
		$('body').toggleClass("mobile_menu_visible");
	});
});

/* Menu Bar FIXED */
if ($(window).width() > 0) {
	$(window).on("scroll",function(ev){
		if($(window).scrollTop() > 80 ) { /* Add fixed class when out of range */
			$('header').addClass('fixed');
		}
		else{
			$('header').removeClass('fixed');
		}
		return false;
	});
}
