import {sendOffer} from './api.js';
import {resetMap} from './map.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const roomNumber = document.querySelector('#room_number');
const capacityGuests = document.querySelector('#capacity');
const typeHouse = document.querySelector('#type');
const price = document.querySelector('#price');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const priceSlider = document.querySelector('.ad-form__slider');
const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');

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

function setInactiveState() {
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach(
    (field) => {
      field.disabled = true;
    }
  );

  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('select').forEach(
    (select) => {
      select.disabled = true;
    }
  );
  mapFilters.querySelector('fieldset').disabled = true;
}

function setActiveState() {
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach(
    (field) => {
      field.disabled = false;
    }
  );

  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('select').forEach(
    (select) => {
      select.disabled = false;
    }
  );
  mapFilters.querySelector('fieldset').disabled = false;
}

function validateCapacity() {
  return roomsToGuests[roomNumber.value].includes(capacityGuests.value);
}

function getCapacityErrorMessage() {
  return 'Количество гостей не соответствует вместимости комнаты!';
}

function getRoomNumberErrorMessage() {
  return 'Количество комнат не подходит!';
}

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

function onCapacityChange() {
  pristine.validate(capacityGuests);
  pristine.validate(roomNumber);
}

function onRoomNumberChange() {
  pristine.validate(capacityGuests);
  pristine.validate(roomNumber);
}

noUiSlider.create(priceSlider, {
  range: {
    min: typeToPrice[typeHouse.value],
    max: 100000
  },
  start: price.placeholder,
  step: 1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

priceSlider.noUiSlider.on('update', () => {
  price.value = priceSlider.noUiSlider.get();
});

function onTypeHouseChange() {
  price.placeholder = typeToPrice[typeHouse.value];
  price.min = typeToPrice[typeHouse.value];

  priceSlider.noUiSlider.updateOptions({
    range: {
      min: typeToPrice[typeHouse.value],
      max: 100000
    },
    start: price.placeholder
  });
}

function onTimeInChange() {
  timeOut.value = timeIn.value;
}

function onTimeOutChange() {
  timeIn.value = timeOut.value;
}

function blockSubmitButton() {
  submitButton.disabled = true;
  submitButton.textContent = 'Публикуется...';
}

function unblockSubmitButton() {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
}

capacityGuests.addEventListener('change', onCapacityChange);
roomNumber.addEventListener('change', onRoomNumberChange);
typeHouse.addEventListener('change', onTypeHouseChange);
timeIn.addEventListener('change', onTimeInChange);
timeOut.addEventListener('change', onTimeOutChange);

function resetForm() {
  adForm.reset();
  resetMap();
}

function onResetButtonClick() {
  resetForm();
}

function onResetButtonKeydown() {
  resetForm();
}

function initForm() {
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
          adForm.reset();
          resetMap();
          showSuccessMessage();
        },
        () => {
          unblockSubmitButton();
          showErrorMessage();
        }
      );
    }
  });
}

export {setActiveState, setInactiveState, initForm};
