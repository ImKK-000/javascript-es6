const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumOddDataFromEvenData = data
  .filter(value => value % 2 == 0)
  .map(value => value + 1)
  .reduce((previousNumber, value) => previousNumber + value)



const objectData = [
  {
    values: [0, 0]
  },
  {
    values: [2, 2]
  }
]
const pluckObjectData = objectData.map(({ values }) => values)




const name1 = 'foo', name2 = 'bar'
console.log({
  name1,
  name2,
  [name1]: 'isName1',
  [name2]: 'isName2',
  [name1]: 'isName1?' // override!
})
