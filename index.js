const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sumOddDataFromEvenData = data
  .filter(value => value % 2 == 0)
  .map(value => value + 1)
  .reduce((previousNumber, value) => previousNumber + value);
