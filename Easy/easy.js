// Easy
function myEvenOdd(numbers) {
  let odd = [];
  let even = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {

      even.push(numbers[i]);
    } else {

      odd.push(numbers[i]);
    }
  }

  // create an object with the odd and even array in it
  const ghostObject = {
    odd,
    even,
  };

  return ghostObject;
}

console.log(myEvenOdd([2, 4, 7, 11, 15, 16]));


// Easy (2)
function isPrime(num) {

  if (num === 2) {
    return true;
  } else if (num > 1) {
    for (var i = 2; i < num; i++) {

      if (num % i !== 0) {
        return true;
      } else if (num === i * i) {
        return false
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

}
function sortPrime(primeArray) {
  let prime = [];
  let notPrime = [];

  for (let number of primeArray) {
    if (isPrime(number)) {
      prime.push(number);

    } else {
      notPrime.push(number);
    }
  }
  // create an object with the prime and not prime array in it
  const ghostObject = {
    notPrime,
    prime,
  };

  return ghostObject;
}
console.log(sortPrime([69, 666, 420, 3, 7]));





