function CurrentDays() {
  const currentDate = new Date();

  const currentDay = currentDate.getDay();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  console.log(daysOfWeek[currentDay]);

  return daysOfWeek[currentDay];
}

module.exports = {
  CurrentDays,
};
