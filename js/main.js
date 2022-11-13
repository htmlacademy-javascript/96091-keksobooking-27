import {generateOffers} from './data.js';
import {setActiveState, setInactiveState} from './form.js';
import {initMap, createPinMarkers, setCoordinateToForm} from './map.js';

const OFFERS_COUNT = 10;

const ZOOM_LEVEL = 12;

const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

const offers = generateOffers(OFFERS_COUNT);

setInactiveState();

initMap(START_COORDINATE, ZOOM_LEVEL, () => {
  setActiveState();
  createPinMarkers(offers);
  setCoordinateToForm();
});

