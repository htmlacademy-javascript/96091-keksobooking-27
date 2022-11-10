import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  shuffleЕlements,
  getRandomArrayElement
} from './util.js';

const titles = [
  'Маленькая квартирка рядом с парком',
  'Чёткая хата',
  'Небольшая лавочка в парке',
  'Уютное гнездышко для молодоженов',
  'Тихая квартирка недалеко от метро',
  'Стандартная квартира в центре',
  'Квартира студия в престижном районе',
  'Милое гнездышко для фанатов Анимэ',
  'Императорский дворец в центре Токио',
  'Загородный дом для спокойного отдыха'
];

const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const checkinTimes = [
  '12:00',
  '13:00',
  '14:00'
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const descriptions = [
  'Хейтеров просьба не беспокоить.',
  'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Отель для ценителей истории. Почуствуй себя героем из прошлого.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
  'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.'
];

const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function generateOffers(count) {
  const similarAds = [];

  for (let i = 0; i < count; i++) {
    const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
    const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);
    similarAds[i] = {
      'author': {
        'avatar': `img/avatars/user${String(i + 1).padStart(2, '0')}.png`
      },
      'offer': {
        'title': titles[i],
        'address': `${lat} ${lng}`,
        'price': getRandomPositiveInteger(3000, 110000),
        'type': getRandomArrayElement(types),
        'rooms': getRandomPositiveInteger(1, 3),
        'guests': getRandomPositiveInteger(1, 3),
        'checkin': getRandomArrayElement(checkinTimes),
        'checkout': getRandomArrayElement(checkinTimes),
        'features': shuffleЕlements(features).slice(0, getRandomPositiveInteger(1, features.length - 1)),
        'description': descriptions[i],
        'photos': shuffleЕlements(photos).slice(0, getRandomPositiveInteger(1, photos.length - 1))
      },
      'location': {
        'lat': lat,
        'lng': lng
      }
    };
  }

  return similarAds;
}

export {generateOffers};
