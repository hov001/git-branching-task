const fib = (n) => {
  if(n === 2 || n === 1) {
    return n - 1
  } else if (n === 0) {
    return 0 
  } else {
    return fib(n - 1) + fib(n - 2)
  }
};


console.log(fib(5))