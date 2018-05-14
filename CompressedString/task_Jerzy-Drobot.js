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
  const arr = [...expression];
  const indexList = [];
  const multiObjList = {};
  let multiIndex = 0;
  arr.forEach((x, i) => {
    if (!!parseInt(x)) {
      indexList.push(arr.indexOf(x));
      indexList.push(arr.indexOf("]", arr.indexOf(x)));
      multiObjList[`expression${multiIndex}`] =  this.sliceMultiObj(arr);
      //arr.slice(this.indexList[multiIndex] + 2, this.indexList[multiIndex + 1])
      multiIndex ++
    }
    else {
      //multiObjList[`expression${i}`] = x;
    }
  });
  console.log(indexList);
  console.log(multiObjList);

}

sliceMultiObj = (arr) => {
 arr.slice(2, 3)
 // arr.slice(this.indexList[index] + 2, this.indexList[index + 1])
}

const case1 = "2[a]3[bc]";
const case2 = "3[d2[e]]";
const case3 = "fg2[eset]3[hi]";

unpackString(case1);