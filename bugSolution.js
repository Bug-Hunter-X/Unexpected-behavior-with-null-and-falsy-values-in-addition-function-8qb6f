function foo(a, b) {
  // Explicitly check for null and undefined
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Handle null and undefined values
  } else if (typeof a !== 'number' || typeof b !== 'number'){
    return NaN; // Handle non-numeric values
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: 0
console.log(foo(5, null)); // Output: 0
console.log(foo(5, 5));   // Output: 10
console.log(foo(0,5));    //Output: 5
console.log(foo('',5));   //Output: NaN
console.log(foo(false,5)); //Output: NaN