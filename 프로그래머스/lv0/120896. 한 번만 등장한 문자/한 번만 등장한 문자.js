function solution(s) {
       let arr = [...s];
        let newArr = [];
        let reusult = [];
        for (let i = 0; i < arr.length; i++) {
          newArr.push(arr.filter((a) => a === arr[i]));
        }
        for (let j = 0; j < newArr.length; j++) {
          if (newArr[j].length === 1) {
            reusult.push(...newArr[j]);
          }
        }
        return reusult.sort().join("");
}