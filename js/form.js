import {getOffers, sendOffer} from './api.js';
import {resetMap} from './map.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {resetPhoto} from './photo.js';

const adForm = document.querySelector('.ad-form');
const mapFilterForm = document.querySelector('.map__filters');
const roomNumber = document.querySelector('#room_number');
const capacityGuests = document.querySelector('#capacity');
const typeHouse = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const priceSlider = document.querySelector('.ad-form__slider');
const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');

const MAX_PRICE = 100000;

const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const typeToPrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const setInactiveForm = () => {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach(
    (field) => {
      field.disabled = true;
    }
  );
};

const setInactiveFilter = () => {
  mapFilterForm.classList.add('map__filters--disabled');
  mapFilterForm.querySelectorAll('select').forEach(
    (select) => {
      select.disabled = true;
    }
  );
  mapFilterForm.querySelector('fieldset').disabled = true;
};

const setInactiveState = () => {
  setInactiveForm();
  setInactiveFilter();
};

const setActiveForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach(
    (field) => {
      field.disabled = false;
    }
  );
};

const setActiveFilter = () => {
  mapFilterForm.classList.remove('map__filters--disabled');
  mapFilterForm.querySelectorAll('select').forEach(
    (select) => {
      select.disabled = false;
    }
  );
  mapFilterForm.querySelector('fieldset').disabled = false;
};

const validateCapacity = () => roomsToGuests[roomNumber.value].includes(capacityGuests.value);

const getCapacityErrorMessage = () => 'Количество гостей не соответствует вместимости комнаты!';

const getRoomNumberErrorMessage = () => 'Количество комнат не подходит!';

const pristine = new Pristine(
  adForm,
  {
    classTo: 'ad-form__element',
    errorClass: 'ad-form__element--invalid',
    errorTextParent: 'ad-form__element'
  },
  true
);

pristine.addValidator(
  capacityGuests,
  validateCapacity,
  getCapacityErrorMessage
);

pristine.addValidator(
  roomNumber,
  validateCapacity,
  getRoomNumberErrorMessage
);

const onCapacityChange = () => {
  pristine.validate(capacityGuests);
  pristine.validate(roomNumber);
};

const onRoomNumberChange = () => {
  pristine.validate(capacityGuests);
  pristine.validate(roomNumber);
};

noUiSlider.create(priceSlider, {
  range: {
    min: typeToPrice[typeHouse.value],
    max: MAX_PRICE
  },
  start: price.placeholder,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: (value) => parseFloat(value),
  },
});

priceSlider.noUiSlider.on('update', () => {
  price.value = priceSlider.noUiSlider.get();
});

const onTypeHouseChange = () => {
  price.placeholder = typeToPrice[typeHouse.value];
  price.min = typeToPrice[typeHouse.value];

  priceSlider.noUiSlider.updateOptions({
    range: {
      min: typeToPrice[typeHouse.value],
      max: MAX_PRICE
    },
    start: price.placeholder
  });
};

const onTimeInChange = () => {
  timeOut.value = timeIn.value;
};

const onTimeOutChange = () => {
  timeIn.value = timeOut.value;
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

capacityGuests.addEventListener('change', onCapacityChange);
roomNumber.addEventListener('change', onRoomNumberChange);
typeHouse.addEventListener('change', onTypeHouseChange);
timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

const resetForm = () => {
  adForm.reset();
  resetMap();
  resetPhoto();
};

const resetFilter = () => {
  mapFilterForm.reset();
  getOffers();
};

const onResetButtonClick = () => {
  resetForm();
  resetFilter();
};

const onResetButtonKeydown = () => {
  resetForm();
  resetFilter();
};

const initForm = () => {
  resetButton.addEventListener('click', onResetButtonClick);
  resetButton.addEventListener('keydown', onResetButtonKeydown);
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendOffer(
        new FormData(evt.target),
        () => {
          unblockSubmitButton();
          resetForm();
          resetFilter();
          showSuccessMessage();
        },
        () => {
          unblockSubmitButton();
          showErrorMessage();
        }
      );
    }
  });
};

export {setInactiveState, setActiveForm, setActiveFilter, initForm};
