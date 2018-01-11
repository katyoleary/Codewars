'use strict';

//insert dashes by:katy robinson//

function insertDash(num) { 
    var newstring = '';
       num = num.toString();
      
      for (var i=0; i<num.length; i++){
    var current;
    var prev;
          parseInt(num[i])%2 == 0 ? current='even' : current='odd';
          if (current=='odd' && prev=='odd'){
              newstring = newstring + '-' + num[i];
              var prev ='odd';
          } else {
              newstring = newstring + num[i];
               prev = current;
          }
      }
  
    return newstring; 
           
  }
  

//test code//

Test.assertEquals(insertDash(454793),'4547-9-3');
Test.assertEquals(insertDash(123456),'123456');
Test.assertEquals(insertDash(1003567),'1003-567');