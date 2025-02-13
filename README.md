# Division by Zero Bug in JavaScript

This repository demonstrates a common bug in JavaScript: incorrect handling of division by zero. The `foo` function attempts to handle zero values, but it incorrectly returns 0 instead of throwing an error or returning Infinity. This can lead to unexpected results and program crashes.

## Bug

The `bug.js` file contains the flawed function. It returns 0 when either `a` or `b` is 0, whereas it should ideally throw an error or return `Infinity` for division by zero.

## Solution

The `bugSolution.js` file demonstrates the correct implementation. It uses a `try-catch` block to handle the potential error of dividing by zero. The solution handles this edge case gracefully, preventing program crashes and providing a more informative output.