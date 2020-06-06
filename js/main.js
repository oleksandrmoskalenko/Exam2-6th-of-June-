'use script'

$(document).ready(function () {
  // $('.menu__text').mouseover(function () {
  //   $(this).parent().find('.circle').css('background: #fff')
  // })

  $('.slider').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    dots: true,
  })
})