import {createPopup} from './popup.js';

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 0,
    lng: 0,
  },
  {
    draggable: true,
    icon: mainPinIcon
  }
);

function initMap(coordinate, zoom, cb) {
  map.setView(coordinate, zoom);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  mainPinMarker.setLatLng(coordinate);
  mainPinMarker.addTo(map);
  cb();
}

function createPinMarkers(offers) {
  offers.forEach((offer) => {
    const marker = L.marker(
      {
        lat: offer.location.lat,
        lng: offer.location.lng
      },
      {
        icon: pinIcon
      }
    );
    marker.addTo(markerGroup).bindPopup(createPopup(offer));
  });
}

function setCoordinateToForm(digits = 5) {
  mainPinMarker.on('move', (evt) => {
    const coord = evt.target.getLatLng();
    const lat = (coord.lat).toFixed(digits);
    const lng = (coord.lng).toFixed(digits);
    const addressFormItem = document.querySelector('#address');
    addressFormItem.value = `${lat}, ${lng}`;
  });
}

export {initMap, createPinMarkers, setCoordinateToForm};
