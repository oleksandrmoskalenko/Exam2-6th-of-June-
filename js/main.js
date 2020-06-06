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

let map,
  coords = { lat: 40.685104, lng: -73.899239 },
  marker,
  info,
  content = 'We`re here'
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: coords,
    zoom: 13,
  })

  marker = new google.maps.Marker({
    position: coords,
    map,
    icon: 'images/MapMarker.png'
  })
}