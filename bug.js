function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Incorrect handling of zero values
  }
  return a / b;
}

console.log(foo(10, 2)); // Output: 5
console.log(foo(10, 0)); // Output: 0 (Incorrect)