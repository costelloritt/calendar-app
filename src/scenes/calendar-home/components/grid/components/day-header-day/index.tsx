import * as React from 'react';

interface DayHeaderDayProps {
  dayOfWeek: string
}

function DayHeaderDay (props: DayHeaderDayProps) {
  return (
    <div className="dayHeader-day">{props.dayOfWeek}</div>
  );
}

export default DayHeaderDay;
