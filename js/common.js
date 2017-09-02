$(document).ready(function() {

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i)
	});

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(function() {
		$("input, select, textarea").not("[type=submit]").jqBootstrapValidation(); 
	});

	$("a[href*='#']").mPageScroll2id();

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".animation_left").animated("fadeInLeft", "fadeOutDown");
	$(".animation_down").animated("flipInX", "fadeOutDown");
	$(".animation_right").animated("fadeInRight", "fadeOutDown");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".left .resume_item").animated("fadeInLeft", "fadeOutDown");
	$(".right .resume_item").animated("fadeInRight", "fadeOutDown");

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline"});

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".toggle_mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_mnu li").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").removeClass("h_opacify");
	});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_text").removeClass("h_opacify");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").addClass("h_opacify");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});


});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});