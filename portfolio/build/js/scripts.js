var navMain = document.querySelector('.top-bar');
var navToggle = document.querySelector('.top-bar__toggle');

navMain.classList.remove('top-bar--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('top-bar--closed')) {
    navMain.classList.remove('top-bar--closed');
    navMain.classList.add('top-bar--opened');
  } else {
    navMain.classList.add('top-bar--closed');
    navMain.classList.remove('top-bar--opened');
  }
});

var popUp = document.querySelector('.popup');
var popUpButton = document.querySelectorAll('.catalog__basket');
var popUpAddButton = document.querySelector('.popup-form__btn');

for (var i = 0; i < popUpButton.length; i++) {
  popUpButton[i].addEventListener('click', function(e) {
  e.preventDefault();
  if (popUp.classList.contains('popup--closed')) {
    popUp.classList.remove('popup--closed');
  } else {
  }
  })
};

popUpAddButton.addEventListener('click', function() {
  popUp.classList.add('popup--closed');
});

(function() {
  var center = [59.938631, 30.323055];

  google.maps.event.addDomListener(window, "load", function() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: new google.maps.LatLng(center[0], center[1]),
      scrollwheel: false,
      disableDoubleClickZoom: true
    });

    var image = '../img/icon-map-pin.svg';
    var beachMarker = new google.maps.Marker({
      position: {lat: 59.938631, lng: 30.323055},
      map: map,
      icon: image
    });
  });
})();

var contactsMap = document.querySelector('.contacts__map');

contactsMap.classList.add('contacts__map--nojs');
