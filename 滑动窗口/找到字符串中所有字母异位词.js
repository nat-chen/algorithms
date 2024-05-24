/*
给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。
异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

示例 1:
输入: s = "cbaebabacd", p = "abc"
输出: [0,6]
解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
示例 2:
输入: s = "abab", p = "ab"
输出: [0,1,2]
解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
*/
var findAnagrams = function (s, p) {
  let left = 0;
  let right = 0;
  let freq = {};
  let count = 0;
  let result = [];

  for (const item of p) {
    freq[item] = freq[item] ? ++freq[item] : 1;
  }

  const nLen = Object.keys(freq).length;

  while (right < s.length) {
    const curR = s[right];
    right++;

    if (--freq[curR] === 0) {
      count++;
    }

    // 收窄
    while (count === nLen) {
      if (right - left === p.length) {
        result.push(left);
      }
      const curL = s[left];
      left++;
      if (++freq[curL] > 0) {
        count--;
      }
    }
  }

  return result;
};
const result = findAnagrams("cabac", "bc");

console.log(result);
