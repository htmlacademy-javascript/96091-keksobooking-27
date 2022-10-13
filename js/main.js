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

// Функция, создающая новый массив целых чисел.
function createNewArray (amountElements) {
  const elements = [];
  for (let i = 0; i < amountElements; i++) {
    elements.push(i + 1);
  }
  return elements;
}

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
function createArrayOfOptions (...valueOptions) {
  return createNewArray(NUMBER_OF_SIMILAR_ADS).map(
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
function creatArrayOfArrayOfOptions (...valueOptions) {
  return createNewArray(NUMBER_OF_SIMILAR_ADS).map(
    (element) => {
      const length = getRandomPositiveInteger(1, valueOptions.length);
      element = (shuffleЕlements(valueOptions)).slice(0, length);
      return element;
    }
  );
}

// Массивы полей объектов.

const authorAvatars = shuffleЕlements(
  createNewArray(NUMBER_OF_SIMILAR_ADS)
).map(
  (element) =>{
    if (String(element).length < 2) {
      element = `img/avatars/user0${String(element)}`;
    } else {
      element = `img/avatars/user${String(element)}`;
    }
    return element;
  }
);

const locationLat = createNewArray(NUMBER_OF_SIMILAR_ADS).map(
  (element) => {
    element = getRandomPositiveFloat(35.65000, 35.70000, 5);
    return element;
  }
);

const locationLng = createNewArray(NUMBER_OF_SIMILAR_ADS).map(
  (element) => {
    element = getRandomPositiveFloat(139.70000, 139.80000, 5);
    return element;
  }
);

const offerTitle = createArrayOfOptions(
  'Маленькая квартирка рядом с парком',
  'Чёткая хата',
  'Небольшая лавочка в парке',
  'Уютное гнездышко для молодоженов',
  'Тихая квартирка недалеко от метро',
  'Стандартная квартира в центре',
  'Квартира студия в престижном районе',
  'Милое гнездышко для фанатов Анимэ',
  'Императорский дворец в центре Токио',
  'Загородный дом для спокойного отдыха',
  'Милейший чердачок',
  'Хостел «Для друзей»',
  'Отель-музей',
  'Небольшая бюджетная комната для студентов'
);

const offerAddress = [];
for (let i = 0; i < NUMBER_OF_SIMILAR_ADS; i++) {
  offerAddress[i] = `${String(locationLat[i])} , ${String(locationLng[i])}`;
}

const offerPrice = createNewArray(NUMBER_OF_SIMILAR_ADS).map(
  () => getRandomPositiveInteger(3000, 110000)
);

const offerType = createArrayOfOptions(
  'palace',
  'flat',
  'house',
  'bungalow ',
  'hotel'
);

const offerRooms = createArrayOfOptions(1, 2, 3);

const offerGuests = createArrayOfOptions(1, 2, 3);

const offerCheckin = createArrayOfOptions('12:00', '13:00', '14:00');

const offerCheckout = createArrayOfOptions('12:00', '13:00', '14:00');

const offerFeatures = creatArrayOfArrayOfOptions(
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
);

const offerDescription = createArrayOfOptions(
  'Хейтеров просьба не беспокоить.',
  'Комната в трёхкомнатной квартире, подойдёт молодым путешественникам.',
  'Квартира на первом этаже. Соседи тихие. Для всех, кто терпеть не может шума и суеты.',
  'Великолепная лавочка прямо в центре парка. Подходит для всех кто любит спать на свежем воздухе.',
  'Маленькая квартирка на чердаке. Для самых не требовательных.',
  'Замечательный дворец в старинном центре города. Только для тех кто может себе позволить дворец. Лакеев и прочих жокеев просим не беспокоить.',
  'Отель для ценителей истории. Почуствуй себя героем из прошлого.',
  'У нас тут все ништяк. Ларек за углом. Шава 24 часа. Приезжайте! Интернетов нет!',
  'Великолепная квартира-студия в центре Токио. Подходит как туристам, там и бизнесменам. Квартира полностью укомплектована и имеет свежий ремонт.',
  'Один из лучших хостелов для душевного общения. Ужинаем вместе и играем в «Мафию» по вечерам, вкусно готовим. Ежедневная уборка, бесплатный Wi-Fi, чистое постельное белье.',
  'Тут красиво, светло и уютно. Есть где разместиться компании из 5 человек. Кофе и печеньки бесплатно.'
);

const offerPhotos = creatArrayOfArrayOfOptions(
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'parkhttps://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpging'
);

// Массив из 10 сгенерированных объектов.
const similarAds = [];
for (let i = 0; i < NUMBER_OF_SIMILAR_ADS; i++) {
  similarAds[i] = {
    'author': {
      'avatar': authorAvatars[i]
    },
    'offer': {
      'title': offerTitle[i],
      'address': offerAddress[i],
      'price': offerPrice[i],
      'type': offerType[i],
      'rooms': offerRooms[i],
      'guests': offerGuests[i],
      'checkin': offerCheckin[i],
      'checkout': offerCheckout[i],
      'features': offerFeatures[i],
      'description': offerDescription[i],
      'photos': offerPhotos[i]
    },
    'location': {
      'lat': locationLat[i],
      'lng': locationLng[i]
    }
  };
}
