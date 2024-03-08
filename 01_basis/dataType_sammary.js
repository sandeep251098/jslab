// data type 1.primitive 2. non-primitive
// data type means in what way to store in memory in that way to access

// 1.primitive => its is callbyvalue isko  refrence nahi diya jata hai,  copy diya jata hai any changes into copy
// 7 type : 
//1. string, 
//2. number 
//3. boolean , 
//4. null(means khali), 
//5. undefined => declere value not assign, memory space declare
//6. symbol => use kisi bhi value for unique bnane k liye
//7. BigInt => use for large value handle
//exam
let stringExam = "xyz"
let numberExam = 12
let booleanExam = 1.6
let nullExam = null
let undefinedExam;

let id = Symbol("123")
let anotherId = Symbol("123")
//console.log(id === anotherId)  // false

const BigIntExam = 11224353464576765n 



// 2.Reference type (non-primitive)

//1. array
//2. object
//3. functions

 const arrayExample = ["ajay","sanny","sunil"];

let objectExam = {name:"xyz",age:12,OS:functionsExam()} // data type something like number sarting functions

const functionsExam = function(){
    console.log(window)
}

//***** que: javascript dynamic typed language or statically language 
// ans: JavaScript is a dynamically typed language
// exam : const data = 3 auto recognize type

console.log(typeof(functionsExam)) // function
console.log(typeof(nullExam)) // null ka dataType =>  object  
console.log(typeof(arrayExample)) // object
console.log(typeof(objectExam)) // object
