/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * 비내림차순으로 정렬된 정수 배열 nums에서 중복된 요소를 제거.
 * 단, in-place로 해결해야 됨
 *
 * 처음에는 중복된 요소들을 splice 메서드로 제거하고 했음
 * splice가 O(N)이므로, 최악의 경우 O(N^2)
 *
 * 동일한 값을 갖는 요소 중 마지막 요소를 발견할 때마다
 * 배열의 앞쪽에 기록하는 방법을 쓰면
 * O(N) 배열 탐색만으로 해결 가능
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 0; // 유니크한 요소의 개수
  for (let i = 0; i < nums.length; i++) {
    // for 문 안에서 항상 count <= i 임.
    if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
      // nums의 끝 요소이거나, 같은 값을 갖는 요소 중 마지막 요소를 발견하면
      // nums[count]에 기록하고
      // count 값도 1증가.
      nums[count++] = nums[i];
    }
  }
  return count;
};
