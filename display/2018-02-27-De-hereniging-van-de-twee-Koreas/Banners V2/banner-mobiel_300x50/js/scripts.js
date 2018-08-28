var count = 0;
var addSlide;
var scroller;
var tempScroller;
var i = 0;
$(document).ready(function() {	
	function animateAd(count) {
		count++;
		if (addSlide == null) {
			addSlide = self.setInterval(function(){
				$('.wrapper div.slide figure:nth-child(1)').clone().appendTo('.wrapper div.slide');
			}, 1000);
			scroller = self.setInterval(function(){
				$('.wrapper div.slide').scrollLeft(i);
				i++;
			}, 20);
		}
		self.setTimeout(function(){
			$('.wrapper div.slide').addClass('show');
		}, 0);
		
		self.setTimeout(function(){
			$('.wrapper span.subtitle:nth-last-of-type(1)').addClass('show');
		}, 500);
		self.setTimeout(function(){
			$('.wrapper span.subtitle:nth-last-of-type(1)').removeClass('show');
			tempScroller = self.setInterval(function(){
				$('.wrapper div.slide').scrollLeft(i);
				$('.wrapper div.slide figure img').attr('src', 'images/betty-emmanuel.jpg');
				$('.wrapper div.slide figure:nth-child(1)').clone().appendTo('.wrapper div.slide');
				i = i+20;
			}, 10);
		}, 2500);
		
		self.setTimeout(function(){
			clearInterval(tempScroller);
		}, 2700);
		
		self.setTimeout(function(){
			$('.wrapper span.subtitle:nth-last-of-type(2)').addClass('show');
		}, 3200);
		
		self.setTimeout(function(){
			$('.wrapper span.subtitle:nth-last-of-type(2)').removeClass('show');
			tempScroller = self.setInterval(function(){
				$('.wrapper div.slide').scrollLeft(i);
				$('.wrapper div.slide figure:nth-child(2n) img').attr('src', 'images/kissing-man-woman.jpg');
				i = i+20;
			}, 10);
		}, 5200);
		
		self.setTimeout(function(){
			clearInterval(tempScroller);
		}, 5400);
		
		self.setTimeout(function(){
			$('.wrapper span.subtitle:nth-last-of-type(3)').addClass('show');
		}, 5900);
		
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
			if (count >= 3) {
				clearInterval(scroller);
				$('.wrapper div.slide').animate({
						scrollLeft: i+50+"px"
				}, 2000, 'easeOutCubic');
			}
		}, 7800);
		
		self.setTimeout(function(){
			if (count >= 3) {
				clearInterval(addSlide);
			}
		}, 8500);
		
		/*
		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.schoppen').addClass('show');
		}, 1100);
		self.setTimeout(function(){
			$('div.wrapper figure figcaption span.subtitle').addClass('show');
		}, 1300);
		self.setTimeout(function(){
			$('div.wrapper .logo').addClass('show');
		}, 1600);
		self.setTimeout(function(){
			$('div.wrapper figure img').addClass('show');
		}, 1200);
		/*
		
		self.setTimeout(function(){
			$('a.link').addClass('show');
		}, 2000);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 2200);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 2400);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 5500);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 5800);
		*/
		
		if (count < 3) {
			self.setTimeout(function(){
				animateAd(count);
				self.setTimeout(function(){
					$('a.link').removeClass('show');
					$('.wrapper span.subtitle:nth-last-of-type(3)').removeClass('show');
						tempScroller = self.setInterval(function(){
							$('.wrapper div.slide').scrollLeft(i);
							$('.wrapper div.slide figure img').attr('src', 'images/kissing-man-woman.jpg');
							i = i+20;
						}, 10);
				}, 100);
				self.setTimeout(function(){
					clearInterval(tempScroller);
				}, 300);

			}, 9000);
		} 
	}
	animateAd(count);
});
	
	

			
	

