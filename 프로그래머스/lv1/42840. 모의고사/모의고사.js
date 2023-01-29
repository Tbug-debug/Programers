function solution(answers) {
     const supoja = [
                    [1, 2, 3, 4, 5],
                    [2, 1, 2, 3, 2, 4, 2, 5],
                    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
                ];
                const supojaLength = [supoja[0].length, supoja[1].length, supoja[2].length];

                const num = [0, 0, 0];
                const answer = [];

                for (let i = 0; i < answers.length; i++) {
                    for (let j = 0; j < supojaLength.length; j++) {
                        if (answers[i] === supoja[j][i % supojaLength[j]]) num[j]++;
                        // answers[0] === supoja[0][0]
                        // answers[0] === supoja[0][1]
                        // answers[0] === supoja[0][2]
                        // 위와 같이 비교하여 서로 같은 값일떄 배열에 count를 + 해준다.
                    }
                }

                const maxNum = Math.max(...num); // num배열의 최고값을 구한다.
    
                num.forEach((a, i) => {
                    if (a === maxNum) { //a와 maxNum의 값을 비교하여 같으면 answer배열에 +1씩 해준다.
                        answer.push(i + 1); 
                    }
                });

             return answer;
}
