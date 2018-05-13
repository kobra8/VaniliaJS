/*
Zadanie

Proszę napisać funkcję, która otrzymawszy skompresowany string zwróci rozpakowany tekst.

Dane wejściowe są spakowane przy pomocy wyrażeń N[PackedString]. Przy rozpakowaniu, znajdujący się w nawiasach kwadratowych PackedString, jest powtarzany N razy. 
Proszę zauważyć, że N to liczba całkowita większa od zera.

Można założyć, że dane wejściowe są zawsze poprawne: bez białych znaków, nawiasy poprawnie sparowane, itd.

Ponadto można założyć, że tekst przed kompresją nie zawierał żadnych cyfr, tak więc jedyne cyfry to te składające się na liczbę N opisującą liczbę powtórzeń. 
Nie będzie danych wejściowych, takich jak 2b czy 3[1]

Przykłady:

Wywołanie z "2[a]3[bc]", zwraca "aabcbcbc"
Wywołanie z "3[d2[e]]", zwraca "deedeedee"
Wywołanie z "fg2[eset]3[hi]", zwraca " fgesetesethihihi"

*/

const unpackString = (expression) => {
  let arr = [...expression];
  let indexList = [];
  let multiObjList = {};
  arr.forEach((x, i) => {
    if (!!parseInt(x)) {
     console.log(arr.indexOf(x));
      multiObjList[`expression${i}`] = x;
     indexList.push(arr.indexOf(x))
     console.log(arr.indexOf("]", arr.indexOf(x)));
     indexList.push(arr.indexOf("]", arr.indexOf(x)))
    }
    else {
      multiObjList[`expression${i}`] = x;
    }
  });
  console.log(indexList);
  for(let i = 0; i < indexList.length / 2; i++ ) {
  multiObjList.push();
  }
  console.log(multiObjList);

}

sliceMultiObj = () => {
  arr.slice(indexList[i]+2, indexList[i+1])
}

const case1 = "2[a]3[bc]";
const case2 = "3[d2[e]]";
const case3 = "fg2[eset]3[hi]";

unpackString(case1);