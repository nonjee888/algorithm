function solution(babbling) {
  let answer = 0;
  let resultArr = [];
  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i].match(/(ayaaya|yeye|woowoo|mama)/)) continue;
    // 각 1번씩만 사용하여 조합된 단어만 발음할 수 있어 중복된 단어가 나오면 계속 진행
    resultArr.push(babbling[i].replace(/(aya|ye|woo|ma)/g, ""));
    // resultArr라는 배열에 aya, ye, woo, ma를 공백으로 치환한 요소들을 넣어준다.
  }
  answer += resultArr.filter((item) => item == "").length;
  // 공백 값인 요소들의 길이를 answer에 더해 줌
  return answer;
}

const babbling = ["ayaye", "wooaya", "mata", "wooe"];
console.log(solution(babbling));
