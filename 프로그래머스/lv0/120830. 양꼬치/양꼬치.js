function solution(n, k) {
    const food = 12000;
    const drink = 2000;
    const service = ~~(n / 10);
    return n * food + k * drink - service * drink;
}