var count = 0;
var scroller;
$(document).ready(function() {	
	function animateAd(count) {
		var i = 0;
		self.setTimeout(function(){
			$('.wrapper figure').removeClass('show');
			$('.wrapper figure:nth-child(1)').addClass('show');
		}, 0);
		self.setTimeout(function(){
				$('.wrapper figure figcaption.first span.top').addClass('show');
			}, 300);
			
			self.setTimeout(function(){
				$('.wrapper figure figcaption.first span.middle').addClass('show');
			}, 600);
			
			self.setTimeout(function(){
				$('.wrapper figure figcaption.first span.underline').addClass('show');
			}, 900);
		self.setTimeout(function(){
			$('.wrapper figure').removeClass('show');
			$('.wrapper figure:nth-child(2)').addClass('show');
			$('.wrapper').addClass('white');
			self.setTimeout(function(){
			$('.wrapper figure figcaption.bar div.holder div.row:nth-child(1)').clone().addClass('copy').appendTo('.wrapper figure figcaption.bar div.holder');
			$('.wrapper figure figcaption.bar div.holder div.row:nth-child(1)').clone().addClass('copy').appendTo('.wrapper figure figcaption.bar div.holder');
			$('.wrapper figure figcaption.bar div.holder div.row:nth-child(1)').clone().addClass('copy').appendTo('.wrapper figure figcaption.bar div.holder');
			scroller = self.setInterval(function() {
				$('.wrapper figure figcaption.bar div.holder').scrollLeft(i);
				i++;
			}, 20);
		}, 0);
			
		}, 2500);
		
		self.setTimeout(function(){
			$('.wrapper figure img').addClass('show');
			$('.wrapper figure').removeClass('show');
			$('.wrapper figure:nth-child(3)').addClass('show');
		}, 6000);
		
		self.setTimeout(function(){
			$('a.link').addClass('show');
		}, 6000);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 6200);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 6400);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 7500);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 7800);
		
		if (count < 2) {
			self.setTimeout(function(){
			}, 8000);
			self.setTimeout(function(){
				$('.wrapper').removeClass('white');
				$('a.link').removeClass('show hover');
				$('.wrapper figure figcaption.first span').removeClass('show');
				$('.wrapper figure figcaption.bar div.holder div.row.copy').remove();
				clearInterval(scroller);
				animateAd(count);
			}, 9000);
			count++;
		}
	}
	animateAd(count);
});
	
	

			
	

