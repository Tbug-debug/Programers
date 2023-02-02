function solution(sides) {
        let num = sides.sort((a, b) => b - a);
        if (num[0] >= num[1] + num[2]) {
          return(2);
        } else {
          return (1);
        }
}
