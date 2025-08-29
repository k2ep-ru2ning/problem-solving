/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // O(N) 풀이
  // 1. x < 0 음수인 정수는 -기호 때문에 팰린드롬이 아니라고 바로 판단 가능.
  // 2. x === 0 인 경우는 0은 팰린드롬이라고 바로 판단 가능.
  // 3. x > 0에 대해
  //    O(N)에 x의 모든 자리수를 추출하고,
  //    st, en이라는 포인터를 양끝에 두어서
  //    st는 오른쪽으로, en은 왼쪽으로 이동하면서 같은지 여부를 체크.
  if (x < 0) return false; // 음수.
  else if (x === 0) return true; // 0.

  // 양수.
  const digits = [];
  while (x > 0) {
    // x의 각 자리수를 추출.
    digits.push(x % 10);
    x = Math.trunc(x / 10);
  }
  digits.reverse();

  // 포인터를 활용해 양끝을 비교.
  let st = 0,
    en = digits.length - 1;
  let result = true; // 초기에는 팰린드롬이라고 설정.
  while (st < en) {
    // 같은 곳을 가리키거나 엇갈리면 중단.
    if (digits[st] !== digits[en]) {
      // 비교하고
      result = false; // 다르면 루프 중단.
      break;
    }
    // 비교했을 때 같다면, 다음 위치로 포인터 이동.
    st++;
    en--;
  }
  return result;
};
