var count = 0;
$(document).ready(function() {	
	function animateAd(count) {
		self.setTimeout(function(){
			$('.wrapper figure img').addClass('show');
		}, 0);
		self.setTimeout(function(){
			$('.wrapper').addClass('sth');
		}, 1000);
		self.setTimeout(function(){
			$('.wrapper').addClass('smh');
		}, 1300);
		self.setTimeout(function(){
			$('.wrapper').addClass('sbh');
		}, 1500);
		self.setTimeout(function(){
			$('a.link').addClass('show');
		}, 1800);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 1800);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 2000);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 5400);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 5600);
		
		if (count < 2) {
			self.setTimeout(function(){
				self.setTimeout(function(){
					$('.wrapper').removeClass('sbh');
					}, 0);
					self.setTimeout(function(){
						$('.wrapper').removeClass('smh');
					}, 200);
					self.setTimeout(function(){
						$('.wrapper').removeClass('sth');
					}, 400);
			}, 8000);
			self.setTimeout(function(){
				animateAd(count);
			}, 9000);
			count++;
		}
	}
	animateAd(count);
});
	
	

			
	

