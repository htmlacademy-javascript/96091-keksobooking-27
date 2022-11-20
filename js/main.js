import {setInactiveState, setActiveForm, initForm} from './form.js';
import {initMap, setDefaultCoordinateToForm} from './map.js';
import {getOffers} from './api.js';

setInactiveState();

initMap(() => {
  getOffers();
  setActiveForm();
  setDefaultCoordinateToForm();
});

initForm();
