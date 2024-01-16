/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */


		// fixedHeader on scroll
	  // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
  
          var scrollto = target.offset().top;
  
          $('html, body').animate({
            scrollTop: scrollto
          }, 1500, 'easeInOutExpo');
  
          if ($(this).parents('.nav-menu, .mobile-nav').length) {
            $('.nav-menu .active, .mobile-nav .active').removeClass('active');
            $(this).closest('li').addClass('active');
          }
  
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
          return false;
        }
      }
    });
  
    // Mobile Navigation
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
  
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').toggle();
      });
  
      $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
        e.preventDefault();
        $(this).next().slideToggle(300);
        $(this).parent().toggleClass('active');
      });
  
      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
	
  // stikcy js
  $("#header").sticky({
    topSpacing: 0
});

  // card-carousel
  $('.card-carousel-index').slick({
    infinite: true,
    autoplay: true,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"fas fa-angle-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"fas fa-angle-right\"  aria-hidden='true'></i></button>",
    dots: true,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          dots: false
        }
      }
    ]
  });

   // partner-carousel
   $('.partner-carousel').slick({
    infinite: true,
    autoplay: true,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"icon-double-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"icon-double-right\"  aria-hidden='true'></i></button>",
    dots: false,
    dotsClass: 'section-dots',
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
    },
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

    //Tweenmax js
    $('.banner-section, .app-download').mousemove(function (e) {
      var wx = $(window).width();
      var wy = $(window).height();
      var x = e.pageX - this.offsetLeft;
      var y = e.pageY - this.offsetTop;
      var newx = x - wx / 2;
      var newy = y - wy / 2;
      $('.main-content, .img-area').each(function () {
          var speed = $(this).attr('data-speed');
          if ($(this).attr('data-revert')) speed *= -.4;
          TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
      });
  });


  

  $('.why-choose-us-area').mousemove(function(e){var wx=$(window).width();var wy=$(window).height();var x=e.pageX-this.offsetLeft;var y=e.pageY-this.offsetTop;var newx=x-wx/2;var newy=y-wy/2;$('.choose-shape, .choose-shape-2').each(function(){var speed=$(this).attr('data-speed');if($(this).attr('data-revert'))speed*=-.4;TweenMax.to($(this),1,{x:(1-newx*speed),y:(1-newy*speed)});});});

  var carousel = function() {
		$('.carousel-testimony').owlCarousel({
			autoplay: true,
			autoHeight: true,
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: true,
			dots: false,
			navText: ['<span class="fa fa-chevron-left">', '<span class="fa fa-chevron-right">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 1
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

  // :: CounterUp Active Code
 // Facts counter
 $('[data-toggle="counter-up"]').counterUp({
  delay: 10,
  time: 2000
});
//roadmap carosusel active
$(".roadmap-carousel").owlCarousel({
  loop:true,
  nav:false,
  margin:30,
  autoplay:true,
  autoplayspeed:1000,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:2
       },
       1000:{
           items:3
       }
   }
});
// Range Slider
if (document.querySelector('#loan-slide') !== null) {
  $("#loan-slide").slider({
    orientation: "horizontal",
    range: "min",
    min: 1000,
    max: 80000,
    value: 45000,
    slide: function (event, ui) {
      $("#loan-amount").val(" $" + ui.value);
    }
  });
  $("#loan-amount").val(" $" + $("#loan-slide").slider("value"));
}
 // card-carousel
 $(".card-carousel").not('.slick-initialized').slick({
  infinite: true,
    autoplay: true,
    focusOnSelect: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class=\"fas fa-angle-left\"  aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class=\"fas fa-angle-right\"  aria-hidden='true'></i></button>",
  dots: true,
  dotsClass: 'section-dots',
  customPaging: function (slider, i) {
    var slideNumber = (i + 1),
      totalSlides = slider.slideCount;
    return '<a class="dot" role="button" title="' + slideNumber + ' of ' + totalSlides + '"><span class="string">' + slideNumber + '/' + totalSlides + '</span></a>';
  },
  responsive: [
    {
      breakpoint: 992,
      settings: {
        dots: false
      }
    }
  ]
});

  $('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});

  $(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});
  $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
		$('.loader-container').addClass('done');
		$('.progress-br').addClass('done');	 
    });