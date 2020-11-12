const twoSum = function(nums, target) {
  // // attempt hash table solution for better performance.
  // let numsHashTable = {};

  // // iterate over the numbers
  // // the [key] becomes val, the val becomes idx
  // // nums.forEach((val, idx) => numHashTable[val] = idx)

  // for (let i = 0; i < nums.length; i++) {
  //   let diff = target - nums[i];

  //   if (numsHashTable[diff] !== undefined && numsHashTable[diff] !== i) {
  //     return [numsHashTable[diff], i];
  //   } else {
  //     numsHashTable[nums[i]] = i
  //   }
  // }

  // let numsHashTable = {};

  // RETURNS UNDEFINED
  // nums.forEach((n, idx) => {
  //   let diff = target - n;

  //   // check if the 
  //   if (numsHashTable[diff] !== idx && numsHashTable[diff] !== undefined) return [numsHashTable[diff], idx];
  //   // else populate the hash table
  //   else numsHashTable[nums[idx]] = idx;
  // })

  let numTable = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (numTable[diff] !== undefined &&  numTable[diff] !== i) {
      return [i, numTable[diff]]
      // else add the key value pair of nums[i]: index
    } else numTable[nums[i]] = i;
  }
  

}



module.exports = twoSum;