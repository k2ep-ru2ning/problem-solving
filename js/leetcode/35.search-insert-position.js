/**
 * https://leetcode.com/problems/search-insert-position/
 * lower bound를 구하는 문제
 *
 * 정렬된 배열에서 O(lgN)에 정렬을 깨지 않으면서 요소를 insert할 수 있는
 * 가장 작은 인덱스를 찾는 문제
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // lower bound
  // target이상의 요소 중 가장 왼쪽에 있는 요소의 인덱스

  let st = 0;
  let en = nums.length; // 시작 범위가 마지막 요소 뒷자리도 포함됨.
  while (st < en) {
    // st와 en이 만나면 그게 lower bound.
    const md = Math.trunc((st + en) / 2);
    if (nums[md] < target) {
      // nums[0], ..., nums[md]는 모두 target 미만이므로
      // nums[0], ..., nums[md]는 lower bound가 아니라고 한번에 판단.
      // 0, ..., md 인덱스를 갖는 요소를 탐색 범위에서 제거
      st = md + 1;
    } else {
      // nums[md] >= target
      // nums[md+1], ... nums[en]은 target이상이지만,
      // nums[md]라는 인덱스가 더 작으면서도 target이상인 요소가 있어서,
      // lower bound가 아니라고 한번에 판단.
      // md+1, ..., en 인덱스를 갖는 요소를 탐색 범위에서 제거
      en = md;
    }
  }
  return st;
};
