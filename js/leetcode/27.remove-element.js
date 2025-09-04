/**
 * https://leetcode.com/problems/remove-element/
 *
 * 26.remove-duplicates-from-sorted-array 문제와
 * 비슷하게 접근
 *
 * nums 배열을 순차탐색할 것. O(N).
 * nums 배열 앞쪽부터 val이 아닌 값을 채울 것
 * 몇개 채웠는지 나타내는 변수 count
 * nums를 순차탐색하다가 val이 아닌 요소를 만나면
 * nums[count]에 할당하고
 * count 값을 1증가시키면 됨
 * 루프안에서는 count <= i이므로 문제가 생기는 경우 없음
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }

  return count;
};
