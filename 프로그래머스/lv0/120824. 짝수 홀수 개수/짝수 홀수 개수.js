function solution(num_list) {
         let even = num_list.filter((a) => a % 2 == 0);
        let odd = num_list.filter((a) => a % 2 == 1);
        let answer = [even.length, odd.length];
        return answer;
}