function newBoggleBoard() {
  return [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
  ];
}

/**
 * Prints out a boggle board.
 */
function printBoggleBoard(boggleBoard) {
  for (let row of boggleBoard) {
    console.log(row.join(' '));
  }
}

/**
 * Shake a boggle board and fill it with letters.
 */
function shake(boggleBoard) {
  alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  for (let row of boggleBoard){
    for (let i=0; i < row.length; i++) {
      row[i] = alphabet[(Math.floor(Math.random() * alphabet.length))]
    }
  }
  return boggleBoard;
}

function smarterBoggleBoard(boggleBoard) {
  let dice = [//'AAEEGN',
    // 'ELRTTY',
    // 'AOOTTW',
    // 'ABBJOO',
    // 'EHRTVW',
    // 'CIMOTU',
    // 'DISTTY',
    // 'EIOSST',
    // 'DELRVY',
    // 'ACHOPS',
    // 'HIMNQU',
    // 'EEINSU',
    // 'EEGHNW',
    // 'AFFKPS',
    // 'HLNNRZ',
    // 'DEILRX']
    'h',
    'e',
    'h',
    'e',
    'h',
    'e',
    'h',
    'e',
    'h',
    'e',
    'h',
    'e',
    'h',
    'e',
    'h',
    'e']
    let randomLetter;
    let letterArray = [];

  for (values of dice) {
    randomLetter = (values[Math.floor(Math.random() * values.length)]);
    letterArray.push(randomLetter)
  }
  for (let row of boggleBoard){
    for (let i=0; i < row.length; i++) {
      num = (Math.floor(Math.random() * letterArray.length))
      row[i] = letterArray[num]
      letterArray.splice(num, 1)
    }
  }
  return boggleBoard
}

function dealingWithQ(boggleBoard) {
  let elementLength = "Qu".length
  for (let row of boggleBoard) {
    for (let i = 0; i < row.length; i ++) {
      if (row[i] === "Q") {
        row[i] = "Qu"
      }
      row[i] = (row[i].padEnd(elementLength, " "))
    }
  }
  return boggleBoard
}

function boggleBoardContainsWord(board,word) {
  return boggleBoardIsInAnyRow(board, word) || getEveryColumn(board, word);
}

function arrayContainsWord(array, word) {
  return array.join('').includes(word);
}

function boggleBoardIsInAnyRow(board, word) {
  for (let i = 0; i < board.length; i++) {
    if (arrayContainsWord(board[i], word)) {
      return true;
    }
  }

  return false;
}

function boggleBoardIsInAnyCol(columns,word) {
  for (let i = 0; i < columns.length; i ++) {
    if (columns[i].join('').includes(word)) {
      return true
    }

  }
  return false

}
function getCol(board, colNum) {
  let columnValues = [];

  for (let j = 0; j < board.length; j++ ) {
    columnValues.push(board[j][colNum]);
  }
  return columnValues;
}

function getEveryColumn(board, word) {
  let columns = [];

  for (let i = 0; i < board.length; i++) {
    columns.push(getCol(board, i));
  }
  return boggleBoardIsInAnyCol(columns,word);
}

let board = newBoggleBoard();

//shake(board);
//printBoggleBoard(board);
smarterBoggleBoard(board);
//printBoggleBoard(board);
//dealingWithQ(board);
//printBoggleBoard(board);
console.log(boggleBoardContainsWord(board,"he"))
dealingWithQ(board);
printBoggleBoard(board);
//console.log(boggleBoardContainsWord(board,"hello"))
