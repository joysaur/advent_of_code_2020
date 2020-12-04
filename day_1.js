const fs = require('fs')

fs.readFile('./files/day_1_input.csv', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }

  const expenses = data.split('\n').map(exp => parseInt(exp))
  const twoNums = findTwoSum2020Numbers(expenses)
  console.log('twoNums', twoNums)

  const threeNums = findThreeSum2020Numbers(expenses)
  console.log('threeNums', threeNums)
  //12747392
})

function findTwoSum2020Numbers(expenses) {
  for(let i = 0; i < expenses.length; i++) {
    const toFind = 2020 - expenses[i];
    if(expenses.includes(toFind)) {
      return expenses[i] * toFind
    }
  }
}

function findThreeSum2020Numbers(expenses) {
  for(let i = 0; i < expenses.length; i++) {
    for(let j = 0; j < expenses.length; j++) {
      if(expenses[i] === expenses[j]) break;
      const thirdNum = 2020 - expenses[i] - expenses[j]
      if(expenses.includes(thirdNum)) {
        return thirdNum * expenses[i] * expenses[j]
      }
    }
  }
}
