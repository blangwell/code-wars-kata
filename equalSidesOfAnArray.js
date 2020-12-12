// given an array of ints, find index N
// where the sum of ints to the left and right are ===
// if no index that would make this happen
// return -1

exports.findEvenIndex = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let mid = i;
    let low = arr.slice(0, mid).reduce((a, b) => a + b, 0);
    let high = arr.slice(mid + 1, arr.length).reduce((a, b) => a + b, 0);
    if (low === high) return mid;
  }
  return -1;
};

exports.findEvenIndex([1, 2, 3, 6, 9, 2, 1])