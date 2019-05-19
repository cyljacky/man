var moment = require('moment');

// this function can be more general, but due to now has no further use, some features are hard-coded.
function generateEmptyTimelineList(timeAmount, timeUnit = 'd') {
  var currDate = moment().minute(0).second(0).millisecond(0);
  var timelineList = [];
  if (timeAmount === 1) {
    var startDate = moment(currDate).subtract(24, 'hours');
    while (startDate.isBefore(currDate)) {
      timelineList.push({
        time: startDate.format("Y-MM-DD HH:mm:ss.SSS")
      });
      startDate.add(1, 'hours');
    }
  } else {
    currDate.hour(0);
    var startDate = moment(currDate).subtract(timeAmount, 'days');
    while (startDate.isBefore(currDate)) {
      timelineList.push({
        time: startDate.format("Y-MM-DD HH:mm:ss.SSS")
      });
      startDate.add(1, 'days');
    }
  }
  return timelineList;
}

module.exports = { generateEmptyTimelineList };