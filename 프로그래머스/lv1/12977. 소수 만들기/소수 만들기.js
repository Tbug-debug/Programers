function solution(num) {
    let answer = 0;
    let arr = [];

    for (let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            for (let k = j + 1; k < num.length; k++) {
                arr.push(num[i] + num[j] + num[k]); // 3중 for문으로 3개의 숫자를 더한다.
            }
        }
    }

    arr.forEach((num) => { // 3개의 값을 더한 배열을 forEach를 돌려 소수인 것만 answer +1을 한다.
        function isPrime(num) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false; // 소수가 아닌건 false로 반환한다.
            }
            // 소수는 1보다 큰 정수이다
            return num > 1;
        }

        if (isPrime(num)) answer += 1; // 소수일 경우 answer에 1을 더해준다.
    });

    return answer;
}