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
  coords = { lat: 40.662104, lng: -73.849239 },
  styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e6e6e6"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#e6e6e6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#d5d5d5"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ],
  marker,
  info,
  content = 'We`re here'
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: coords,
    zoom: 12.2,
    styles
  })

  marker = new google.maps.Marker({
    position: { lat: 40.675104, lng: -73.899239 },
    map,
    icon: 'images/MapMarker.png'
  })



  $(".modal-window__close").click(() => {
    $('.modal-window').addClass('hide')
    $('.modal-window__details').html('')
  })

  $(document).on('click', '.about-block__button--trade', function () {
    $('.modal-window').removeClass('hide')
    let tmp = $(document).find('.about-block__text--trade').html()
    $(document).find('.modal-window__details').append(`<h2 class="modal-window__title">Trade centre</h2>`, tmp)
  })

  $(document).on('click', '.about-block__button--commerce', function () {
    $('.modal-window').removeClass('hide')
    let tmp = $(document).find('.about-block__text--commerce').html()
    $(document).find('.modal-window__details').append(`<h2 class="modal-window__title">Commerce centre</h2>`, tmp)
  })

  $(document).on('click', '.projects__button', function () {
    $('.modal-window').removeClass('hide')
    $(document).find('.modal-window__details').append(`<h1 class="modal-window__title">Gallery</h1>`, `<div class="projects-block__img--big">`)
  })
}


