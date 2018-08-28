var count = 0;

$(document).ready(function() {	

	function animateAd(count) {
		var i = 0;
		self.setTimeout(function(){
			$('div.wrapper figure img').addClass('show');
		}, 0);
		
		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.title').addClass('show');
		}, 1000);
		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.subtitle').addClass('show');
		}, 1300);
		self.setTimeout(function(){
			$('div.wrapper .logo').addClass('show');
		}, 1400);
		
		self.setTimeout(function(){
			$('a.link').addClass('show');
		}, 2000);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 2000);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 2200);
		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.subtitle').addClass('bottom');
		}, 4000);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 5500);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 5800);
		
		if (count < 2) {
			self.setTimeout(function(){
			$('div.wrapper figure img').removeClass('show');
		}, 6000);
			self.setTimeout(function(){
				$('a.link').removeClass('show hover');
			}, 6500);
			self.setTimeout(function(){
				$('div.wrapper figure figcaption span.subtitle').removeClass('show');
			}, 6000);
			self.setTimeout(function(){
				$('div.wrapper figure figcaption span.title').removeClass('show');
			}, 6000);
			self.setTimeout(function(){
				$('div.wrapper .logo').removeClass('show');
			}, 6800);
			self.setTimeout(function(){
				$('div.wrapper figure figcaption span.subtitle').removeClass('bottom');
				animateAd(count);
			}, 9000);
			count++;
		}
	}
	animateAd(count);
});
	
	

			
	

