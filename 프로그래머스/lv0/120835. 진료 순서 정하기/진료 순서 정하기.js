function solution(emergency) {
    let arr = [...emergency];
        let mapObj = new Map();
        for (let i = 0; i < emergency.length; i++) {
          mapObj.set(arr.sort((a, b) => b - a)[i], i + 1);
        }

        let reusult = emergency.map((a) => mapObj.get(a));
        return reusult;
}