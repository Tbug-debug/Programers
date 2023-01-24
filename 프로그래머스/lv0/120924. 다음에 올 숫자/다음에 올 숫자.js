function solution(common) {
        for (let i = 0; i < common.length; i++) {
            let frontNum = common[1] - common[0];
            let backNum = common[2] - common[1];
            let equal = common[1] / common[0];

            if (frontNum == backNum) {
                return (common[common.length - 1] + frontNum);
            } else if (frontNum !== backNum) {
                return (common[common.length - 1] * equal);
    
            }
        }

}