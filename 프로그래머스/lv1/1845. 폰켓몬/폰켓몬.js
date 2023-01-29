function solution(nums) {


    let length = nums.length / 2; // N/2를 한다.

    let arr = nums.filter((element, index) => { // nums로 받는 배열 안에 같은 원소를 다 제거한다.
        return nums.indexOf(element) === index;
    });

    if (arr.length >= length) { // 만약 같은 값을 제거한 배열의 length가 N/2한 것보다 클 경우,
        return length // N/2가 정답.
    } else if (arr.length < length) { // 그 반대일경우,
        return arr.length // arr이 정답
    }
}