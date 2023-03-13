function solution(queue1, queue2) {
    const queue = [...queue1, ...queue2];
    let sq1 = queue1.reduce(sum, 0);
    let sq2 = queue2.reduce(sum, 0);
    
    if (sq1 === sq2) return 0;
    
    const t_sum = (sq1+sq2);

    if (t_sum%2 != 0) return -1;
    
    const h_sum = t_sum/2;
    let start = 0;
    let end = queue1.length;
    let cnt = 0;
    
    while(cnt <= queue.length*3) {
        if (h_sum === sq1) {
            return cnt;
        } else if (h_sum > sq1){
            sq1 += queue[end];
            end++;
        } else {
            sq1 -= queue[start];
            start++;
        }
        
        cnt++;
    }
    
    return -1;
}

const sum = (a, b) => a + b;