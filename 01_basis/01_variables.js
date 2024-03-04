const accountId = 12345;

//accountId = 20; // This will result (error) in "Assignment to constant variable" error
// accountId = 1  // not allowed  //Assignment to constant variable error
//console.log(accountId) 

let accountEmail = "saim251098@gmail.com";
var accountPassword = "123456"
 accountCity = "jaypur"
 accountCity ="bangaluru" // result bangaluru reinitialize

 accountEmail = "saim251098@gmail";
 accountPassword = "21212"



let accountState;// only declare results undefined
var accountState1; // only declare results undefined
var accountState2; // only declare results undefined
/*
prefer not to use  var
because of issue is block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState,accountState1,accountState2]) 