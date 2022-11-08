const adForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

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

export {setActiveState, setInactiveState};
