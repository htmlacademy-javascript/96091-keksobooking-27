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

function shuffleЕlements (array) {
  for(let i = 0; i < array.length; i++) {
    const randomInteger = getRandomPositiveInteger(0, array.length - 1);
    const tempValue = array[i];
    array[i] = array[randomInteger];
    array[randomInteger] = tempValue;
  }
  return array;
}

function getRandomArrayElement(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
}

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  shuffleЕlements,
  getRandomArrayElement
};
