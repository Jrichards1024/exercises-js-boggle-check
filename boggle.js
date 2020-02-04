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
  let dice = ['AAEEGN',
    'ELRTTY',
    'AOOTTW',
    'ABBJOO',
    'EHRTVW',
    'CIMOTU',
    'DISTTY',
    'EIOSST',
    'DELRVY',
    'ACHOPS',
    'HIMNQU',
    'EEINSU',
    'EEGHNW',
    'AFFKPS',
    'HLNNRZ',
    'DEILRX']
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

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);

smarterBoggleBoard(board);

printBoggleBoard(board);
