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
  const charList = [...expression];
  let collection = [];
  let indexList = [];
  let multiObjList = [];

  let multiIndex = 0;
  let concatenatedString = ""
  charList.forEach(x => {
    if (!!parseInt(x)) {
      indexList.push({ start: charList.indexOf(x), end: charList.indexOf("]", charList.indexOf(x)) });
      for(let i = 0; i < x - 1; i++) {
      collection.push(this.sliceMultiObj(charList, multiIndex, indexList));
      }
      multiIndex++;
   
    }
    else {
      collection.push(x);
    }
 
  });
  console.log(collection);
  let collectionFiltered = collection.filter(x => x !== "[" && x !== "]");
  let result = concatenatedString.concat(...collectionFiltered);
  console.log(indexList);
  console.log(result);

}

sliceMultiObj = (arr, multiIndex, indexList) => {
  let sliced = arr.slice(indexList[multiIndex].start + 2, indexList[multiIndex].end);
  if(sliced.includes("[")) {
   sliceMultiObj(sliced,1,)
  }
  return "".concat(...sliced);
}


const case1 = "2[a]3[bc]";
const case2 = "3[d2[e]]";
const case3 = "fg2[eset]3[hi]";

console.log("deedeedee")
unpackString(case2);