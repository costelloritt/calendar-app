import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Day from './scenes/calendar-home/components/day';
import Week from './scenes/calendar-home/components/week';

interface MonthChangeButtonProps {
  id: string
  content: string
  clickHandler: any
}

function MonthChangeButton (props: MonthChangeButtonProps) {
  return(
    <button className="month-change-button" id={props.id} onClick={props.clickHandler}>{props.content}</button>
  );
}

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

interface DayHeaderDayProps {
  dayOfWeek: string
}

function DayHeaderDay (props: DayHeaderDayProps) {
  return (
    <div className="dayHeader-day">{props.dayOfWeek}</div>
  );
}

interface DayHeaderProps {
  loadHeaderDays: any
}

function DayHeader (props: DayHeaderProps) {
  return (
    <div className="dayHeader">{props.loadHeaderDays()}</div>
  );
}

interface GridState {
  weeks: Array<any>,
  days: Array<any>,
  monthStartDay: number
}

class Grid extends React.Component <any, GridState> {
  constructor(props: any) {
    super(props);
    this.state = {
      weeks: [0,1,2,3,4,5],
      days: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      monthStartDay: getDaysCurrentMonth()
    }
  }

  // message telling the day/week index
  handleClick(iDay: string, iWeek: number) {
    alert("Day: " + iDay + "\nWeek: " + iWeek.toString());
  }

  renderDayHeader() {
    var daysHeaderArray = Array(this.state.days.length);

    for (let i = 0; i < this.state.days.length; i++) {
      daysHeaderArray[i] = (<DayHeaderDay
                              dayOfWeek={this.state.days[i].substring(0,3)}
                            />);
    }

    return daysHeaderArray;
  }

  buildDayHeader() {
    return (
      <DayHeader loadHeaderDays={() => this.renderDayHeader()} />
    );
  }

  // create one array of seven Day components
  // this is the contents of the Week component
  renderWeek(iWeek: number) {
    var daysArray = Array(this.state.days.length);

    for (let i = 0; i < this.state.days.length; i++) {
      daysArray[i] = (<Day
                        dayIndex={this.state.days[i]}
                        clickHandler={() => this.handleClick(this.state.days[i], iWeek)}
                     />);
    }

    return daysArray;
  }

  // create one array of six Week components
  // this is the content of the calendar "grid"
  renderGrid() {
    var weeksArray = Array(this.state.weeks.length);

    for (let i = 0; i < this.state.weeks.length; i++) {
      weeksArray[i] = (<Week
                        weekIndex={this.state.weeks[i]}
                        loadDays={() => this.renderWeek(this.state.weeks[i])}
                      />);
    }

    return weeksArray;
  }

  render () {
    return(
      <div className="grid">      
        {this.buildDayHeader()}
        {this.renderGrid()}
      </div>
    );
  }
}

class Calendar extends React.Component<any, any> {

  render() {
    return (
      <div className="master-calendar">
        <MonthHeader />
        <Grid />
      </div>
    );
  }
}

ReactDOM.render(<Calendar />, document.getElementById('root'));


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






































// I need white space at the end of my scripts
