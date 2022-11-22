import {createPinMarkers} from './map.js';
import {debounce} from './util.js';

const OFFERS_COUNT = 10;

const Price = {
  MIDDLE: 10000,
  HIGH: 50000
};

const mapFiltersForm = document.querySelector('.map__filters');
const housingTypeElement = mapFiltersForm.querySelector('#housing-type');
const housingPriceElement = mapFiltersForm.querySelector('#housing-price');
const housingRoomsElement = mapFiltersForm.querySelector('#housing-rooms');
const housingGuestsElement = mapFiltersForm.querySelector('#housing-guests');
const housingFeatures = mapFiltersForm.querySelectorAll('.map__checkbox');

const filterByType = (offer, type) => type === 'any' || offer.offer.type === type;

const filterByRooms = (offer, rooms) => rooms === 'any' || offer.offer.rooms === Number(rooms);

const filterByGuests = (offer, guests) => guests === 'any' || offer.offer.guests === Number(guests);

const filterByPrice = (offer, price) => {
  switch (price) {
    case 'any':
      return true;
    case 'low':
      return offer.offer.price < Price.MIDDLE;
    case 'middle':
      return (offer.offer.price < Price.HIGH && offer.offer.price > Price.MIDDLE);
    case 'high':
      return offer.offer.price > Price.HIGH;
  }
};

const filterByFeatures = (offer, features) => {
  if (!features.length) {
    return true;
  }
  if (!offer.offer.features) {
    return false;
  }
  return features.every((feature) => offer.offer.features.includes(feature));
};

const onChangeFilters = (allOffers) => () => {
  const selectedType = housingTypeElement.value;
  const selectedPrice = housingPriceElement.value;
  const selectedRooms = housingRoomsElement.value;
  const selectedGuests = housingGuestsElement.value;

  const selectedFeatures = [];
  housingFeatures.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedFeatures.push(checkbox.value);
    }
  });

  const filteredOffers = [];
  for (const offer of allOffers) {
    if (filteredOffers.length >= OFFERS_COUNT) {
      break;
    }
    if (
      filterByType(offer, selectedType) &&
        filterByPrice(offer, selectedPrice) &&
        filterByRooms(offer, selectedRooms) &&
        filterByGuests(offer, selectedGuests) &&
        filterByFeatures(offer, selectedFeatures)
    ) {
      filteredOffers.push(offer);
    }
  }
  createPinMarkers(filteredOffers);
};

const setDefaultOffers = (allOffers) => {
  mapFiltersForm.addEventListener('change', debounce(onChangeFilters(allOffers)));
  createPinMarkers(allOffers.slice(0, OFFERS_COUNT));
};

export {setDefaultOffers};
