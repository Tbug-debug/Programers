          function solution(s) {
                let answer = [];
                for (let i = 0; i < s.length; i++) {
                    if (s[i] !== s[i + 1]) { 
                        answer.push(s[i]);
                    }
                }
                return answer;
            }
