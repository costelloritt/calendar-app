import * as React from 'react';

interface WeekProps {
  weekIndex: number,
  loadDays: any
}

function Week(props: WeekProps) {
    return (
      <div className="week">{props.loadDays()}</div>
    );
}

export default Week;
