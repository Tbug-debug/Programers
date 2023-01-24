 function solution(s) {
     let arr = [];
     let result = '';

    s.split(' ').map((a, i) => {
        for (let i = 0; i < a.length; i++) {
            if (i % 2 == 0) {
                result += a[i].toUpperCase();
            } else {
                result += a[i].toLowerCase();
            }
        }
        arr.push(result);
        result = ' ';
    });

    return arr.join('');
}