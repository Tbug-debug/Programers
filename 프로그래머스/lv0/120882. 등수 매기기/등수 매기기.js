 function solution(score) {
     // 1. 평균을 구한다.
     // 2. 오름차순 정렬한다.
     // 3. 객체에 넣는다.
     
     
const scoreRecord = {};

        let average = score.map(([a, b]) => (a + b) / 2);
        average.sort((a, b) => b - a);

        average.forEach((a, i) =>
          scoreRecord[a] === undefined ? (scoreRecord[a] = i + 1) : null
        );

        console.log(scoreRecord);

       return score.map(([a, b]) => scoreRecord[(a + b) / 2]);

}
