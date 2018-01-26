//sample tests//

describe("Example Tests", function() {

    it("test dots", function(){
      Test.assertEquals(replaceDots("one.two.three"), "one-two-three", "Sorry, try again :-(");
    });
    
});

  //my code//

  var replaceDots = function(string) {
    return string.split('.').join('-');
  }
  

