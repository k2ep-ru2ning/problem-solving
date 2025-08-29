/**
 * @param {string} s
 * @return {number}
 *
 * O(s.length)의 풀이
 */
var romanToInt = function (s) {
  const svMap = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
    ["IV", 4],
    ["IX", 9],
    ["XL", 40],
    ["XC", 90],
    ["CD", 400],
    ["CM", 900],
  ]);

  let cur = 0;
  let answer = 0;
  while (cur < s.length) {
    if (cur + 2 <= s.length) {
      const sub = s.slice(cur, cur + 2);
      if (svMap.has(sub)) {
        answer += svMap.get(sub);
        cur += 2;
        continue;
      }
    }
    const sub = s.slice(cur, cur + 1);
    answer += svMap.get(sub);
    cur++;
  }
  return answer;
};
