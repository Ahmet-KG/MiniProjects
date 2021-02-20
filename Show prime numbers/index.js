showPrimeNumbers(20);

function showPrimeNumbers(limit){
    for (let i = 2; i <= limit; i++)
      if(isPrime(i)) console.log(i);
}

function isPrime(i) {
    for (let j = 2; j < i; j++)
      if(i % j === 0)
        return false;

    return true;
}
