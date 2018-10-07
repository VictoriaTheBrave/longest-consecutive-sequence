module.exports = function longestConsecutiveLength(array) {
  if (array.length < 2) {
    return array.length;
  }
  const set = new Set(array);
  let longestConsecutive = 1;
  for (let i = 0; i < array.length; i++) {
    let left = array[i] - 1;
    let right = array[i] + 1;
    let count = 1;
    while (set.has(left)) {
      count++;
      set.delete(left);
      left--;
    }
    while (set.has(right)) {
      count++;
      set.delete(right);
      right++;
    }
    longestConsecutive = Math.max(count, longestConsecutive);
  }
  return longestConsecutive;
}
