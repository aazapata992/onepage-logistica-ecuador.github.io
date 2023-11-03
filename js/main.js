var swiper = new Swiper(".swiper-banner-home", {
    spaceBetween: 0,
    effect: "fade",
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },    
});

var swiper = new Swiper(".swiper-technology", {
    spaceBetween: 30,    
    slidesPerView: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pagination-technology",
      clickable: true,      
    },
    navigation: {
      nextEl: ".next-technology",
      prevEl: ".prev-technology",
    },    
});

var swiper = new Swiper(".swiper-services", {
    spaceBetween: 30,    
    slidesPerView: 1,
    autoHeight: true,
    pagination: {
      el: ".pagination-services",
      clickable: true,      
    },
    navigation: {
      nextEl: ".next-white",
      prevEl: ".prev-white",
    },    
});



var swiper = new Swiper(".swiper-customers", {
    spaceBetween: 30,    
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".pagination-customers",
      clickable: true,      
    },
    navigation: {
      nextEl: ".next-customers",
      prevEl: ".prev-customers",
    },
    breakpoints: {
    	640: {
        	slidesPerView: 1,
    		spaceBetween: 20,
      	},
      	768: {
        	slidesPerView: 1,
        	spaceBetween: 20,
      	},
      	1024: {
        	slidesPerView: 1,
        	spaceBetween: 30,
    	},
    },
});



// Menú hamburguesa
if( jQuery('#nav-toogle').length > 0 ) {
    jQuery('#nav-toogle').click(function() {        
        jQuery(this).toggleClass('open');        
        jQuery('body').toggleClass('open-nav-xs');
    });
};

jQuery(".anchor").click(function( e ) {
    e.preventDefault();
    e.stopPropagation();
    $target = $(this);
    jQuery('html, body').animate({
        scrollTop: jQuery($target.attr('href')).offset().top
    }, 1000);
});


if( jQuery('header nav li a').length > 0 ) {
    jQuery('header nav li a').click(function() {  
        jQuery('body').removeClass('open-nav-xs');      
        jQuery('#nav-toogle').removeClass('open');
    });
};

AOS.init();