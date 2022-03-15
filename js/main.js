
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 5000,
    freeMode: true,
    autoplay: {
      disableOnInteraction: false,
      delay: 0,
    },
    breakpoints: {
      900: {
        slidesPerView: 2
      }
    },
    slidesPerView: 1,
  });
  document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll(".scroll-trigger");
    const img = document.querySelectorAll('.img');
    const callback = function(entries, options) {
      entries.forEach((entry)=> {
        if(entry.isIntersecting) {
          entry.target.classList.add('active')
          TweenMax.from(img,1, {
            ease: "back.out(1.7)",
            scale: 0.8
          });
          observer.unobserve(entry.target)
        }
      });
    };
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [1]
    };
    const observer = new IntersectionObserver(callback, options);
    triggers.forEach(trigger => observer.observe(trigger))
  });






