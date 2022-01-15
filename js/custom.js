$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 180){
      $(".header").addClass("sticky-header");
    }else{
      $(".header").removeClass("sticky-header");
    }
  });
});
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});
jQuery(document).ready(function($) {
    $(".navbar-nav li.dropdown a").click(function(e){
        $(this).next('ul.dropdown-menu').css("display", "block");
        e.stopPropagation();
        });
});
$(document).ready(function() {
  $('.navbar-nav .nav-item.dropdown').append('<a href="" class="dropdown-toggle cutomedrop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-chevron-down"></i></a>');
});
// Animation Start
AOS.init({
        easing: 'ease-in-out-sine'
});
$('#banner-content').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }

});
$('#services').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed :500,
      //autoplayHoverPause:true,
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
$('#testimonials').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      dots:true,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
		  640:{
              items:2
          },
          768:{
              items:2
          },
          1000:{
              items:3
          }
      }

});
$('#recipients-slider').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          768:{
              items:2
          },
          1000:{
              items:3
          }
      }

});
$( ".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
 $( ".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');
 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});
 



function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
x.className += " responsive";
} else {
x.className = "topnav";
}
}


function myFunction() {
var x = document.getElementById("myTopmenu");
if (x.className === "header-menu") {
x.className += " active";
} else {
x.className = "header-menu";
}
}


$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 100
	    }, 100, 'swing', function () {
	        
	    });
	});
	
	
});




jQuery(function($) {

    $('.collapsible').each(function(index) {
   $(this).prepend('<h6 class="heading opener">&nbsp;</h6>');
   if ($(this).hasClass('active'))
   {
    $(this).children('.ftr-block-content').css('display', 'block');
   }
   else
   {
    $(this).children('.ftr-block-content').css('display', 'none');
   }   
  });
    $('.collapsible .heading').click(function() {
   
   var parent = $(this).parent();
   if (parent.hasClass('active'))
   {
    $(this).siblings('.ftr-block-content').stop(true).slideUp(500, "easeOutCubic");
    parent.removeClass('active');
   }
   else
   {
    $(this).siblings('.ftr-block-content').stop(true).slideDown(500, "easeOutCubic");
    parent.addClass('active');
   }
   
  });
 var ddOpenTimeout;
  var dMenuPosTimeout;
  var DD_DELAY_IN = 200;
  var DD_DELAY_OUT = 0;
  var DD_ANIMATION_IN = 0;
  var DD_ANIMATION_OUT = 0;
  $(".clickable-dropdown > .dropdown-toggle").click(function() {
   $(this).parent().addClass('open');
   $(this).parent().trigger('mouseenter');
  });
  

 }); 

