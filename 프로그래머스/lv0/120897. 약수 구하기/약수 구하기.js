function solution(n) {
      let answer = [];
        for (let i = n; i >= 0; i--) {
          let num = n / i;
          if (Number.isInteger(num)) {
            answer.push(num);
          }
        }
        return answer
}