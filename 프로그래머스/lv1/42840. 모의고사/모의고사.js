function solution(answers) {


    const supoja = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    const num = [0, 0, 0];
    const answer = [];

    for (let i = 0; i < answers.length; i++) {
        for (let j = 0; j < supoja.length; j++) {
            if (answers[i] === supoja[j][i % supoja[j].length]) num[j]++;
        }
    }

    const maxNum = Math.max(...num);
    num.forEach((a, i) => {
        if (a === maxNum) {
            answer.push(i + 1);
        }
    });

    return answer;
}
