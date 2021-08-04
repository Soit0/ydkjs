function polluteTheScope() {
  console.log("this function polutes the scope namespace");
}

console.log(polluteTheScope)

/*
(function doesNotPolluteScope() {
    console.log("this function doesn't polutes the scope namespace")
})()// IIFE : The function is immediately called and executed
*/

try {
    console.log(doesNotPolluteScope)
} catch (error) {
    console.log('can"t log the function because not defined in the global scope')
} // this function doesn't exist in the global scope

  // IIFE allow anonymous function
  (function (param) {
    console.log(param)
  }
)("Anonymous IIFE !");

//  We can use anonymous functions as paramaters for other functions. It's although recommended to always name function expressions