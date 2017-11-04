import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import Grid from './scenes/calendar-home/components/grid';
import MonthHeader from './scenes/calendar-home/components/month-header';

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






































// I need white space at the end of my scripts
