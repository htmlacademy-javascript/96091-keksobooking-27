import {createPopup} from './popup.js';

const defaultCoordinate = {
  lat: 35.66023,
  lng: 139.73007
};
const ZOOM_LEVEL = 12;
const FUNCTION_DIGITS = 5;

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

function resetMap() {
  map.setView(defaultCoordinate, ZOOM_LEVEL);
  mainPinMarker.setLatLng(defaultCoordinate);
  map.closePopup();
}

function setDefaultCoordinateToForm() {
  const addressFormItem = document.querySelector('#address');
  addressFormItem.value = `${defaultCoordinate.lat}, ${defaultCoordinate.lng}`;
}


function initMap(onMapLoad) {
  map.on('load', onMapLoad).setView(defaultCoordinate, ZOOM_LEVEL);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
  mainPinMarker.setLatLng(defaultCoordinate);
  mainPinMarker.addTo(map);
  mainPinMarker.on('move', (evt) => {
    const coordinates = evt.target.getLatLng();
    const lat = coordinates.lat.toFixed(FUNCTION_DIGITS);
    const lng = coordinates.lng.toFixed(FUNCTION_DIGITS);
    const addressFormItem = document.querySelector('#address');
    addressFormItem.value = `${lat}, ${lng}`;
  });
}

function createPinMarkers(offers) {
  markerGroup.clearLayers();
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

export {initMap, createPinMarkers, setDefaultCoordinateToForm, resetMap};
