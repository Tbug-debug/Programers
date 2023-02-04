function solution(bin1, bin2) {
        let num1 = Number(bin1);
        let num2 = Number(bin2);
        let prNum = parseInt(num1, 2);
        let prNum2 = parseInt(num2, 2);
        let reuslt = prNum + prNum2;
        return reuslt.toString(2)
}