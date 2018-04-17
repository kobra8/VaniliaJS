;(function (global, $) {

  // 'new' an object
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language); // Tworzymy obiekt Greetr.init aby nie musiec podawać słowa new w kodzie app.js
  }

  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'es', 'pl'];

  // informal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola',
    pl: 'Cześć',
  };

  // formal greetings
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
    pl: 'Serdeczne pozdrowienia',
  };

   // logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion',
    pl: 'Zalogowano'
  };

  //Definicja wszystkich metod przypisanych do prototypu - prototype holds methods (to save memory space)
  Greetr.prototype = {

    // 'this' refers to the calling object at execution time
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function () {
      // check that is a valid language - references the externally inaccessible 'supportedLangs' within the closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "invalid language"
      }
    },

    // retrieve messages from object by referring to properties using [] syntax
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },
    formalGreeting: function () {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    // chainable methods return their own containing object
    greet: function (formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      //'this' refers to the calling object at execution time, makes the method chainable
      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      return this;
    },
    setLang: function (lang) {

      // set the language
      this.language = lang;

      // validate
      this.validate();

      // make chainable
      return this;
    },
    renderHtml: function (selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }
      if (!selector) {
        throw 'Missing jQuery selector';
      }
      // determine the message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      // inject the message in the chosen place in the DOM
      var container = $(selector);
      container.html(msg);
    
      return this;
    }
  };

  // the actual object is created here, allowing us to 'new' an object without calling 'new'
  Greetr.init = function (firstName, lastName, language) { //tutaj budujemy obiekt -> każda unikalną instancję
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  }

  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;


  // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
  global.Greetr = global.G$ = Greetr; // Stworzenie aliasu G$


}(window, jQuery))