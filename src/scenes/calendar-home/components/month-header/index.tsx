import * as React from 'react';
import MonthChangeButton from './components/month-change-button';

interface MonthHeaderState {
  currentMonth: string,
  currentMonthStartDayIndex: number
}

class MonthHeader extends React.Component <any, MonthHeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentMonth: getCurrentMonth(),
      currentMonthStartDayIndex: getDaysCurrentMonth()
    };
  }

  handleClick(navButtonID: string) {
    var navDir;
    var currentStateCopy: string;
    var newMonth: string;

    if (navButtonID === "prev-month") {
      navDir = -1;
    }
    else
      navDir = 1;

    newMonth = getMonth(navDir, this.state.currentMonth);

    currentStateCopy = this.state.currentMonth;
    currentStateCopy = newMonth;

    this.setState({
      currentMonth: currentStateCopy
    });
  }

  render() {
    return(
      <div className="monthHeader">
        <MonthChangeButton content="Prev" id="prev-month" clickHandler={() => this.handleClick("prev-month")}/>
        {this.state.currentMonth}
        <MonthChangeButton content="Next" id="next-month" clickHandler={() => this.handleClick("next-month")}/>
      </div>
    );
  }
}

export default MonthHeader;

function getCurrentMonth() {
  var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November",
                    "December"];

  var currentDate = new Date();
  var currentMonth = monthNames[currentDate.getMonth()];

  return currentMonth;
}

function getMonth(navDirection: number, currentMonth: string) {
  var monthNames = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November",
                    "December"];

  var newMonth = "";

  for (let i = 0; i < monthNames.length; i++) {
    if (currentMonth === monthNames[i]) {
      if (i === 0 && navDirection === -1) {
        i = 11;
        newMonth = monthNames[i];
      }
      else if (i === 11 && navDirection === 1) {
        i = 0;
        newMonth = monthNames[i];
      }
      else
        newMonth = monthNames[i + navDirection];
      break;
    }
  }

    return newMonth;
}

function getDaysCurrentMonth() {

  //var weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var date = new Date();
  var date1 = new Date(date.getFullYear(), date.getMonth(), 1);

  var firstDayOfWeek = date1.getDay();

  return firstDayOfWeek;

}
