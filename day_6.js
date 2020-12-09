const fs = require('fs');
const { Z_DATA_ERROR } = require('zlib');

fs.readFile('./files/day_6_input.txt', 'utf8' , (err, _data) => {
  if (err) {
    console.error(err)
    return
  }

  const regex = /\n{2,}/g;
  const data = _data.split(regex).map(d => d.replace(/\n/g,' ')).filter(Boolean)
  const partOneData = data.map(d => d.split(' ').join(''));

  let partOnesSum = 0;

  //part one
  partOneData.forEach(d => {
    let num = returnUnique(d)
    partOnesSum += num;
  })

  console.log('partOnesSum', partOnesSum)
  // 7120

  // part two 
  const data2 = _data.split("\n\n")

  let partTwoSum = 0;

  data2.forEach(d => {
    const group = d.split('\n').filter(Boolean)
    partTwoSum += commonAnswerInGroup(group)
  })
  console.log('partTwoSum', partTwoSum)
// 3570
})

function returnUnique(answers) {
  const unique = new Set(answers)
  return [...unique].length
}

function commonAnswerInGroup(group) {
  const persons = group.map(person => Array.from(person))
  console.log('persons', persons)
  const uniques = new Set([...group.join('')])
  console.log('uniques', uniques)

  const included = [...uniques].filter(answer => persons.every(person => person.includes(answer)))

return included.length
}
