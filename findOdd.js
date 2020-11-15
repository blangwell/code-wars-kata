function findOdd(A) {
  let nums = {}

  for (let item of A) {
  if (nums[item] !== undefined) nums[item]++
  else nums[item] = 1
  }

  for (num in nums) {
    if (nums[num] % 2 !== 0) return parseInt(num)
  }
}
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])

module.exports = findOdd
