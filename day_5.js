function returnRow(row) {
  const totalRows = 128;
  // divide by 2
  // if bottom half 0 to num
  // if uppder half num + 1 to last half
  // 64 - 127 

  let finalRow = 0;

  row.forEach(letter => {
    const midpoint = totalRows / 2; 
    if(letter === 'F') {

    } else if (letter === 'B') {

    }
  })
}


function returnColumn() {

}

function seatId(row, column) {
  return row * 8 + column;
}

function splitRowAndCol() {

}

// splitRowAndCol("FBFBBFFRLR")

returnRow("FBFBBFF") // 44

// returnColumn("RLR")
