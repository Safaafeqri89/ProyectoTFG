const ACTIVATION_BUTTON = document.querySelector('.cta-btn')
const FORM_SECTION = document.querySelector('.cta-form-section')
const OVERLAY = document.querySelector('.cta-blur-overlay')
const RESET_AND_CLOSE_BTN = document.querySelector('.cta-reset')
const ACTIVATION_BUTTON_CTA_SIDE_MENU = document.querySelector('.side--menu-cta-button')
document.addEventListener('DOMContentLoaded', function() {
  OVERLAY.classList.add('hidden')

ACTIVATION_BUTTON.addEventListener('click', function() {
  FORM_SECTION.classList.remove('hidden')
  OVERLAY.classList.remove('hidden')
})

OVERLAY.addEventListener('click', function() {
  FORM_SECTION.classList.add('hidden')
  OVERLAY.classList.add('hidden')
})

RESET_AND_CLOSE_BTN.addEventListener('click', function() {
  FORM_SECTION.classList.add('hidden')
  OVERLAY.classList.add('hidden')
})

ACTIVATION_BUTTON_CTA_SIDE_MENU.addEventListener('click', function() {
  SIDE_MENU.classList.remove('show-menu')
  SIDE_MENU.classList.add('hide-menu')
  SIDE_MENU_OVERLAY.classList.add('hidden')
  SIDE_MENU.style.display = 'none'

  FORM_SECTION.classList.remove('hidden')
  OVERLAY.classList.remove('hidden')
})















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