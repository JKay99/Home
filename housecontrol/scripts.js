$(".BigBox").draggable({
	containment: ".walls",
	obstacle: ".placed", 
	preventCollision: true,

	// animate on start of drag (using jQuery UI)
  start: function(e, ui) {
		$(this).removeClass('placed'),
		$('.placed').addClass('boundary');
	},

	// animate on end of drag (using jQuery UI)
	stop: function(e, ui) {
			$(this).addClass('placed'),
			$('.placed').removeClass('boundary');
	}
});

$(".BigBox2").draggable({
	containment: ".walls",
	obstacle: ".placed", 
	preventCollision: true,

	// animate on start of drag (using jQuery UI)
  start: function(e, ui) {
		$(this).removeClass('placed'),
		$('.placed').addClass('boundary');
	},

	// animate on end of drag (using jQuery UI)
	stop: function(e, ui) {
			$(this).addClass('placed'),
			$('.placed').removeClass('boundary');
	}
});

$(".key1").click(function(){
	$(".BigBox").toggleClass("turn");
});

$(".key2").click(function(){
	$(".BigBox").toggleClass("rturn");
});

$(".key3").click(function(){
	$(".BigBox").toggleClass("shrink");
});

$(".key4").click(function(){
	$(".BigBox").toggleClass("grow");
});

$(".key1").click(function(){
	$(".BigBox2").toggleClass("turn");
});

$(".key2").click(function(){
	$(".BigBox2").toggleClass("rturn");
});

$(".key3").click(function(){
	$(".BigBox2").toggleClass("shrink");
});

$(".key4").click(function(){
	$(".BigBox2").toggleClass("grow");
});