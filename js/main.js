// Количество похожих объявлений неподалеку.
const NUMBER_OF_SIMILAR_ADS = 10;

// Функция, возвращающая случайное целое число из переданного диапазона включительно.
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger(0, 100);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
function getRandomPositiveFloat (a, b, digits = 1) {
  if (a < 0 || b < 0 || digits < 0) {
    return NaN;
  }
  const lower = Math.min(a, b);
  const upper = Math.max(a, b);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}
getRandomPositiveFloat(0, 100, 3);

// Функция, перемешивающая заданный массив.
function shuffleЕlements (array) {
  for(let i = 0; i < array.length; i++) {
    const randomInteger = getRandomPositiveInteger(0, array.length - 1);
    const tempValue = array[i];
    array[i] = array[randomInteger];
    array[randomInteger] = tempValue;
  }
  return array;
}

// Функция, создающая массив из заданных значений.
function createArrayFromOptions (...valueOptions) {
  return Array.from({ length: NUMBER_OF_SIMILAR_ADS }, (element, index) => index + 1).map(
    (element, index) => {
      if (valueOptions.length >= NUMBER_OF_SIMILAR_ADS - 1) {
        index = getRandomPositiveInteger(0, NUMBER_OF_SIMILAR_ADS - 1);
      } else {
        index = getRandomPositiveInteger(0, valueOptions.length - 1);
      }
      element = valueOptions[index];
      return element;
    }
  );
}

// Функция, создающая массив массивов из заданных значений.
function creatArrayOfArrayFromOptions (...valueOptions) {
  return Array.from({ length: NUMBER_OF_SIMILAR_ADS }, (element, index) => index + 1).map(
    (element) => {
      const length = getRandomPositiveInteger(1, valueOptions.length);
      element = (shuffleЕlements(valueOptions)).slice(0, length);
      return element;
    }
  );
}

// Массивы полей объектов.

const avatars = shuffleЕlements(
  Array.from({ length: NUMBER_OF_SIMILAR_ADS }, (element, index) => index + 1).map(
    (element) =>{
      if (String(element).length < 2) {
        element = `img/avatars/user0${String(element)}`;
      } else {
        element = `img/avatars/user${String(element)}`;
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
  'bungalow ',
  'hotel',
  'flat',
  'house',
  'palace',
  'bungalow ',
  'house'
];

const checkinTimes = ['12:00', '13:00', '14:00'];

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

const photos = creatArrayOfArrayFromOptions(
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'parkhttps://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
);

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
