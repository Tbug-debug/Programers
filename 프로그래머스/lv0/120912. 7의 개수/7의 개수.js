function solution(array) {
          let arr = array.join("");
        let reusult = arr.match(/7/g);

        return reusult ? reusult.length : 0
}