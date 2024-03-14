const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.damaluli');
hiddenElements.forEach((el) => observer.observe(el))

Fancybox.bind("[data-fancybox]", {

  });

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        center:true,
    });
  });