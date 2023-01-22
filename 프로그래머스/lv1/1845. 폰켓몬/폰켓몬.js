function solution(nums) {


    let length = nums.length / 2;

    let arr = nums.filter((element, index) => {
        return nums.indexOf(element) === index;
    });

    if (arr.length >= length) {
        return length
    } else if (arr.length < length) {
        return arr.length
    }
}