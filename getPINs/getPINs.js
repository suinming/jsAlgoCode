let observed = "11";

// my solution 1

function getPINs_solution1(observed) {
    let observedInt = observed.split("");
    let arrAccumulater;
    let arr = {
        0: ["0", "8"],
        1: ["1", "2", "4"],
        2: ["1", "2", "3", "5"],
        3: ["2", "3", "6"],
        4: ["1", "4", "5", "7"],
        5: ["2", "4", "5", "6", "8"],
        6: ["3", "5", "6", "9"],
        7: ["4", "7", "8"],
        8: ["5", "7", "8", "9", "0"],
        9: ["6", "8", "9"],
    };
    if (observedInt.length == 1) {
        arrAccumulater = arr[observedInt[0]];
    } else {
        for (let i = 0; i < observedInt.length - 1; i++) {
            if (i == 0) {
                arrAccumulater = arr[observedInt[i]].flatMap((elArr1) =>
                    arr[observedInt[i + 1]].map((elArr2) => elArr1 + elArr2)
                );
            } else {
                arrAccumulater = arrAccumulater.flatMap((elArr1) =>
                    arr[observedInt[i + 1]].map((elArr2) => elArr1 + elArr2)
                );
            }
        }
    }
    console.log(arrAccumulater);
}
// my solution 2  (using concatenate function)

function getPINs_solution2(observed) {
    let observedInt = observed.split("");
    let arrAccumulater, merged;
    let arr = {
        0: ["0", "8"],
        1: ["1", "2", "4"],
        2: ["1", "2", "3", "5"],
        3: ["2", "3", "6"],
        4: ["1", "4", "5", "7"],
        5: ["2", "4", "5", "6", "8"],
        6: ["3", "5", "6", "9"],
        7: ["4", "7", "8"],
        8: ["5", "7", "8", "9", "0"],
        9: ["6", "8", "9"],
    };
    if (observedInt.length == 1) {
        arrAccumulater = arr[observedInt[0]];
    } else {
        for (let i = 0; i < observedInt.length - 1; i++) {
            if (i == 0) {
                arrAccumulater = arr[observedInt[i]].map((elArr1) =>
                    arr[observedInt[i + 1]].map((elArr2) => elArr1 + elArr2)
                );
                arrAccumulater = [].concat.apply([], arrAccumulater);
            } else {
                arrAccumulater = arrAccumulater.map((elArr1) =>
                    arr[observedInt[i + 1]].map((elArr2) => elArr1 + elArr2)
                );
                arrAccumulater = [].concat.apply([], arrAccumulater);
            }
        }
    }
    console.log(arrAccumulater);
}


