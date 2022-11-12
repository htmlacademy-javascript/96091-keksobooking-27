import {generateOffers} from './data.js';
import {setActiveState, setInactiveState} from './form.js';
import {initMap, createPinMarkers, setCoordinateToForm, setOnMapLoad} from './map.js';

const OFFERS_COUNT = 10;

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

const offers = generateOffers(OFFERS_COUNT);

setInactiveState();

setOnMapLoad(() => {
  setActiveState();
  createPinMarkers(offers);
  setCoordinateToForm();
});

initMap(START_COORDINATE);

