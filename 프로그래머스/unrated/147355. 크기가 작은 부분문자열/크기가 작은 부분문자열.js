function solution(t, p) {
    let long = Array.from({ length: t.length }, (_, i) => i);
    let short = Array.from({ length: p.length }, (_, i) => i);
    let newe = 0;

    let ans = [];
    let result = [];
    let num = p / 1;

    if (short.length == 1) {
        for (let i = 0; i < long.length; i++) {
            ans.push(t.substr(i, 1));
        }
    }

     while (newe !== long.length - short.length + 1 && short.length !== 1) {
        ans.push(t.substr(newe, short.length));
        newe++;
    }

    ans.forEach((a) => {
        if (Number(a) <= num) {
            result.push(a);

        }
    });
return result.length;
}