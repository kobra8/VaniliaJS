var button = document.querySelector('button');

Rx.Observable.fromEvent(button, 'click')
.throttleTime(2000) //Blokuje odczyt eventu na określony czas;
.map((data)=> data.clientY)
.subscribe(x => {
  console.log(x);
})