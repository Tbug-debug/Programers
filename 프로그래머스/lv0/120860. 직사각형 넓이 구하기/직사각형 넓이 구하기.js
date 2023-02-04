function solution(dots) {
         let x = [];
                let y = [];
                dots.filter((a) => x.push(a[0]));
                dots.filter((a) => y.push(a[1]));
                let xlength = Math.max(...x) - Math.min(...x);
                let ylength = Math.max(...y) - Math.min(...y);
                return xlength * ylength;
}