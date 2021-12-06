$(document).ready(function() { 
	
	let images = document.querySelectorAll('img');

	let j = false;
	let k = images.length;
	let imageInterval = setInterval(() => {

		for (let i = 0; i < k; i++) {
			if (images[i].complete) {
				j = true;
			}
			else {
				j = false;
			}
		}

		if (j) {
			clearInterval(imageInterval);
			$(".s1-container").fadeOut(300);
			setOpacity();
			function setOpacity() {
				let op = 0;
				setTimeout(function func() {
				    if (op > 1)
				        return;
				    $('.sec').css({
						'opacity': op
						});
				    op += 0.1;
				    setTimeout(func, 25);
				},25);    
			}
			
		}
		else {
			j = false;
		}

	}, 50);
		
	  



});

