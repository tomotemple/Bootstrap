

findLongestString('red', 'black', 'green', 'canary yellow');


function findLongestString(...strings) {

    let longestString = strings[0];

    for(let i = 1; i < strings.length; i++) {
        if (strings[i].length > longestString.length) 
            longestString = strings[i];
    }
}

console.log(findLongestString('red', 'black', 'green', 'canary yellow'))

function apply(fn, param) {
    return fn(param);
}

let result = apply(function (p) { return 'hi' + ' ' + p }, 'dog');

console.log(result)