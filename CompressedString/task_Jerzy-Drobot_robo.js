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

const multiObjList = [];
const singleObjList = [];


const unpackString = (expression) => {
  const arr = [...expression];
  let indexList = [];

  let multiIndex = 0;
  let singleObj = ""
  arr.forEach((x, i) => {
    if (!!parseInt(x)) {
      indexList.push({ start: arr.indexOf(x), end: arr.indexOf("]", arr.indexOf(x)) });
      multiObjList.push({ expression: this.sliceMultiObj(arr, multiIndex, indexList), multipier: x })
      singleObjList.push(singleObj);
      multiIndex++
    }
    else {
      singleObj = singleObj + x;
    }
 
  });

  console.log(indexList);
  console.log(multiObjList);
  console.log(singleObj);
  console.log(singleObjList);

}

sliceMultiObj = (arr, multiIndex, indexList) => {
  let sliced = arr.slice(indexList[multiIndex].start + 2, indexList[multiIndex].end);
  return "".concat(...sliced);
}
sliceSingleObj = (arr, index, indexList) => {
  let sliced = arr.slice(indexList[index].start + 2, indexList[index].end);
  return "".concat(...sliced);
}

const case1 = "2[a]3[bc]";
const case2 = "3[d2[e]]";
const case3 = "fg2[eset]3[hi]";
const case4 = "fg2[eset]3[hi]zumba";

unpackString(case4);