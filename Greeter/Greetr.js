(function(global, $) {

  var Greetr =  function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language); // Tworzymy obiekt Greetr.init aby nie musiec podawać słowa new w kodzie app.js
  }

  var supportedLangs = ['en', 'es']; 

  var greetings = {
    en:'Hello',
    es:'Hola'
  };

  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    en: 'Logged in',
    es: 'Inició sesión'
  }

  Greetr.prototype = {
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      if ( supportedLangs.indexOf(this.language) === -1) {
        throw "invalid language"
      }
    }
  };


  Greetr.init = function(firstName, lastName, language) { //tutaj budujemy obiekt -> każda unikalną instancję
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr; // Stworzenie aliasu G$

    
}(window, jQuery))