function foo(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  console.log(foo(10, 2)); // Output: 5
  console.log(foo(10, 0)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: "Division by zero"
}

//Alternative using Infinity:
function foo2(a,b){
  return b===0? Infinity: a/b;
}
console.log(foo2(10,0)); //Infinity
console.log(foo2(10,2)); //5