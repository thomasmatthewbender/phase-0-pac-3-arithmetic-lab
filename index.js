function add(num1, num2) {
    let sol = num1 + num2
    return sol
}

function subtract(num1, num2) {
    let sol = num1 - num2
    return sol
}

function multiply(num1, num2) {
    let sol = num1 * num2
    return sol
}

function divide(num1, num2) {
    let sol = num1 / num2
    return sol
}

function increment(n) {
    n === 1
    return (n += 1);
  }

  function decrement(n) {
    n === 1
    return (n -= 1);
  }

  function makeInt(n) {
    n === "1"
    const parse = parseInt(n, 10)
    if (isNaN(parse)) { return NaN; }
    return (parse)
  }
  
  function preserveDecimal(n) {
    n === "1.5"
    const parse = parseFloat(n)
    return (parse)
  }