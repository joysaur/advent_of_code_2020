const fs = require('fs')

fs.readFile('./files/day_2_input.csv', 'utf8' , (err, _data) => {
  if (err) {
    console.error(err)
    return
  }

  const data = _data.split('\n')

  //  part one 
  let validOccurrences = 0;
  data.filter(Boolean).forEach(dat => {
    const policyAndPassword = dat.split(':')
    const isValid = isValidPassword(policyAndPassword[0], policyAndPassword[1].trim())
    if(isValid) {
      validOccurrences += 1
    }
  })
  console.log('occurrences part one', validOccurrences)
  // 580


  // part two
  let validOccurrencesPartTwo = 0;
  data.filter(Boolean).forEach(dat => {
    const policyAndPassword = dat.split(':')
    const isValidPartTwo = isValidPasswordAgain(policyAndPassword[0], policyAndPassword[1].trim())
    if(isValidPartTwo) {
      validOccurrencesPartTwo += 1
    }
  })
  console.log('occurrences part two:', validOccurrencesPartTwo)
  // not 308
})

function isValidPassword(policy, password) {
  const policies = policy.split(' ');
  const range = policies[0].split('-');
  const min = range[0];
  const max = range[1];
  const checkFor = policies[1]

  const numOfAppearances = getNumOfOccurences(checkFor, password.split(''))

  if(numOfAppearances <= max && numOfAppearances >= min) {
    return true
  }
return false
}

function getNumOfOccurences(value, arr) {
  return arr.filter(val => val === value).length
}


function isValidPasswordAgain(policy, password) {
  const policies = policy.split(' ');
  const range = policies[0].split('-');
  const firstIdx = range[0] - 1;
  const secondIdx = range[1] - 1;
  const checkFor = policies[1]

  const firstContains = password.split('')[firstIdx] === checkFor
  const secondContains = password.split('')[secondIdx] === checkFor
  
  if((firstContains && !secondContains) || (!firstContains && secondContains)) return true
  
  return false;
}
