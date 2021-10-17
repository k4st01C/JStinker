const showPrimes = (n) => {
    let isPrime=false
	const primes = [2];
	for (let i = 2; i <= n; i++) {
        for (const j of primes) {
            if (primes.includes(i) || i%j===0)  {
                isPrime=false;
                break;
            }
            else isPrime=true
        }
        if (isPrime) primes.push(i)
	}
	return primes;
};

console.log(showPrimes(20));
