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

//Main fuction 
const unpackString = (expression) => {
  const charList = [...expression];
  let concatenatedString = ""
  let collection = this.iterateExpression(charList);
  let collectionFiltered = collection.filter(x => x !== "[" && x !== "]");
  let result = concatenatedString.concat(...collectionFiltered);
  console.log(result);
}


//This function iterate over collection of chars and push to result array
iterateExpression = (charList) => {
  let collection = [];
  let indexList = [];
  let multiObjList = [];
  let multiIndex = 0;

  //If char = number use fuction sliceMultiObject to slice chars between [] and push to array
  charList.forEach(x => {
    if (!!parseInt(x)) {
      indexList.push({ start: charList.indexOf(x), end: charList.indexOf("]", charList.indexOf(x)) });
      //This loop push sliced chars multiply time if i < number - 1. -1 because 1 push was made from else instructions char by char
      for (let i = 0; i < x - 1; i++) {
        collection.push(this.sliceMultiObj(charList, multiIndex, indexList));
      }
      multiIndex++;
    }
    else {
      collection.push(x);
    }

  });
  return collection
}

//This function sliced chars between [] and return concatenated
sliceMultiObj = (arr, multiIndex, indexList) => {
  let sliced = arr.slice(indexList[multiIndex].start + 2, indexList[multiIndex].end);

  //If sliced array inculdes char "[" make iteration for inside multi object
  if (~sliced.indexOf("[")) {
    let insideCollection = this.iterateExpression(sliced);
    // Replace "[" char last char from sliced array
    let indexToSplice = insideCollection.indexOf("[");
    if( ~indexToSplice ) {
      insideCollection[indexToSplice] =  sliced[sliced.length - 1];
    }
    return "".concat(...insideCollection);
  }
  return "".concat(...sliced);
}

//Cases to check

const case1 = "2[a]3[bc]";
const case2 = "3[d2[e]]";
const case3 = "fg2[eset]3[hi]";

// Main function call
unpackString(case2);