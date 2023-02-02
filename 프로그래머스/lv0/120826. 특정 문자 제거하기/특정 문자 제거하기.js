function solution(my_string, letter) {
       arr = [...my_string];
        let rewsu = arr.filter((a) => a !== letter);
        return rewsu.join("");
}