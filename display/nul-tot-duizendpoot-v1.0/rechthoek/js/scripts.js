var count = 0;
$(document).ready(function() {	
	function animateAd() {
	var load = false;
	var outputCanvas = document.getElementById('output'),
				output = outputCanvas.getContext('2d'),
				bufferCanvas = document.getElementById('buffer'),
				buffer = bufferCanvas.getContext('2d'),
				video = document.getElementById('video'),
				width = outputCanvas.width,
				height = outputCanvas.height,
				interval;
				
			function processFrame() {
				$('figure').css('display', 'block');
				buffer.drawImage(video, 0, 0);
				
				// this can be done without alphaData, except in Firefox which doesn't like it when image is bigger than the canvas
				var	image = buffer.getImageData(0, 0, width, height),
					imageData = image.data,
					alphaData = buffer.getImageData(0, height, width, height).data;
				
				for (var i = 3, len = imageData.length; i < len; i = i + 4) {
					imageData[i] = alphaData[i-1];
				}
				
				output.putImageData(image, 0, 0, 0, 0, width, height);
			}
			
			function randomColourVal() {
				return Math.floor( Math.random() * 256 );
			}
			
			video.addEventListener('play', function() {
				if (load == false) {
					video.pause();
				}
				clearInterval(interval);
				interval = setInterval(processFrame, 40);
			}, false);
			
			// Firefox doesn't support looping video, so we emulate it this way
			video.addEventListener('ended', function() {
				video.pause();
				if (count < 6) {
					animateAd();
				}
			}, false);
	
	/*$('figure svg.title-top').css({'left': '40%', 'opacity': 0}).animate({
		'left': '50%',
		'opacity':1.0,
	}, 1000, 'linear');
	*/
		$('figure .title').removeClass('show').removeClass('blowup').removeClass('showDate');
		self.setTimeout(function(){
			$('figure .title').addClass('show');
			load = true;
			video.play();
		}, 1000);
		self.setTimeout(function(){
			$('figure .title').addClass('blowup');
		}, 1500);
		self.setTimeout(function(){
			$('figure .title').addClass('showDate');
		}, 2000);
		self.setTimeout(function(){
			$('a.link').addClass('hover');
		}, 3000);
		self.setTimeout(function(){
			$('a.link').removeClass('hover');
		}, 3200);
		count++;
	}
	animateAd(count);	
});
	
	

			
	

