function solution(i, j, k) {
           let arr = [];
        for (let star = i; star <= j; star++) {
          arr.push(star);
        }
        let reusult = arr.filter((a) => String(a).includes(k));
        let str = reusult.join("");
        let count = str.split(k).length - 1;
        return count;
}