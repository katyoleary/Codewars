'use strict';

function mutateMyStrings(stringOne, stringTwo){
    let resultString = stringOne + '\n';
    let firstArray = stringOne.split(''), secondArray = stringTwo.split('');
    for (let i = 0; i < stringTwo.length; i++) {
      if(firstArray[i] !== secondArray[i]) {
        firstArray[i] = secondArray[i];
        resultString += firstArray.join('') + '\n';
      }
    }
    return resultString;
  }