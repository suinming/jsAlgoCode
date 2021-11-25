// my solution

function myFormatDuration(seconds) {
    /*calculation*/
    let a = Math.floor(seconds / 31536000);
    let b = seconds % 31536000;
    let c = Math.floor(b / 86400);
    let d = b % 86400;
    let e = Math.floor(d / 3600);
    let f = d % 3600;
    let g = Math.floor(f / 60);
    let h = f % 60;
    let array = [a, c, e, g, h];
    let NonZeroIndex = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            NonZeroIndex.push(i);
        }
    }
    let unit = [' year', ' day', ' hour', ' minute', ' second',
        ' years', ' days', ' hours', ' minutes', ' seconds']
    /*format*/
    let output = '';
    if (seconds == 0) {
        output = 'now';
    } else {
        for (let i = 0; i < NonZeroIndex.length; i++) {
            if (i == NonZeroIndex.length - 1) {
                if (array[NonZeroIndex[i]] == 1) {
                    output +=
                        array[NonZeroIndex[i]] + unit[NonZeroIndex[i]];
                } else {
                    output +=
                        array[NonZeroIndex[i]] + unit[NonZeroIndex[i] + 5];
                }
            } else if (i == NonZeroIndex.length - 2) {
                if (array[NonZeroIndex[i]] == 1) {
                    output +=
                        array[NonZeroIndex[i]] + unit[NonZeroIndex[i]] + ' and ';
                } else {
                    output +=
                        array[NonZeroIndex[i]] + unit[NonZeroIndex[i] + 5] + ' and ';
                }
            } else {
                if (array[NonZeroIndex[i]] == 1) {
                    output +=
                        array[NonZeroIndex[i]] + unit[NonZeroIndex[i]] + ', ';
                } else {
                    output +=
                        array[NonZeroIndex[i]] + unit[NonZeroIndex[i] + 5] + ', ';
                }
            }
        }
    }
    return output;
}

// best solution

function formatDuration(seconds) {
    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
        res = [];

    if (seconds === 0) return 'now';

    for (var key in time) {
        if (seconds >= time[key]) {
            var val = Math.floor(seconds / time[key]);
            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
            seconds = seconds % time[key];
        }
    }

    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
}