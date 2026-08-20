$(document).ready(function(){$(".group1").colorbox({rel:"group1",slideshow:!0,slideshowSpeed:4e3}),
$.colorbox.settings.maxWidth="100%",$.colorbox.settings.maxHeight="100%";
$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390}),$.colorbox.settings.maxWidth = "100%", $.colorbox.settings.maxHeight = "100%";
//tabs
$(function(){	
	var all_scroll = $('.tabs-header').offset().top;
	$(window).scroll(function(){
		if($(this).scrollTop() > all_scroll){
			$(".wptabs").addClass('fix_tab');
		}else{
			$(".wptabs").removeClass('fix_tab');
		}
	});
	
	//set thời gian 8s hiển thị form
	setTimeout(function(){ $(".trans,.wpopup").css({display:'block'}); }, 8000);
	
	
	$('.tabs-header li a[href^="#"]').bind('click', function(e) {
			e.preventDefault(); // prevent hard jump, the default behavior
			var target = $(this).attr("href"); // Set the target as variable

			// perform animated scrolling by getting top-position of target-element and set it as scroll target
			$('html, body').stop().animate({
					scrollTop: $(target).offset().top+50
			}, 600, function() {
					location.hash = target; //attach the hash (#jumptarget) to the pageurl
			});

			return false;
	});
	
});

$(window).scroll(function(){	
	var scrollDistance = $(window).scrollTop();
	var height_this = $(this).outerHeight();
	$('.tabcontent').each(function(i) {
		if($(this).position().top + height_this <= scrollDistance) {
			$('.tabs-header li a').removeClass("selected");
			$('.tabs-header li a').eq(i).addClass('selected');
		}
	});
	
}).scroll();
});