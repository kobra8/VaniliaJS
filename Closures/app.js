function greet(whattosay) {

    return function(name) {
        console.log(whattosay + ' ' + name);
    }
 
 }
 
 var sayHi = greet('Hi'); // Funkcja greet zwraca funkcję, która zapisuje się do zmiennej sayHi
 sayHi('Tony'); //Wywołanie zapisanej funkcji z przekazaniem argumentu

 // argument name znajduje się w domknięciu czyli jeżeli funkcja nie znajdzie go w swoim execution enviroment to szuka na zewnątrz

function buildFunctions() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i);   
            }
        )
        
    }
    
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

function buildFunctions2() {
 
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);   
                }
            }(i))
        )
        
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();