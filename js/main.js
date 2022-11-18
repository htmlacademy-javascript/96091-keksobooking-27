import {setActiveState, setInactiveState, setFormSubmit, setResetButton} from './form.js';
import {initMap, setCoordinateToForm} from './map.js';
import {getOffers} from './api.js';

const OFFERS_COUNT = 10;
const ZOOM_LEVEL = 12;
const START_COORDINATE = {
  lat: 35.66023,
  lng: 139.73007
};

setInactiveState();

initMap(START_COORDINATE, ZOOM_LEVEL, () => {
  setActiveState();
  getOffers(OFFERS_COUNT);
  setCoordinateToForm(START_COORDINATE);
});

setFormSubmit(START_COORDINATE, ZOOM_LEVEL);
setResetButton(START_COORDINATE, ZOOM_LEVEL);
