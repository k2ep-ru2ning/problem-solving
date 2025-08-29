/**
 * @param {string[]} strs
 * @return {string}
 *
 * https://leetcode.com/problems/longest-common-prefix
 *
 * 브루트포스
 * O(strs 중 가장 짧은 문자열의 길이 * strs의 길이) => 대략 200*200
 * strs의 모든 문자열의 동일한 인덱스에 같은 문자가 있는지 체크
 * 없으면 해당 인덱스에서 탐색을 중단하고, 해당 인덱스 직전까지를 추출하면 됨.
 */
var longestCommonPrefix = function (strs) {
  const minLength = Math.min(...strs.map((str) => str.length));
  let i;
  for (i = 0; i < minLength; i++) {
    let done = false;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] !== strs[j][i]) {
        done = true;
        break;
      }
    }
    if (done) break;
  }
  return strs[0].slice(0, i);
};
