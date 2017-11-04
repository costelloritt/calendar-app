import * as React from 'react';
import Day from '../day';
import Week from '../week';

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

export default Grid;

function getDaysCurrentMonth() {

  //var weekDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var date = new Date();
  var date1 = new Date(date.getFullYear(), date.getMonth(), 1);

  var firstDayOfWeek = date1.getDay();

  return firstDayOfWeek;

}
