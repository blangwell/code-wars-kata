function findOdd(A) {
  let nums = {}

  A.forEach(a => nums[a] ? nums[a]++ : nums[a] = 1)

  for (num in nums) {
    if (nums[num] % 2 !== 0) return parseInt(num)
  }
}
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])

module.exports = findOdd
