import {showAlert} from './util.js';
import {setDefaultOffers} from './filter.js';
import {setActiveFilter} from './form.js';
const URL_FOR_REQUEST = 'https://27.javascript.pages.academy/keksobooking/data';
const URL_FOR_SEND = 'https://27.javascript.pages.academy/keksobooking';
const ALERT_SHOW_TIME = 5000;
const MESSAGE = 'Ошибка загрузки! Перезагрузите страницу!';


function getOffers() {
  fetch(URL_FOR_REQUEST)
    .then((response) => response.json())
    .then((allOffers) => setDefaultOffers(allOffers))
    .then(() => setActiveFilter())
    .catch(() => showAlert(MESSAGE, ALERT_SHOW_TIME));
}

function sendOffer(body, onSuccess, onFail) {
  fetch(
    URL_FOR_SEND,
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
