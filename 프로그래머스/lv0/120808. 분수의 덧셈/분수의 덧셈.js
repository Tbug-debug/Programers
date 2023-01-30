function solution(denum1, num1, denum2, num2) {
    let denum = denum1*num2 + denum2*num1;
    let num = num1 * num2;
    let maxinum = 1
    
      for (let i = 0; i <= denum; i++) {
                    if (denum % i === 0 && num % i === 0) {
                        maximum = i;
                    }
                }

                return [denum / maximum, num / maximum];
            }