function solution(n) {
        const answer = [];
     const uniqueArr = [];

        while (n % 2 === 0) {
          answer.push(2);
          n /= 2;
        }

        for (let i = 3; i <= n; i += 2) {
          while (n % i === 0) {
            answer.push(i);
            n /= i;
          }
        }

        if (n > 2) answer.push(n);
        
    
            answer.forEach((element) => {
          if (!uniqueArr.includes(element)) {
            uniqueArr.push(element);
          }
        });

        return uniqueArr;
}