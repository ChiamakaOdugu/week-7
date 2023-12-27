// Write a function that calculates the factorial of a given number. 
 
 
function CalFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }
    return factorial;
  }
  const calNumber = 40;
  const result = CalFactorial (calNumber);
  console.log(`The factorial of ${calNumber} is : ${result}`);