var puzzle = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

function sudoku(puzzle) {
    let counter;
    do {
        counter = 0;
        for (let row = 0; row < puzzle.length; row++) {
            for (let col = 0; col < puzzle.length; col++) {
                if (puzzle[row][col] === 0) {
                    let obj = {};

                    for (let i = 0; i < 9; i++) {
                        // row
                        if (puzzle[row][i] !== 0) {
                            obj[puzzle[row][i].toString()] = true;
                        }
                        // col
                        if (puzzle[i][col] !== 0) {
                            obj[puzzle[i][col].toString()] = true;
                        }
                    }

                    // block
                    let edgeRow = Math.floor(row / 3) * 3;
                    let edgeCol = Math.floor(col / 3) * 3;

                    for (let i = 0; i < 3; i++) {
                        for (let j = 0; j < 3; j++) {
                            if (puzzle[edgeRow + i][edgeCol + j] !== 0) {
                                obj[puzzle[edgeRow + i][edgeCol + j].toString()] = true;
                            }
                        }
                    }

                    if (Object.keys(obj).length === 8) {
                        finish = true;
                        for (let i = 1; i < 10; i++) {
                            if (!obj.hasOwnProperty(i.toString())) {
                                puzzle[row][col] = i;
                                break;
                            }
                        }
                    } else {
                        counter += 1;
                    }
                }
            }
        }
    } while (counter > 0);

    return puzzle;
}

sudoku(puzzle);