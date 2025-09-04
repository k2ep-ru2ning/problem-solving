/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
 * 구현 문제
 * O(N)
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let cur1 = list1; // list1의 커서
  let cur2 = list2; // list2의 커서
  let head = null; // 합쳐진 리스트의 head
  let tail = null; // 합쳐진 리스트의 tail
  while (cur1 !== null || cur2 !== null) {
    // cur1과 cur2 중 하나라도 끝에 도달하지 않으면, 합쳐진 리스트에 추가될 노드가 있음.
    let target = null;
    if (cur1 !== null && cur2 !== null) {
      // cur1과 cur2가 가리키는 노드가 존재할 때
      if (cur1.val <= cur2.val) {
        target = cur1; // cur1 선택
        cur1 = cur1.next; // cur1 커서 다음칸으로 이동
      } else {
        target = cur2; // cur2 선택
        cur2 = cur2.next; // cur2 커서 다음칸으로 이동
      }
    } else if (cur1 !== null && cur2 === null) {
      // cur1만 존재
      target = cur1; // cur1 선택
      cur1 = cur1.next; // cur1 커서 다음칸으로 이동
    } else {
      // cur2만 존재
      target = cur2; // cur2 선택
      cur2 = cur2.next; // cur2 커서 다음칸으로 이동
    }
    if (head === null) {
      // 합쳐진 리스트에 노드가 하나도 없다면
      head = target;
      tail = target;
    } else {
      // 합쳐진 리스트에 노드가 1개이상 있다면
      tail.next = target;
      tail = target;
    }
  }
  return head;
};
