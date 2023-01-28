function solution(new_id) {
  const newOne = new_id
    .toLowerCase()
    .replace(/[^\w_.-]/g, '')
    .replace(/[.]{2,}/g, '.')
    .replace(/^[.]+/, '')
    .replace(/[.]+$/, '')
    .replace(/^$/, 'a')
    .substring(0, 15)
    .replace(/[.]+$/, '');

  return newOne.padEnd(3, newOne[newOne.length - 1]); //현재 문자열에 다른 문자열을 채워, 주어진 길이를 만족하는 새로운 문자열을 반환
    
}