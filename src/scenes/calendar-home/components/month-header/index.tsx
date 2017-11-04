import * as React from 'react';
import MonthChangeButton from './components/month-change-button';

interface MonthHeaderState {
  currentMonth: string,
  currentMonthStartDayIndex: number
}

interface MonthHeaderProps {
  currentMonth: any,
  startDayIndex: any
}

class MonthHeader extends React.Component <MonthHeaderProps, MonthHeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentMonth: this.props.currentMonth(),
      currentMonthStartDayIndex: this.props.startDayIndex()
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
