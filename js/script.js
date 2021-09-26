function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();

$(document).ready(function(){

	$('.gear-body-slider').slick({
		slidesToShow:2,
		arrows:false,
		dots:true
	});

	$('.case-slider').slick({

	})
	$('.fitback-slider').slick({
		slidesToShow:2,
		appendArrows: $('.fitback-slider__arrows'),
		dots:true,
		responsive:[{
			breakpoint:1200,
			settings:{
				dots:false,
			}
		}]
	});

	$('.trust-slider').slick({
		slidesToShow:5,
		arrows:false,
		responsive:[{
			breakpoint:1200,
			settings:{
				slidesToShow:2,
			}
		}]
	});


	$('.questions-body__p').hide();
	var accordion = 0;
	$('.quetions-body__accordion').click(function(){
		if(!$(this).hasClass('active')){
			accordion = 0;
			$('.questions-body__p').slideUp(500);
			$('.quetions-body__accordion').removeClass('active');
		}
		if(accordion == 0){
			$(this).children(".questions-body__p").slideDown(500);
			accordion = 1;
			$(this).addClass('active');
			
		}else{
			$(this).children(".questions-body__p").slideUp(500);
			accordion = 0;
			$(this).removeClass('active');
		}

		
	})

	$('.burger').click(function(){
		$('.menu-burger').addClass('active');
		$('body').addClass('lock');
	})
	$('.menu-burger__close').click(function(){
		$('.menu-burger').removeClass('active');
		$('body').removeClass('lock');
	})
	$('.header-menu__list>li>a').click(function(){
		$('.menu-burger').removeClass('active');
		$('body').removeClass('lock');
	})


	$('.modal-form__close').click(function(){
		$('.modal-form').removeClass('active');
	})
	$('.header-menu__phone_btn').click(function(e){
		e.preventDefault();
		$('.modal-form').addClass('active');
	})
	$('.header-body__btn:not(.fitback_btn)').click(function(e){
		e.preventDefault();
		$('.modal-form').addClass('active');
	})
	$('.pricce-body__btn').click(function(e){
		e.preventDefault();
		$('.modal-form').addClass('active');
	})
	$('.phone-icon-fix').click(function(e){
		e.preventDefault();
		$('.modal-form').addClass('active');
	})
	$('.modal-button').click(function(e){
		e.preventDefault();
		$('.modal-form').addClass('active');
	})



	var w = $(window).width();

	if(w<1200){
		$('.footer-text').appendTo($('.footer-3'));
		$('.footer-logo').prependTo($('.footer-2'));
	}else{
		$('.footer-text').prependTo($('.footer-2'));
		$('.footer-logo').prependTo($('.footer-1'));
	}

	if(w<1200){
		$('.header-menu__list').appendTo($('.menu-burger'));
	}else{
		$('.header-menu__list').insertBefore($('.contact-header'));
	}



	if(w<1200){
		$('.circle').appendTo($('.list_column'));
	}else{
		$('.circle').prependTo($('.circle_column'));
	}



	


});
$(window).resize(function(){
	var w = $(window).width();

	if(w<1200){
		$('.header-menu__list').appendTo($('.menu-burger'));
	}else{
		$('.header-menu__list').insertBefore($('.contact-header'));
	}

	
	if(w<1200){
		$('.footer-text').appendTo($('.footer-3'));
		$('.footer-logo').prependTo($('.footer-2'));
	}else{
		$('.footer-text').prependTo($('.footer-2'));
		$('.footer-logo').prependTo($('.footer-1'));
	}

	if(w<1200){
		$('.circle').appendTo($('.list_column'));
	}else{
		$('.circle').prependTo($('.circle_column'));
	}
})
