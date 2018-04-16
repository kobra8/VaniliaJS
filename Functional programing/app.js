// Przykład własnej funkcji map
function mapForEach(arr, fn) {
    
    var newArr = [];
    for (var i=0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])   
        )
    };
    
    return newArr;
}

var arr1 = [1,2,3];
console.log(arr1);


var arr2 = mapForEach(arr1, function(item) {
   return item * 2; 
});
console.log(arr2);


var arr3 = mapForEach(arr1, function(item) {
   return item > 2; 
});
console.log(arr3);

// Wykorzystanie funkcji map z przkazaniem 2 argumentów -> użycie bind
var checkPastLimit = function(limiter, item) {
    return item > limiter;   
}
var arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr4);

// Wykorzystanie funkcji map z przkazaniem 2 argumentów -> użycie closures

var checkPastLimitSimplified = function(limiter) {
    return function(limiter, item) {
        return item > limiter;   
    }.bind(this, limiter); 
};

var arr5 = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(arr5);


function fibonnaci(num) {
    if(num <= 1) {
        return 1
    }
    const result = fibonnaci(num - 1) + fibonnaci(num - 2);
    console.log(`fib(${num}): ${result}`);
    return result
}

const fib = fibonnaci(5);



























