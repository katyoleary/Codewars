function summationOfPrimes(num) {
  let primes = [];
  let result = 0;
  
  if(num < 3){
      result = 1;
      return result;
  }

  console.log('primes', primes);

  if(num >= 3) {
      primes.push(2);
  }

  for(i = 0; i < num.length - 1; i++) {
      if(i%2 != 0 && i%3 != 0 && i%5 != 0){
          primes.push(i); 
      }
  }

  primes.forEach(ele => result += ele)
  console.log('result', result);
  return 'result: ' + result;
}

summationOfPrimes(2); 