function solution(n) {
     let sq = Math.sqrt(n);
        if (sq % 1 === 0) {
            let ans = Math.floor(Math.pow(sq + 1, 2));
            return ans;
        } else {
            return -1;
        }
}