function solution(age) {
      let ageca = {
          0: "a",
          1: "b",
          2: "c",
          3: "d",
          4: "e",
          5: "f",
          6: "g",
          7: "h",
          8: "i",
          9: "j",
        };
        let sage = String(age);
        let arrsage = [...sage];
        let arr = [];
        arrsage.map((a) => arr.push(ageca[a]));
        return arr.join("");
}