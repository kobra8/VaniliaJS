greet();

function greet() { // Function statement
    console.log('hi');   
}

var anonymousGreet = function() { //Function expression
    console.log('hi');   
}

anonymousGreet();

function log(a) {
   a();    
}

log(function() {
    console.log('hi');   
});


