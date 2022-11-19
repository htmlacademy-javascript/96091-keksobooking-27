import {setInactiveState, setActiveForm, initForm} from './form.js';
import {initMap, setDefaultCoordinateToForm} from './map.js';
import {getOffers} from './api.js';

const OFFERS_COUNT = 10;

setInactiveState();

initMap(() => {
  getOffers(OFFERS_COUNT);
  setActiveForm();
  setDefaultCoordinateToForm();
});

initForm();
