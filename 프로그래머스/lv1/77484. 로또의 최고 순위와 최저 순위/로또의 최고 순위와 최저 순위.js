function solution(lottos, win_nums) {
     let count = 0;
    let zero = 0;
    let answer = [];
    let rank = { 1: 6, 2: 5, 3: 4, 4: 3, 5: 2 };

    function makeRank(obj, value) {
        return Object.keys(obj).find((key) => obj[key] === value); //오브젝트의 키를 통해서 value와 같을시에 key를 반환한다 
    }

    lottos.forEach((a) => {
        if (a == 0) {
            zero++; // 0일때는 zero 카운트를 올려준다.
        }
    });

    for (let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < lottos.length; j++) {
            if (lottos[i] === win_nums[j]) {
                count++; // 로또의 당첨번호와 로또 구매자 번호가 일치할 경우 count를 올려준다.
            }
        }
    }

    let max = count + zero; // zero와 count의 값을 더하면 최고 순위가 나온다.
    let min = count; //count만 할 경우 최저 순위가 나온다. 

    let maxrank = makeRank(rank, max); // 최고순위를 makeRank에 넣고 반환
    let minrank = makeRank(rank, min); // 최저순위를 minrank에 넣고 반환
    
    answer.push(maxrank == undefined ? 6 : Number(maxrank), minrank == undefined ? 6 : Number(minrank));
    return answer;
}