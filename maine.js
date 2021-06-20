//ex.1
var a = 1;
var b = 5;
console.log("A : " + a);
console.log("B : " + b);
tmp = a;
a=b;
b=tmp;

console.log("A : " + a);
console.log("B : " + b);
//ex.2
var Nom = " toto";
var Age =  30 ;
var Homme =  true ;
console.log(Nom +  " "  + Age + Homme)
//ex.3
function carre(nbre){
  return nbre*nbre;
  }
  var nbre=5;
  
  console.log(nbre + " puissance 2 = " + carre(nbre));
  
//ex 3.1
function add() { 
    let args = Array.from (arguments);
    return args.reduce(function (acc, cur) {
        return acc + cur;
    })
}

console.log(add(3,4,));
console.log(add(-2,-1,));
//ex 3.2x
function minuteToSecond(minutes) {
  return  minutes * 60;
}

console.log(minuteToSecond(4));
console.log(minuteToSecond(3));
//ex 4
function increment(n) {
  return ++n;
}   

console.log(increment(1));
console.log(increment(4));

//ex 5
function getSurface(base, hauteur) {
    return base * hauteur /2
  }
console.log(getSurface(89, 22));
console.log(getSurface(27, 43));

//ex 6

function strReverse(str) {
    return str.split("").reverse().join("");
  }
  console.log(strReverse("SAM"));
console.log(strReverse("GORJI"));

//ex 7

function getMax(a, b, c) {
  
    max = 0;
    if (a > b){
      max = a;
    } 
    else{
      max = b;
    }
    if (c > max){
      max = c;
    }
    return max;
  }

  console.log(getMax(3, 7, 11));
console.log(getMax(21, 23, 70));

//ex 8

function getFirst(tab) {
    return tab[0];
}
console.log(getFirst([17, 20, 73]));
console.log(getFirst([40, 50, 90]));

//ex 9
console.log(document.URL);

//ex 10

function resteDiv(a, b) {
    return a % b;
  }
console.log(resteDiv(5, 3));
console.log(resteDiv(8, 4));
console.log(resteDiv(7, 3));

//ex 11
function check(a, b) {
  return a + b < 100;
  }
console.log(check(7, 10));
console.log(check(76, 87));
//ex 12

function heureSeconde(heure) {
    return heure * 3600;
  }
  console.log(heureSeconde(3))
  console.log(heureSeconde(7))

//ex 13
function checkNbr(n) {
    return n <= 0;
  }
  console.log(checkNbr(1))
  console.log(checkNbr(0))
  console.log(checkNbr(-1))

//ex 14
function isEqual(nbr1, nbr2) {
    return nbr1 === nbr2
  }
  console.log(isEqual(3.6))
  console.log(isEqual(1, '1'));
  console.log(isEqual(1.1))

// ex 15

function isDivisible(n) {
    return n % 5 === 0;
  }
  console.log (isDivisible(5))
  console.log (isDivisible(10))
  console.log (isDivisible(6))

  //ex16

  function hmTos(heure, minute) {
    return (heure*3600) + (minute*60);
  }
console.log (hmTos(1, 10))
console.log (hmTos(0,59))
console.log (hmTos(0,0))

//17

function reverseTab(tab) {
    let res = [];
    for (let i = tab.length -1; i > -1; i--) {
      res.push(tab[i]);
    }
     return res;
  }
  console.log(reverseTab([1, 2, 3]));
  console.log(reverseTab([1, 1, 2, 2, 3]));
  
  //ex 18

  function getLastElem(tab) {
    return tab[tab.length - 1]
  }

  console.log(getLastElem([1, 2, 3, 4]));
  console.log(getLastElem(["Alex", "Bob", "Emily"]));

// ex 19 

function checkEq(a, b) {
  return a === b;
}

console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

//ex 20

function isEmpty(str) {
  return str.length == 0;
}

console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));
