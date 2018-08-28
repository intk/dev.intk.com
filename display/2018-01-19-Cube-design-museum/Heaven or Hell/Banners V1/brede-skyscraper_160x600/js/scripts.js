var count = 0;
$(document).ready(function() {	
	function animateAd(count) {
		var t = 0;
		setInterval(function () {
    		$('.t'+t).show();
			if (t == 1) {
				$('svg.title rect.first').animate({
					width:'275.5px',
					opacity:'1.0'

				});
			}
			if (t == 5) {
				$('svg.title rect.second').animate({
					width:'72.3px',
					opacity:'1.0'

				});
			}
			if (t == 10) {
				$('svg.title rect.third').animate({
					width:'140.4px',
					opacity:'1.0'

				});
			}
		t += 1;
		},100);
		self.setTimeout(function(){
			$('.background').addClass('show');
			$('.textbox').addClass('description');
		}, 1000);
		/*
		self.setTimeout(function(){
			$('.title-top').addClass('show');
		}, 1000);
		self.setTimeout(function(){
			$('.title-bottom').addClass('show');
		}, 1300);
		self.setTimeout(function(){
			$('.title-middle').addClass('show');
		}, 1800);
		self.setTimeout(function(){
			$('.date').addClass('show');
		}, 2200);
		*/
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 2400);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 2600);
		self.setTimeout(function(){
			$('.textbox').addClass('date');
		}, 3000);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
			$('.textbox').removeClass('date');
		}, 5400);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 5600);
		
		if (count < 2) {
			self.setTimeout(function(){
				$('.textbox').removeClass('description');
				$('div,img').removeClass('show');
				$('svg.title path').hide();
				$('svg.title rect').animate({
					width:'0',
					opacity:'0.0'
				});
			}, 8000);
			
			self.setTimeout(function(){
				animateAd(count);
			}, 9000);
			count++;
		}
	}
	animateAd(count);
});
	
	

			
	

