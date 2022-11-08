import {generateOffers} from './data.js';
import {renderOffers} from './popup.js';
import {setActiveState, setInactiveState} from './form.js';

const OFFERS_COUNT = 10;

const offers = generateOffers(OFFERS_COUNT);

renderOffers(offers);

setActiveState();
setInactiveState();

