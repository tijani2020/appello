import "./style.scss";


/* ====== sticky navbar on scroll start ======== */

const navigation = document.getElementById('navbar')
const siteName = document.getElementById('site-name')
const linksParent = document.getElementById('white-links')


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)  {
      
      siteName.style.color = "#5f4dee";
      navigation.style.backgroundColor = "#fff";
      navigation.style.boxShadow = "0 2px 2px -2px rgba(0,0,0,.2)";
      navigation.style.height = "60px";
      linksParent.id = 'nowhite-links';
      navicone.style.display = "none"

    }

    else  {    
      siteName.style.color = "white";
        navigation.style.height = "100px";
        navigation.style.backgroundColor = "transparent";
        navigation.style.boxShadow = "none";
        linksParent.id = 'white-links';
        navicone.style.display = "block"

    }
}

  
var swiper = new Swiper('.swiper1', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 1000,
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});


/* ====== for testimonials from swiper ======== */

var mySwiper = new Swiper('.swiper2', {
  // autoplay
  autoplay: {
    delay: 5000,
  },

   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // pagination
   pagination: {
     el: '.swiper-pagination2',
     clickable: true,
   },

});

/* ======= for testimonials from swiper ======= */




//------------ GSAP ------------ //

// or all tools are exported from the "all" file (excluding bonus plugins):
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);


// hero 

gsap.from(".header__img", { duration: 1, opacity: 0, x: 100});
gsap.from(".hero-item", { delay:1, duration: 1, opacity: 0, y: 50, stagger: 0.4 });


// services
gsap.from(".services__item", { 
  scrollTrigger: {
      trigger: ".services__item",
      toggleActions: "restart none none none"
  },
 duration: 1.5,
  opacity: 0,
  stagger: 0.2
});


// features

gsap.from(".features__details__img", { 
    scrollTrigger: {
        trigger: ".features__details__img",
        toggleActions: "restart none none none"
    },
   duration: 1.5,
   ease: "circ.out", 
   x: -300
  });


gsap.from(".FDC__item", { 
    scrollTrigger: {
        trigger: ".FDC__item",
        toggleActions: "restart none none none"
    },
    delay: 1, duration: 1, opacity: 0, y: 50, stagger: 0.4
  });



// pricing

gsap.from(".pricing__options__item", { 
  scrollTrigger: {
      trigger: ".pricing__options__item",
      toggleActions: "restart none none none"
  },
  duration: 1.5,
  opacity: 0,
  y: 200,
  stagger: 0.2
});

// CTA 
gsap.from(".CTA__img", { scrollTrigger: {
  trigger: ".CTA__img",
  toggleActions: "restart none none none"
},
duration: 1, opacity: 0, x: 100});

gsap.from(".CTA-item", {
  scrollTrigger: {
    trigger: ".CTA-item",
    toggleActions: "restart none none none"
},
delay: 1, duration: 1, opacity: 0, y: 50, stagger: 0.4 });