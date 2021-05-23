// JavaScript Document

$(document).ready(function(){
	
//	Init ScrollMagic	-	Telling browser to use scrollbar and trigger animation
	var controller = new ScrollMagic.Controller();

//	Pin each image frame loop
	$('.frame').each(function(){
		var pinScene = new ScrollMagic.Scene({duration: '100%', triggerElement: this, triggerHook: '0.02'})
			.setPin(this)
			.addTo(controller);
	});

//	Frame 0
	TweenMax.to('#f0img2', 4, {yPercent:-2, scaleX: '1.05', ease: Sine.easeInOut, repeat: -1, yoyo: true})

//	Frame 1
	var frame1Scene = new ScrollMagic.Scene({duration: '50%', triggerElement: '#f1', triggerHook: '0'})
		.setTween(TweenMax.from('#f1img3', 1, {bezier:{type:'soft', autoRotate:true, values:[{xPercent:60, yPercent:-30}, {xPercent:75, yPercent:0}]}, ease: Power2.easeOut, scale: '.1', rotation: '45'}))
		.addTo(controller);

//	Frame 2
	var frame2Scene = new ScrollMagic.Scene({duration: '50%', triggerElement: '#f2', triggerHook: '0'})
		.setTween('#f2img2', 1, {xPercent: -40, ease: Power2.easeInOut})
		.addTo(controller);

//	Frame 3
	var frame3Timeline = new TimelineMax()
		.add(TweenMax.from('#f3img3', 1, {opacity: 0, ease: Power2.easeIn}))
		.add(TweenMax.from('#f3img2', 1, {opacity: 0, ease: Power2.easeIn}));
	var frame3Scene = new ScrollMagic.Scene({duration: '50%', triggerElement: '#f3', triggerHook: '0'})
		.setTween(frame3Timeline)
		.addTo(controller);

//	Frame 4
	var frame4Scene = new ScrollMagic.Scene({duration: '50%', triggerElement: '#f4', triggerHook: '0'})
		.setTween(TweenMax.from('#f4img2', 1, {xPercent: -60, ease: Power2.easeInOut}))
		.addTo(controller);

//	Frame 5
	function pathPrepare ($el) {var lineLength = $el[0].getTotalLength(); $el.css('stroke-dasharray', lineLength); $el.css('stroke-dashoffset', lineLength);}
	var $sig1 = $('path#svgHay');
	var $sig2 = $('path#svgMax');
	pathPrepare($sig1);	// prepare SVG
	pathPrepare($sig2);	// prepare SVG
	var frame5Timeline = new TimelineMax()
		.add(TweenMax.to($sig1, 1, {strokeDashoffset: 0, ease:Linear.easeNone}))
		.add(TweenMax.to($sig2, 1, {strokeDashoffset: 0, ease:Linear.easeNone}), 0);
	var frame5Scene = new ScrollMagic.Scene({duration: '30%', triggerElement: '#f5', triggerHook: '0'})
		.setTween(frame5Timeline)
		.addTo(controller);

});
