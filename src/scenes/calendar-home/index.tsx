import * as React from 'react';
import Grid from './components/grid';
import MonthHeader from './components/month-header';

class Calendar extends React.Component<any, any> {

  render() {
    return (
      <div className="master-calendar">
        <MonthHeader
          currentMonth={() => getCurrentMonth()}
          startDayIndex={() => getDaysCurrentMonth()}
        />
        <Grid returnCurrentMonthDays={() => getCurrentMonth()} />
      </div>
    );
  }
}

export default Calendar;

function getCurrentMonth() {
  var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November",
                    "December"];

  var currentDate = new Date();
  var currentMonth = monthNames[currentDate.getMonth()];

  return currentMonth;
}

function getDaysCurrentMonth() {

  //var weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var date = new Date();
  var date1 = new Date(date.getFullYear(), date.getMonth(), 1);

  var firstDayOfWeek = date1.getDay();

  return firstDayOfWeek;

}
