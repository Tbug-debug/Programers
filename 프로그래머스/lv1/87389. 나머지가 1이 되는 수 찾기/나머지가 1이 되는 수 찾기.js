function solution(n) {
let count = 1;
        while (n % count !== 1) {
            count++;
        }
        return count;
}