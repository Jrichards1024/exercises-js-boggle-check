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

let board = newBoggleBoard();

shake(board);

printBoggleBoard(board);
