function solution(n) {
 let arr = [];
        for (let i = 0; i <= n; i++) {
            if (n === 0) return 0;
            let devied = n / i;
            if (Number.isInteger(devied)) {
                arr.push(n / i);
            }
        }
        return arr.reduce((a, b) => a + b);
}