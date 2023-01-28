function solution(lottos, win_nums) {
     let count = 0;
    let zero = 0;
    let answer = [];
    let rank = { 1: 6, 2: 5, 3: 4, 4: 3, 5: 2 };

    function makeRank(obj, value) {
        return Object.keys(obj).find((key) => obj[key] === value);
    }

    lottos.forEach((a) => {
        if (a == 0) {
            zero++;
        }
    });

    for (let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < lottos.length; j++) {
            if (lottos[i] === win_nums[j]) {
                count++;
            }
        }
    }

    let max = Math.max(count + zero);
    let min = Math.max(count);

    let maxrank = makeRank(rank, max);
    let minrank = makeRank(rank, min);
    answer.push(maxrank == undefined ? 6 : Number(maxrank), minrank == undefined ? 6 : Number(minrank));
    return answer;
}