// Polyfill czyli kod, który wykona się w przeglądarkach nie obsługujących Object.create
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}
// koniec polyfill

//Stworzenie obiektu
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;   
    }
}

//Zmienna john dziedziczy z obiektu person za pomocą metody Object.create(tu podajemy z czego dziedziczy) 
var john = Object.create(person);

john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);