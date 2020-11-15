const highLow = (str) => {
  let arr = str.split(' ').map(a => parseInt(a))
  
  return `${Math.max(...arr)} ${Math.min(...arr)}`

  // console.log(arr)
  // console.log(Math.min(...arr))
  // console.log(Math.max(...arr))


  // console.log(`Min :: ${Math.min(arr)}\n Max :: ${Math.max(arr)}`)
  
}

highLow('1 2 -3 4 5')

module.exports = highLow;