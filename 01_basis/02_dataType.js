"use strict" // treat all js code newyer version

//alert(3+3) ReferenceError: alert is not defined , we are using node, not browser

//console.log(3+3) console.log("xyz") //Unexpected identifier 'console'
//console.log(3+3); console.log("xyz") // not error but its not standard ,not readable (o/p:6,xyz)
//console.log(3+3)
//console.log("xyz") // its standard 

let name = "xyz" 
let bigintData = 9999999999999999; // o/p -> 10000000000000000  its hold up to 15 digits 
let age = 20
let isLoggedIn1 = true
let state = null
let Tmp;
//======== Data Types===========
// String => ""
// Number => 2 pawer 53
//bigint
//boolean => true/false
//null => standalone value
// undefined => means -> value not assined
// symble => mostly use for uniqueness
// object =>

// console.log(typeof "jack")// o/p -> string
// console.log(typeof age)// o/p -> number
// console.log(typeof isLoggedIn1)// o/p -> boolean
// console.log(typeof null)// o/p -> object its not dataType bcoz return obj
// console.log(typeof {})// o/p -> object
// console.log(typeof [])// o/p -> object
// console.log(typeof undefined)// o/p -> undefined

if([] == false){
   // console.log("exist")  //o/p:: exist (check only value blank array means false)
}else if([]===false){
    //console.log("not exist")  // value == false type === object so not exist 
}

//==========================dataType conversion confusion============================
let score = true
let data =Number(score)

//console.log(data)
//result for Number() conversion
// "12" =>  12
// "12abc" => NaN
// true => 1
// false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

//console.log(booleanIsLoggedIn) 

// result for Boolean() conversion
// isLoggedIn = 1 => true
// isLoggedIn = 0 => false
// isLoggedIn = "xyz"  => true
// isLoggedIn = ""  => false

let someNumber = true

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof(stringNumber))  

//result for Srting() conversion
//12 => 12

//========================== Operation ============================
let value = 5
let negValue = -value // result  -5

//console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)// squire => 8
// console.log(2/3) // => 0.6666...
// console.log(2%3)//% remender symble => 2

let str1 = 'jack'
let str2 = " maa"
let str3 = str1 + str2  // result jack maa

// console.log(1 + "2")  // 12
// console.log("1" + 2)  // 12
// console.log("1" + 2 + 2)  // 122
// console.log(1 + 2 + "2")  // 32
// console.log((2+2) * (5 % 3)) //  'parentheses' => means round brackets ( ) , squire brackets [ ].

// console.log(true) // result true
// console.log(+true) // result 1 
// console.log(true+) // result SyntaxError: Unexpected token 
//console.log(+"") //result 0

let num1, num2, num3 
num1 = num2 = num3 = 2+2
//console.log(num1) // 4

//******************prefix postfix js *********************
let gameCounter = 100
gameCounter++
//console.log(gameCounter) // 101

let gameCounter1 = 100
++gameCounter
//console.log(gameCounter) // 102

let x = 3;
const y = x++;

//console.log(y); // Expected output: 3

let a = 3;
const b = ++a;

//console.log(a,b); // Expected output: 4, 4

//*****************************************comparison of dataType*********** */

// console.log(2>1) // true
// console.log(2>=1) // true
// console.log(2<1) // false
// console.log(2==1) // false
// console.log(2!=1) //true

//console.log("2" > 1) // result true =>not checked data type only value 

// console.log(null > 0) // true 
// console.log(null == 0) // false => 
// console.log(null >= 0) // true => convert null into 0

// console.log(undefined > 0) // false 
// console.log(undefined == 0) // false 
// console.log(undefined >= 0) // false 

//******************** Strip check === ***************

console.log("2" == 2)  // true => ==  check only value
console.log("2" === 2) // false => === ckeck value and  type  also