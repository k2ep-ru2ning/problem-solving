/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * String.prototype.indexOf 메서드 사용 또는 직접 구현
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // return haystack.indexOf(needle);
  let idx = -1;
  for (let i = 0; i + needle.length <= haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      idx = i;
      break;
    }
  }
  return idx;
};
