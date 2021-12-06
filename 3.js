$(document).ready(function() { 
	
	$(".inimgdiv").click(function(){	
	  	var img = $(this);	
		var src = img.attr('src'); 
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src='"+src+"' class='popup_img' />"+ 
						 "</div>"); 
		
		$(".popup").fadeIn(400); 
		$('.popup').css({
		'display': 'flex',
		'justify-content': 'center',
		'align-items': 'center',
		});
		$(".popup_bg").click(function(){		   
			$(".popup").fadeOut(400);	
			setTimeout(function() {	
			  $(".popup").remove(); 
			}, 800);
		});
	});
	
});