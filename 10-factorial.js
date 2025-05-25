function factorial(n) {
    if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
const firstArgument = process.argv[2];
const num = parseInt(firstArgument);
if (isNaN(num)) {
  console.log(1);
} else {console.log(factorial(num));
}