function solution(common) {
  var answer = 0;
  for (let i = 0; i < common.length; i++) {
    const arithmetic = common[1] - common[0] === common[2] - common[1];
    //등차수열인지 판별
    if (arithmetic) {
      answer = common[i] + (common[1] - common[0]);
    } else {
      answer = common[common.length - 1] * (common[1] / common[0]);
    }
  }
  return answer;
}

const common = [1, 2, 3, 4];
// const common = [2, 4, 8, 16];
console.log(solution(common));
