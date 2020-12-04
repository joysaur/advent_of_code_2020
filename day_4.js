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

  let validPassports = 0;
  passports.forEach(passport => {
    if(isValidPassport(passport)) {
      validPassports += 1;
    }
  })
  console.log('validPassports',validPassports)
  // answer is 213
})



function isValidPassport(passport) {
  let fieldsAndValues = passport.split(' ');
  let fields = fieldsAndValues.map(fav => {
    return fav.split(":")[0]
  })
  if(fields.length < 7) return false 
  if(fields.length === 7 && !fields.includes('cid')) return true
  if(fields.length > 7) return true
  return false;
}
