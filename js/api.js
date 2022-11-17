import {createPinMarkers} from './map.js';
import {showAlert} from './util.js';
const ALERT_SHOW_TIME = 5000;
const MESSAGE = 'Ошибка загрузки! Перезагрузите страницу!';


function getOffers(count) {
  fetch('https://27.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((allOffers) => allOffers.slice(0, count))
    .then((offers) => createPinMarkers(offers))
    .catch(() => showAlert(MESSAGE, ALERT_SHOW_TIME));
}

function sendOffer(body, onSuccess, onFail) {
  fetch(
    'https://27.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}

export {getOffers, sendOffer};
