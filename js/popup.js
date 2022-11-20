const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const houseType = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

function createPopup({author, offer}) {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.price}  ₽/ночь`;
  card.querySelector('.popup__type').textContent = houseType[offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  if (offer.features) {
    card.querySelectorAll('.popup__feature').forEach(
      (featureItem) => {

        const isContains = offer.features.some(
          (offerFeature) => (featureItem.classList.contains(`popup__feature--${offerFeature}`))
        );
        if (!isContains) {
          featureItem.remove();
        }
      }
    );
  } else {
    card.querySelector('.popup__feature').remove();
  }

  if (offer.description) {
    card.querySelector('.popup__description').textContent = offer.description;
  } else {
    card.querySelector('.popup__description').remove();
  }

  const photoContainer = card.querySelector('.popup__photos');
  if (offer.photos) {
    offer.photos.forEach(
      (photo) => {
        const photoItem = photoContainer.querySelector('.popup__photo').cloneNode(true);
        photoItem.src = photo;
        photoContainer.append(photoItem);
      }
    );
  }
  photoContainer.querySelector('.popup__photo').remove();
  card.querySelector('.popup__avatar').src = author.avatar;

  return card;
}

export {createPopup};
