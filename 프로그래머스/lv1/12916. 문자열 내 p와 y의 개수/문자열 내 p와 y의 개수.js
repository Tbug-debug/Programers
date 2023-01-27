function solution(s){
     const lower = s.toLowerCase();
    let arr = [...lower];
    let pNum = 0;
    let yNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'p') {
            pNum++;
        }
        if (arr[i] == 'y') {
            yNum++;
        }
    }
    return pNum == yNum
}