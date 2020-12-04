const fs = require('fs')


fs.readFile('./files/day_3_input.csv', 'utf8' , (err, _data) => {
  if (err) {
    console.error(err)
    return
  }

  const forest = _data.split('\n').filter(Boolean)

  // part one 
  const totalTrees = treesEncountered(forest)
  console.log('trees', totalTrees)
  // answer = 218


  // part two
  slopes = [
    [1,1],
    [3,1],
    [5,1],
    [7,1],
    [1,2]
  ]

  let allSlopeTrees = 1;
  slopes.forEach(slope => {
    const currentTreesForSlope = treesEncounteredSlopes(slope[0], slope[1], forest)
    allSlopeTrees *= currentTreesForSlope;
  })
  console.log('allSlopeTrees', allSlopeTrees)
  // 3847183340
})


function treesEncountered(trail) {
  // down 1 right 3
  let trees = 0;
  let currentPathHorizontal = 0;
  const rowLength = trail[0].length;
  for(let i = 1; i < trail.length; i++) {
    currentPathHorizontal = (currentPathHorizontal+3) % (rowLength);
    if(trail[i][currentPathHorizontal] === '#') {
      trees += 1;
    }
  }
  return trees;
}

function treesEncounteredSlopes(horizontalSlope, verticalSlope, trail) {
  let trees = 0;
  let currentPathHorizontal = 0;
  let currentPathVertical = 0;
  const rowLength = trail[0].length;
  for(let i = 0; i < (trail.length/verticalSlope)-1; i++) {
    console.log('trail i:', i)
    currentPathVertical += verticalSlope;
    currentPathHorizontal = (currentPathHorizontal+horizontalSlope) % (rowLength);
    console.log("currentPathVertical", currentPathVertical)
    console.log("currentPathHorizontal", currentPathHorizontal)
    if(trail[currentPathVertical][currentPathHorizontal] === '#') {
      trees += 1;
    }
  }
  return trees;
  }
