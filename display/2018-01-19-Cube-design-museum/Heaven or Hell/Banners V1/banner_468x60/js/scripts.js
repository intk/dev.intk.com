var count = 0;
$(document).ready(function() {	
	function animateAd(count) {
		var t = 0;
		setInterval(function () {
    		$('.t'+t).show();
			if (t == 1) {
				$('svg.title rect.first').animate({
					width:'532.8px',
					opacity:'1.0'

				}, 1300);
			}
		t += 1;
		},100);
		self.setTimeout(function(){
			$('.background').removeClass('overview').addClass('show');
		}, 200);
		self.setTimeout(function(){
			$('.background').addClass('overview');
		}, 1500);
		self.setTimeout(function(){
			$('svg.title path').hide();
				$('svg.title rect').animate({
					width:'0',
					opacity:'0.0'
				});
			
		}, 3000);
		self.setTimeout(function(){
			var t = 0;
		setInterval(function () {
    		$('.s'+t).show();
			if (t == 1) {
				$('svg.subtitle rect.first').animate({
					width:'505.74px',
					opacity:'1.0'

				}, 1300);
			}
		t += 1;
		},100);
		}, 3500);
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
				$('svg.subtitle path').hide();
				$('svg.subtitle rect').animate({
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
	
	

			
	

