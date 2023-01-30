function isPrime(n) {

  for (let i = 2, len = Math.ceil(Math.sqrt(n)); i <= len; i++) {
      if (n % i === 0) return false;
  }
  return true;
}

function solution(n) {
  let count = 0;
  for(let i = 1; i <= n; i++) {
      if(isPrime(i)) count++;
  }
  
  return count;
}