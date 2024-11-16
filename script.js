// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {           // The function to reliably multiply two numbers 
  while (true) {    //keeps trying until it works
    try{ 
      return primitiveMultiply(a,b); //Attempt Multiplication
      } catch (error) {                            // if there is an error to catch it        
      if (!(error instanceof MultiplicatorUnitFailure)) {      // check if the error is the expected type 
       throw error;// Re throw if its not the expected error 
      }
      console.log("Didn't work Try Again!"); //log when failed multiplication
    }
  }
}
//Example 
console.log(reliableMultiply(8, 8));  // example to  run the functions 
