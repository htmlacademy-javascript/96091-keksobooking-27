import {isEscapeKey, isEnterKey} from './util.js';

const onSuccessMessageOutsideClick = () => {
  closeSuccessMessage();
};

const onSuccessMessageEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
};

const showSuccessMessage = () => {
  const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);
  document.addEventListener('click', onSuccessMessageOutsideClick);
  document.addEventListener('keydown', onSuccessMessageEscapeKeydown);
};

function closeSuccessMessage() {
  document.removeEventListener('click', onSuccessMessageOutsideClick);
  document.removeEventListener('keydown', onSuccessMessageEscapeKeydown);
  document.querySelector('.success').remove();
}

const onErrorMessageOutsideClick = () => {
  closeErrorMessage();
};

const onErrorMessageEscapeKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const onErrorMessageButtonKeydown = (evt) => {
  if (isEnterKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const showErrorMessage = () => {
  const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  document.addEventListener('click', onErrorMessageOutsideClick);
  document.addEventListener('keydown', onErrorMessageEscapeKeydown);
  document.addEventListener('keydown', onErrorMessageButtonKeydown);
};


function closeErrorMessage() {
  document.removeEventListener('click', onErrorMessageOutsideClick);
  document.removeEventListener('keydown', onErrorMessageEscapeKeydown);
  document.removeEventListener('keydown', onErrorMessageButtonKeydown);
  document.querySelector('.error').remove();
}

export {showSuccessMessage, showErrorMessage};
