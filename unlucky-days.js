function unluckyDays(year){
  let result = 0; // store the result
  // create a date object with the provided year
  const date = new Date(year, 0, 1);
  // get day returns an integer between 0-6
  let dayName;
  // 0 being sunday, 6 being saturday
  // that would make friday 5

  // determine if the year is a leap year

  // loop through each day
  for (let i = 0; i < 365; i++) {
    dayName = date.getDay();
    dateNumber = date.getDate();
    let tomorrow = date.getDate() + 1
    date.setDate(tomorrow)
    if (dayName === 5 && dateNumber === 13) {
      result++
    }
    console.log(date)
  }
  return result;
}