import * as React from 'react';

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

export default MonthChangeButton;
