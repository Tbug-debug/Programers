function solution(n) {
      let arr = [];
        for (let i = n; i > 0; i--) {
          if (i % 2 === 1) {
            arr.push(i);
          }
        }
        return arr.sort((a, b) => a-b);
}