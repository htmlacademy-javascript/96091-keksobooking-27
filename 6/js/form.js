function setActiveState() {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach(
    (field) => {
      field.disabled = true;
    }
  );

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');
  mapFilters.querySelectorAll('select').forEach(
    (select) => {
      select.disabled = true;
    }
  );
  mapFilters.querySelector('fieldset').disabled = true;
}

function setInactiveState() {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  adForm.querySelectorAll('fieldset').forEach(
    (field) => {
      field.disabled = false;
    }
  );

  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.remove('map__filters--disabled');
  mapFilters.querySelectorAll('select').forEach(
    (select) => {
      select.disabled = false;
    }
  );
  mapFilters.querySelector('fieldset').disabled = false;
}

setActiveState();
setInactiveState();
