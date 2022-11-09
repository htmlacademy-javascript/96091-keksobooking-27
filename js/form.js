const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const roomNumber = document.querySelector('#room_number');
const capacityGuests = document.querySelector('#capacity');

const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
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

capacityGuests.addEventListener('change', onCapacityChange);
roomNumber.addEventListener('change', onRoomNumberChange);

adForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

export {setActiveState, setInactiveState};
