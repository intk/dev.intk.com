var count = 0;
$(document).ready(function() {	
	function animateAd(count) {
		self.setTimeout(function(){
			$('.sculpture').addClass('show');
		}, 200);
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
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 2400);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 2600);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 5400);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 5600);
		
		if (count < 2) {
			self.setTimeout(function(){
				$('div,img').removeClass('show');
			}, 8000);
			self.setTimeout(function(){
				animateAd(count);
			}, 9000);
			count++;
		}
	}
	animateAd(count);
});
	
	

			
	

