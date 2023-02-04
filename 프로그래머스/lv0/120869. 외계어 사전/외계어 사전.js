function solution(spell, dic) {
        let reusult = dic.filter((letter) =>
          spell.every((dic) => letter.includes(dic))
        );
        return reusult.length > 0 ? 1 : 2;
}