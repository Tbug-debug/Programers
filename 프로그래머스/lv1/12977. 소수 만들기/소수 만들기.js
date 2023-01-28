function solution(num) {
    let answer = 0;
    let arr = [];

    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            for (let k = j + 1; k < num.length; k++) {
                arr.push(num[i] + num[j] + num[k]);
            }
        }
    }

    let kum = arr.forEach((num) => {
        function isPrime(num) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return num >= 2;
        }

        if (isPrime(num)) answer += 1;
    });

    return answer;
}