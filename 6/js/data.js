import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  shuffleЕlements
} from './util.js';

// Количество похожих объявлений неподалеку.
const NUMBER_OF_SIMILAR_ADS = 10;

// Массивы полей объектов.

const avatars = shuffleЕlements(
  Array.from({ length: NUMBER_OF_SIMILAR_ADS }, (element, index) => index + 1).map(
    (element) =>{
      if (String(element).length < 2) {
        element = `img/avatars/user0${String(element)}.png`;
      } else {
        element = `img/avatars/user${String(element)}.png`;
      }
      return element;
    }
  )
);

const latLocations = Array.from({ length: NUMBER_OF_SIMILAR_ADS }, (element, index) => index + 1).map(
  (element) => {
    element = getRandomPositiveFloat(35.65000, 35.70000, 5);
    return element;
  }
);

const LngLocations = Array.from({ length: NUMBER_OF_SIMILAR_ADS }, (element, index) => index + 1).map(
  (element) => {
    element = getRandomPositiveFloat(139.70000, 139.80000, 5);
    return element;
  }
);

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

const addresses = [];
for (let i = 0; i < NUMBER_OF_SIMILAR_ADS; i++) {
  addresses[i] = `${String(latLocations[i])} , ${String(LngLocations[i])}`;
}

const prices = Array.from({ length: NUMBER_OF_SIMILAR_ADS }, (element, index) => index + 1).map(
  () => getRandomPositiveInteger(3000, 110000)
);

const types = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
  'flat',
  'house',
  'palace',
  'bungalow',
  'house'
];

const checkinTimes = [
  '12:00',
  '13:00',
  '14:00',
  '12:00',
  '13:00',
  '14:00',
  '12:00',
  '13:00',
  '14:00',
  '12:00'
];

const features = [
  ['wifi', 'parking', 'washer', 'elevator', 'conditioner'],
  ['wifi', 'dishwasher', 'elevator', 'conditioner'],
  ['dishwasher', 'parking', 'washer', 'elevator'],
  ['wifi', 'dishwasher', 'parking', 'elevator', 'conditioner'],
  ['dishwasher', 'parking'],
  ['dishwasher', 'parking', 'washer', 'conditioner'],
  [ 'parking', 'washer', 'elevator'],
  ['wifi', 'dishwasher', 'parking', 'washer'],
  ['wifi', 'conditioner'],
  ['dishwasher', 'parking', 'washer'],
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
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg'
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg'
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
  ],
  [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg'
  ],
];

// Массив из 10 сгенерированных объектов.
const similarAds = [];
for (let i = 0; i < NUMBER_OF_SIMILAR_ADS; i++) {
  similarAds[i] = {
    'author': {
      'avatar': avatars[i]
    },
    'offer': {
      'title': titles[i],
      'address': addresses[i],
      'price': prices[i],
      'type': types[i],
      'rooms': getRandomPositiveInteger(1,3),
      'guests': getRandomPositiveInteger(1,3),
      'checkin': checkinTimes[i],
      'checkout': checkinTimes[i],
      'features': features[i],
      'description': descriptions[i],
      'photos': photos[i]
    },
    'location': {
      'lat': latLocations[i],
      'lng': LngLocations[i]
    }
  };
}

export {similarAds};
