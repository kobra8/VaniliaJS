var button = document.querySelector('button');

// Definicja obiektu observer

var observer1 = {
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log("Completed");
  }
}

var observer2 = {
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log("Completed");
  }
}

var sub1 = Rx.Observable.create((obs) => {
  obs.next('A value');
  //obs.error('Error');
  obs.next('Second value')
  obs.complete();
})
  .subscribe(observer1);

var sub2 = Rx.Observable.create((obs) => {
  button.onclick = (event) => {
    obs.next(event);
  }
})
  .subscribe(observer2);


setTimeout(()=>{
  sub1.unsubscribe();
  sub2.unsubscribe();
},10000);

// Obiekt observer i fromEvent
// Rx.Observable.fromEvent(button, 'click')
// .subscribe(observer);