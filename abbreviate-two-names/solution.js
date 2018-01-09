//my code//

function abbrevName(name){
    var separate = name.split(' ').map(function(name){return name[0]}).join('.');
    return separate.toUpperCase();

}

//sample tests

Test.assertEquals(abbrevName("Sam Harris"), "S.H");
Test.assertEquals(abbrevName("Patrick Feenan"), "P.F");
Test.assertEquals(abbrevName("Evan Cole"), "E.C");
Test.assertEquals(abbrevName("P Favuzzi"), "P.F");
Test.assertEquals(abbrevName("David Mendieta"), "D.M");