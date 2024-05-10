document.addEventListener('DOMContentLoaded', function() {
  OVERLAY.classList.remove('hidden')
let slider_index = 0
const SLIDES = document.querySelectorAll('.slider-img')
const TOTAL_SLIDES = SLIDES.length
const NEXT_BUTTON = document.querySelector('.slider-btn--right')
const PREV_BUTTON = document.querySelector('.slider-btn--left')
const SLIDE_INTERVAL = 2500

/* ------------------------------------------------------------------------------------------------------- */

function setupSlides() {
  SLIDES.forEach((slide, index) => {
    slide.style.transition = 'transform 0.5s ease-in-out'
    slide.style.transform = `translateX(-${index * 100}%)`
  })
}

function showSlide(index) {
  const OFFSET = index * 100
  SLIDES.forEach((slide) => {
    slide.style.transform = `translateX(-${OFFSET}%)`
  })
}

function nextSlide() {
  slider_index = (slider_index + 1) % TOTAL_SLIDES
  showSlide(slider_index)
}

function prevSlide() {
  slider_index = (slider_index - 1 + TOTAL_SLIDES) % TOTAL_SLIDES
  showSlide(slider_index)
}

function autoChangeSlides() {
  nextSlide()
  setTimeout(autoChangeSlides, SLIDE_INTERVAL)
}

/* ------------------------------------------------------------------------------------------------------- */

NEXT_BUTTON.addEventListener('click', nextSlide)
PREV_BUTTON.addEventListener('click', prevSlide)

document.addEventListener('keydown', function(event) {
  if (document.activeElement === document.body) {
    return
  }
  if (document.activeElement !== NEXT_BUTTON && document.activeElement !== PREV_BUTTON) {
    return
  }

  if (event.key === 'ArrowRight') {
    nextSlide()
  } else if (event.key === 'ArrowLeft') {
    prevSlide()
  }
})

setupSlides()
showSlide(slider_index)
autoChangeSlides()






/***************************ACCORDION************************** */


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");

    const accordionItemBody = accordionItemHeader.nextElementSibling;

    if(accordionItemHeader.classList.contains("active")) 
        {
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
    else 
        {
          accordionItemBody.style.maxHeight = 0;
        }
    
    });
});




/************************SCROLL TOP CON INTERVAL******** */

document.addEventListener("scroll", scrollFunction);
document.getElementById("scrollToTopBtn").addEventListener("click", scrollToTop);

function scrollFunction() {
  var button = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  // Obtenemos la posición actual de desplazamiento
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    // Creamos una animación de desplazamiento hacia arriba
    var scrollStep = -currentScroll / 45;
    var scrollInterval = setInterval(function() {
      if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
        clearInterval(scrollInterval); // Detenemos la animación cuando llegamos al principio
      } else {
        window.scrollBy(0, scrollStep); // Desplazamos la ventana hacia arriba
      }
    },45 ); 
  }
}



})









