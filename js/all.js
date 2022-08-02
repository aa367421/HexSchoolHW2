$(document).ready(function() {
  
    $('.dropdown').click(function(event){
        event.preventDefault();
        $(this).siblings().addClass('active');
        $('.active').stop().slideToggle(300);
        $(this).siblings().removeClass('active');
    });

    $('.top').click(function(event){
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    //Swiper

    const swiper = new Swiper('.swiper', {

        direction: 'horizontal',
        loop: true,
        slidePerView: 'auto',
        speed: 500,

        autoplay: {
            delay: 5000,
          },

        pagination: {
            el: '.swiper-pagination',
          },
        
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
      });

    lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true
    })

});