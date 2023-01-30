 function solution(arr) {
                let art = [];
                let result = [];

                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr.length; j++) {
                        if (i !== j) { // i와 j가 같지 않을때, 즉 2, 2 이렇게 같은 값으로의 덧셈을 제외 시킨다.
                            art.push(arr[i] + arr[j]);
                        }
                    }
                }

                let answer = new Set(art); // 배열의 같은 값을 Set으로 없앤다.
     
                answer.forEach((a) => {
                    result.push(a); // 다시 새로운 배열에 담는다.
                });
     
                return result.sort((a, b) => a - b); // sort를 통하여 내림차순으로 반환
            }