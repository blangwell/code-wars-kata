function rgbToHex(r, g, b) {
  const keyMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
  let rgb = [...arguments].map((val, idx) => {
    if (val > 255) val=255;
    if (val < 0) val=0;
    val = (val / 16).toFixed(2).split('.');
    val[1] = Math.round((val[1] * 0.01) * 16);
    return val = [keyMap[val[0]], keyMap[val[1]]];
  })
  return rgb.concat().join('').replace(/,/g, '');
}

console.log(rgbToHex(100, 200, 300))

module.exports = rgbToHex;