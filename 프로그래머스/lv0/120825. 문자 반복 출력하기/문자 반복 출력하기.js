function solution(my_string, n) {
    let starletter = [...my_string];
        let result = [];
        for (let i = 0; i < my_string.length; i++) {
          let letters = starletter[i].repeat(n);
          result.push(letters);
        }

        return result.join("")
}