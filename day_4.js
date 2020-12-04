const fs = require('fs')

fs.readFile('./files/day_4_input.txt', 'utf8' , (err, _data) => {
  if (err) {
    console.error(err)
    return
  }
  const regex = /\n{2,}/g;
  const findAndReplace = /\n/g;
  const passports = _data.split(regex).map(d => d.replace(findAndReplace,' ')).filter(Boolean)
  console.log('passports', passports)

  // part one
  let validPassports = 0;
  passports.forEach(passport => {
    if(isValidPassport(passport)) {
      validPassports += 1;
    }
  })
  console.log('validPassports',validPassports)
  // answer is 213


  // part two
  let validPassportsTwo = 0;
  passports.forEach(passport => {
    if(isValidPassportPartTwo(passport)) {
      validPassportsTwo += 1;
    }
  })
  console.log('validPassportsTwo',validPassportsTwo)
})



function isValidPassport(passport) {
  let fieldsAndValues = passport.split(' ');
  const fields = getFields(fieldsAndValues)
  console.log('fieldsAndValues', fieldsAndValues)
  if(fields.length < 7) return false 
  if(fields.length === 7 && !fields.includes('cid')) return true
  if(fields.length > 7) return true
  return false;
}

function getFields(values) {
  let fieldValues = values.map(fav => {
    return fav.split(":")[0]
  })
  return fieldValues;
}

function isValidPassportPartTwo(passport) {
  let fieldsAndValues = passport.split(' ');

  const addlValidated = additionalValidations(fieldsAndValues)
  console.log('addlValidated', addlValidated)
  if(!addlValidated) return false

  return isValidPassport(passport)
}

function inBetweenRange(valueToCheck, rangeStart, rangeEnd) {
  if(parseInt(valueToCheck) < rangeStart || parseInt(valueToCheck) > rangeEnd) {
    return false
  }
  return true
}

// part two
function additionalValidations(fieldsAndValues) {
  let validated = true;

  const fieldsAndValuesSplit = fieldsAndValues.map(fav => {
    return fav.split(":")
  })

  fieldsAndValuesSplit.forEach(f => {
    switch(f[0]) {
      case 'byr': { 
        if(parseInt(f[1]) > 2002 || parseInt(f[1]) < 1920) {
          validated = false;
        }
        break;
      }
      case 'iry': {
        if(parseInt(f[1] < 2010) || parseInt(f[1]) > 2020) {
          validated = false;
        }
      break;
      }
      case 'eyr': {
        if(parseInt(f[1] < 2020) || parseInt(f[1]) > 2030) {
          validated = false;
        }
      break;
      }
      case 'hgt': {
        const heightAndNumbersRegex = /([0-9])+([c-n]){2}/g;
        const numbersRegex = /([0-9])+/g;
        const heightRegex = /([a-z])+/g;
        if(!f[1].match(heightAndNumbersRegex)) {
          validated = false
        }
        const heightMeasurement = f[1].match(heightRegex) && f[1].match(heightRegex)[0];
        const height = parseInt(f[1].match(numbersRegex)[0])
        if(heightMeasurement === 'cm') {
          if(height < 150 || height > 193) {
            validated = false;
          }
        }
        if(heightMeasurement === 'in') {
          if(height < 59 || height > 76) {
            validated = false;
          }
        }
        break;
      }
      case 'hcl': {
        const colorRegex = /#([0-9a-f]){6}/;
        if(!f[1].match(colorRegex)) {
          validated = false;
        }
        break;
      }
      case 'ecl': {
        if(!['amb','blu','brn', 'gry', 'grn', 'hzl', 'oth'].includes(f[1])) {
          validated = false
        }g
        break;
      }
      case 'pid': {
        const numbersRegex = /^(\d{9})$/;
        if(!f[1].match(numbersRegex)) {
          validated = false
        }
      break;
      } 
    }
  })
  return validated;
}
