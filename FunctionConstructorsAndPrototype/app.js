//Funkcja konstruująca zwraca automatycznie pusty obiekt i binduje do niego this, jeżeli wywołamy ją za pomocą słowa kluczowego new
function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

//Aby funkcja została wywołana jako konstruktor używamy słowa kluczowego new
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);