console.log("Hello World from main.js!");

//Depending on day, change hero times open.


//nav bar

$('.burg-button').on('click', function() {
	$('.hamburger-menu').toggleClass('active');
	
	if($('.hamburger-menu').hasClass('active')) {
		TweenMax.to('.burg-top', 0.4, {rotation: "45deg", top: '5px'});
		TweenMax.to('.burg-mid', 0.3, {width: 0});
		TweenMax.to('.burg-bot', 0.4, {rotation: "-45deg", top: '-5px'});
		TweenMax.staggerFromTo('.hamburger__ul a li', 0.2, {top: "-10px", opacity: 0}, {top: 0, opacity: 1}, 0.1);
	} else {
		TweenMax.to('.burg-top', 0.4, {rotation: "0deg", top: 0});
		TweenMax.to('.burg-mid', 0.3, {width: '100%'});
		TweenMax.to('.burg-bot', 0.4, {rotation: "0deg", top: 0});
	}
})

$(".location-boxes").waypoint(function (direction) {
	if (direction == 'down'){
		$('.nav-bar').addClass('active');
	} else if (direction == 'up') {
		$('.nav-bar').removeClass('active');
	}
}, {
	offset: '12%'
})

$(".content").waypoint(function (direction) {
	if (direction == 'down'){
		$('.nav-bar').addClass('active');
	} else if (direction == 'up') {
		$('.nav-bar').removeClass('active');
	}
}, {
	offset: '12%'
})



	// $('.beginning-paragraph').waypoint(function (){
	//  	$('.beginning-paragraph').addClass('wp-beginning');
	//  }, { offset:'50%'} );

	// $('.times-table').waypoint(function (){
	//  	$('.times-table').addClass('wp-time');
	//  }, { offset:'40%'} );

	// $('.social-media').waypoint(function (){
	//  	$('.social-media').addClass('wp-social');
	//  }, { offset:'60%'} );

	// $('.right-img').waypoint(function (){
	//  	$('.right-img').addClass('wp-right-img');
	//  }, { offset:'60%'} );





