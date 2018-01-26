'use strict';

function isNice(arr){
    let flag = [];
  
    for(var i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i] - 1) === -1 && arr.indexOf(arr[i] + 1) === -1) {
        flag.push(false);
      };
    }
  
    if (flag.length > 0 || arr.length === 0) {
      return false;
    } else {
      return true;
    }
  }

  