let board = [[0, 2, 1], [2, 1, 0], [1, 0, 0]];

// my solution 

function isSolved_myFunction(board) {
    let rowsum = new Array(board.length),
        colsum = new Array(board.length), result,
        boardInverse, sum = 0,
        boardDiagonalSum = 0, boardSubDiagonalSum = 0;
    board.forEach(element => {
        for (let i = 0; i < board.length; i++) {
            sum += element[i];
        }
    });
    if (sum == 13 | sum == 14) { result = 0 }
    board.forEach(element => {
        for (let i = 0; i < board.length; i++) {
            if (element[i] == 0) { element[i] = 10 }
        }
    });
    function SumDataforEach(arr) {
        let sum = 0;
        arr.forEach(function (element) {
            sum += element;
        });
        return sum;
    }
    function transpose(a) {

        // Calculate the width and height of the Array
        var w = a.length || 0;
        var h = a[0] instanceof Array ? a[0].length : 0;

        // In case it is a zero matrix, no transpose routine needed.
        // if(h === 0 || w === 0) { return []; }

        //i Counter ,j Counter ,t Transposed data is stored in this array.

        var i, j, t = [];

        // Loop through every item in the outer array (height)
        for (i = 0; i < h; i++) {

            // Insert a new row (array)
            t[i] = [];

            // Loop through every item per item in outer array (width)
            for (j = 0; j < w; j++) {

                // Save transposed data.
                t[i][j] = a[j][i];
            }
        }
        return t;
    }
    boardInverse = transpose(board);

    for (let i = 0; i < board.length; i++) {
        boardDiagonalSum += board[i][i];
        boardSubDiagonalSum += board[i][2 - i]
    }
    console.log(boardDiagonalSum)
    if (boardDiagonalSum == board.length * 1 |
        boardSubDiagonalSum == board.length * 1) {
        result = 1;
    } else if (boardDiagonalSum == board.length * 2 |
        boardDiagonalSum == board.length * 2) {
        result = 2;
    }
    for (let i = 0; i < board.length; i++) {
        rowsum[i] = SumDataforEach(board[i])
        colsum[i] = SumDataforEach(boardInverse[i])
    }

    rowsum.forEach(element => {
        if (element == 3) {
            result = 1;
        } else if (element == 6) {
            result = 2;
        }
    })
    if (result == undefined) {
        colsum.forEach(element => {
            if (element == 3) {
                result = 1;
            } else if (element == 6) {
                result = 2;
            }
        });
    }
    if (result == undefined) {
        result = -1
    }
    console.log(result);
    return result;
}

// best solution

function isSolved_bestSolution(board) {
    board = board.join('-').replace(/,/g, '');
    console.log(board)
    if (/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    //  row  ,col  ,principle diagnal, sub-diagnal
    if (/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if (/0/.test(board)) return -1;
    return 0;
}
