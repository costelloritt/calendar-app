import * as React from 'react';

interface DayHeaderProps {
  loadHeaderDays: any
}

function DayHeader (props: DayHeaderProps) {
  return (
    <div className="dayHeader">{props.loadHeaderDays()}</div>
  );
}

export default DayHeader;
