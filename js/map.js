import {createPopup} from './popup.js';

const defaultCoordinate = {
  lat: 35.66023,
  lng: 139.73007
};
const ZOOM_LEVEL = 12;
const FUNCTION_DIGITS = 5;
const ICON_SIZES = [40, 40];
const ICON_TOUCHPOINTS = [20, 40];
const MAIN_ICON_SIZES = [52, 52];
const MAIN_ICON_TOUCHPOINTS = [26, 52];

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: MAIN_ICON_SIZES,
  iconAnchor: MAIN_ICON_TOUCHPOINTS,
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: ICON_SIZES,
  iconAnchor: ICON_TOUCHPOINTS,
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

const resetMap = () => {
  map.setView(defaultCoordinate, ZOOM_LEVEL);
  mainPinMarker.setLatLng(defaultCoordinate);
  map.closePopup();
};

const setDefaultCoordinateToForm = () => {
  const addressFormItem = document.querySelector('#address');
  addressFormItem.value = `${defaultCoordinate.lat}, ${defaultCoordinate.lng}`;
};


const initMap = (onMapLoad) => {
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
};

const createPinMarkers = (offers) => {
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
};

export {initMap, createPinMarkers, setDefaultCoordinateToForm, resetMap};
