import * as React from 'react';
import Grid from './components/grid';
import MonthHeader from './components/month-header';

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

export default Calendar;
