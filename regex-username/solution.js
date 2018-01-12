'use strict';

//codewars regex username by: katy robinson//

function validateUsr(username) {
  
    if (username.length < 4 || username.length > 16) {
      res = false;
    }  else {
    res =  /^[a-z0-9_]+$/.test(username);
    }
    return res
  }


  