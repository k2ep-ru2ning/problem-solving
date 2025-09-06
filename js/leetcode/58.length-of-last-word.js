/**
 * https://leetcode.com/problems/length-of-last-word/
 *
 * split, trim 등 String.prototype 메서드 활용
 *
 * split 신기한 부분
 *
 * separator "a"가 대상 문자열 "aba"의 시작과 끝에 나타나는 경우,
 * 결과 배열의 시작과 끝에 "" 요소가 추가
 * "aba".split("a") -> ["", "b", ""]
 *
 * separator "a"와 대상 문자열 "a"가 같은 경우,
 * 문자열 "a"의 시작과 끝에 separator 있다고 판단해서
 * 결과 배열의 시작과 끝에 "" 요소 추가 (즉 빈문자열 두개 추가)
 * "a".split("a") -> ["", ""]
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // return s.split(/\s+/)
  //     // 공백에 해당하는 separator가 문자열 s의 처음과 끝에 있으면,
  //     // split 결과의 첫 요소로 "", 끝 요소로 ""가 추가됨.
  //     // 그걸 제거하기 위한 filter.
  //     .filter(w => w !== "")
  //     .at(-1).length;

  // split 메서드 호출 결과에서 filter로 공백 제거하기 싫다면
  // 미리 trim으로 좌우 공백 제거후 split
  return s.trim().split(/\s+/).at(-1).length;
};
