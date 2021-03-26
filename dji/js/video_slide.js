$(document).ready(function() {
  var swiper = new Swiper('.video_slider', {
        direction: 'horizontal',
        width:null,
        slidesPerView:3,
        spaceBetween: 30,
        autoHeight:false,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      swiper.on('slideChange', function () {
        // console.log(this.activeIndex);
      });
});
