var count = 0;
$(document).ready(function() {	
	function animateAd(count) {
		var i = 0;
		self.setTimeout(function(){
			$('div.wrapper figure.tytgat').addClass('show');
		}, 0);
		
		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.title').addClass('show');
		}, 1000);

		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.posttitle').addClass('show');
		}, 1500);

		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.date').addClass('show');
		}, 1500);

		self.setTimeout(function(){
			$('div.wrapper figure figcaption span').removeClass('show');
		}, 4000);

		self.setTimeout(function(){
			$('div.wrapper figure.diederix').addClass('show');
		}, 4000);


		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.title').addClass('show');
		}, 5000);

		self.setTimeout(function(){
			$('div.wrapper figure. figcaption span.pretitle').addClass('show');
		}, 5500);

		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.date').addClass('show');
		}, 5500);

		self.setTimeout(function(){
			$('div.wrapper figure figcaption span').removeClass('show');
		}, 9000);

		self.setTimeout(function(){
			$('div.wrapper figure').addClass('last');
		}, 9500);

		self.setTimeout(function(){
			$('div.wrapper figure.tytgat figcaption span').addClass('show');
		}, 10000);

		self.setTimeout(function(){
			$('div.wrapper figure.diederix figcaption span').addClass('show');
		}, 10500);

		self.setTimeout(function(){
			$('.link').addClass('show');
		}, 10000);
		self.setTimeout(function(){
			$('.link').addClass('hover');
		}, 10200);
		self.setTimeout(function(){
			$('.link').removeClass('hover');
		}, 10400);
		self.setTimeout(function(){
			$('.link').addClass('hover');
		}, 12500);
		self.setTimeout(function(){
			$('.link').removeClass('hover');
		}, 12800);
		
		if (count < 1) {

			self.setTimeout(function(){
				$('.link').removeClass('show');
			}, 14000);

			self.setTimeout(function(){
				$('div.wrapper figure figcaption span').removeClass('show');
			}, 14000);

			self.setTimeout(function(){
				$('div.wrapper figure.tytgat').removeClass('last').addClass('loop');
			}, 15000);

			self.setTimeout(function(){
				$('div.wrapper figure.diederix').removeClass('last show');
				animateAd(count);
			}, 15000);

			count++;
		}
	}
	animateAd(count);
});
	
	

			
	

