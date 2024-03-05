"use strict" // treat all js code newyer version

//alert(3+3) ReferenceError: alert is not defined , we are using node, not browser

//console.log(3+3) console.log("xyz") //Unexpected identifier 'console'
//console.log(3+3); console.log("xyz") // not error but its not standard ,not readable (o/p:6,xyz)
console.log(3+3)
console.log("xyz") // its standard 

let name = "xyz" 
let bigintData = 9999999999999999; // o/p -> 10000000000000000  its hold up to 15 digits 
let age = 20
let isLoggedIn = true
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

console.log(typeof "jack")// o/p -> string
console.log(typeof age)// o/p -> number
console.log(typeof isLoggedIn)// o/p -> boolean
console.log(typeof null)// o/p -> object its not dataType bcoz return obj
console.log(typeof {})// o/p -> object
console.log(typeof [])// o/p -> object
console.log(typeof undefined)// o/p -> undefined

if([] == false){
    console.log("exist")  //o/p:: exist (check only value blank array means false)
}else if([]===false){
    console.log("not exist")  // value == false type === object so not exist 
}
 
