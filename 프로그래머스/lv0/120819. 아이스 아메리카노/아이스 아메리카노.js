function solution(money) {
    let answer = [];
    const coffe = 5500;
    const amountCoffee = Math.floor(money / coffe);
    const changeCoffee = money - coffe * amountCoffee;
    answer.push(amountCoffee, changeCoffee);
    return answer;
}