import * as React from 'react';

interface DayProps {
  dayIndex: string,
  clickHandler: any
}

function Day (props: DayProps) {
    return(
      <div className="day" onClick={props.clickHandler}></div>
    );
}

export default Day;
