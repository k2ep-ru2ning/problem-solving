/**
 * @param {string} s
 * @return {boolean}
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * 괄호 문자열을 탐색하면서 여는 괄호면 일단 기록해두고,
 * 닫는 괄호면 가장 최근에 탐색했는데 아직 매칭되지 않은 여는 괄호와 매칭되는지 체크한다.
 * 여는 괄호를 스택에 담아둔 이유는, 닫는 괄호를 만났을 때, 가장 최근에 탐색했고 아직 매칭되지 않은 여는 괄호를 빠르게 찾아야 하기 때문이다.
 */
var isValid = function (s) {
  function getOpenBracket(closeBracket) {
    const map = new Map([
      [")", "("],
      ["}", "{"],
      ["]", "["],
    ]);
    return map.get(closeBracket);
  }

  const stack = [];
  let isValid = true;

  // O(N)
  for (const ch of s) {
    if ("([{".includes(ch)) {
      // 여는 괄호는
      stack.push(ch); // 스택에 쌓기
    } else if (")]}".includes(ch)) {
      // 닫는 괄호는
      if (stack.length === 0) {
        // 스택에 여는 괄호가 없으면
        isValid = false; // 유효하지 않다고 판단.
        break;
      }
      const pairBracket = getOpenBracket(ch);
      if (stack.at(-1) !== pairBracket) {
        // 가장 최근에 추가되었고 짝을 맞추지 않은 여는 괄호화 짝을 맞출 수 없다면
        isValid = false; // 유효하지 않다고 판단.
        break;
      } else {
        // 짝을 맞출 수 있다면
        stack.pop(); // 스택에서 pop
      }
    }
  }
  if (isValid && stack.length > 0) {
    // 닫는 괄호와 짝을 다 맞추고, 스택에 남은 여는 괄호가 존재하면...
    isValid = false;
  }
  return isValid;
};
