//Funkcja konstruująca zwraca automatycznie pusty obiekt i binduje do niego this, jeżeli wywołamy ją za pomocą słowa kluczowego new
function Person(firstname, lastname) {
    // Funkcję konstruującą dobrze zaczynać z dużej litery (jak klasy)
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}
//Metody dodajemy do funkcji konstruktora za pomocą słowa kluczowego prototype aby zaoszczędzić miejsce w pamięci (1 kopia)
// Słowo kluczowe prototype dodaje metodę do wszystkich instancji danego obiektu
Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;   
}

//Aby funkcja została wywołana jako konstruktor używamy słowa kluczowego new
var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
    return this.lastname + ', ' + this.firstname;   
}

console.log(john.getFormalFullName());

// Wbudowane funkcje konstruujące np. new String() tworzą obiekty oparte na typach prymitywnych

//Za pomocą słowa kluczowego prototype mozemy dodać dowolną metodę do wszystkich obiektów np. typu String
String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit
}
//Automatyczne konwertowanie stringa "John" na obiekt String i możliwość użycia metody isLengthGreaterThan()
console.log("John".isLengthGreaterThan(3));


Number.prototype.isPositive = function() {
    return this > 0;
}
// Automatyczne konwertowanie nie działa na typ prymitywny Number!!
//console.log(3.isPositive());

//Trzeba stworzyć nowy obiekt Number
var num = new Number(3)
console.log(num.isPositive());

//Generalnie niewskazane jest używanie wbudowanych funkcji konstruujących obiekty z typów prymitywnych i prototypowanie na nich metod
//np a = 3, b = new Number(3) a === b ? wychodzi false bo: a jest primitive, b jest object
//Oczywiście można używać funkcji wbudowanej bez słowa new np. a = Number("3"), aby np. konwertować typ stringa na liczbę

//Uwaga odnosnie arrays i fukncji for in

var arr = ['John', 'Jane', 'Jim']
Array.prototype.myCustomFeature = 'cool!'

for (var prop in arr) {
    console.log(prop + " " + arr[prop]);
}
//W tym przypadku tablica jest obiektem i dodanie do prototypu nowej metody spowoduje dodanie nowego klucza do tablicy
// W przypadku tablic bezpieczniej jest używać standardowej pętli for