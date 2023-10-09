function getCurrentDay() {
  const currentDate = new Date();

  const currentDay = currentDate.getDay();

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return daysOfWeek[currentDay];
}

module.exports = {
  getCurrentDay,
};
