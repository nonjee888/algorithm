/** 초기 값 구하기
 * total / num 으로 중간 값 구함
 * 구한 중간 값에서 num / 2의 내림으로 구한 자릿수 값을 빼고
 * 그 값을 올림으로 해서 초기 값을 구한다.
 * ex) num = 4 / total = 14
 * total / num = 3.5
 * num / 2 = 2
 * 3.5 - 2 = 1.5를 올림 처리해서 초기 값은 2
 */

function solution(num, total) {
  const min = Math.ceil(total / num - Math.floor(num / 2));
  return Array.from({ length: num }, (_, i) => i + min);
}

console.log(solution(3, 22));
