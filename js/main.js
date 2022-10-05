// Функция, возвращающая случайное целое число из переданного диапазона включительно.
function getIntegerFromRange (minValue, maxValue) {
  if (minValue < 0 || typeof(minValue) !== 'number') { return NaN;}
  if (maxValue < 0 || typeof(maxValue) !== 'number') { return NaN;}
  if (minValue === maxValue) {return minValue;}
  if (minValue > maxValue) {
    const correctMinValue = maxValue;
    const correctMaxValue = minValue;
    minValue = correctMinValue;
    maxValue = correctMaxValue;
  }
  const result = Math.floor(minValue + ((maxValue - minValue + 1) * Math.random()));
  return result;
}
getIntegerFromRange(0, 100);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
function getDecimalFromRange (minValue, maxValue, numbersAfterComma) {
  if (minValue < 0 || typeof(minValue) !== 'number') { return NaN;}
  if (maxValue < 0 || typeof(maxValue) !== 'number') { return NaN;}
  if (numbersAfterComma < 0 || (numbersAfterComma % 1 !== 0) || typeof(minValue) !== 'number') { return NaN;}
  if (minValue === maxValue) {return minValue;}
  if (minValue > maxValue) {
    const correctMinValue = maxValue;
    const correctMaxValue = minValue;
    minValue = correctMinValue;
    maxValue = correctMaxValue;
  }
  const randomValue = minValue + ((maxValue - minValue) * Math.random());
  numbersAfterComma = Math.pow(10, numbersAfterComma);
  const result = Math.floor(randomValue * numbersAfterComma) / numbersAfterComma;
  return result;
}
getDecimalFromRange(0, 100, 3);
