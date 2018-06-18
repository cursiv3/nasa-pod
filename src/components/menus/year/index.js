import React from "react";

const YearMenu = props => {
  let years = [];
  for (var j = 1995; j <= props.date; j++) {
    years.push(j);
  }
  years = years.reverse();
  return (
    <select name="year" onChange={evt => props.onChange(evt)}>
      {years.map(val => {
        return <option key={val} value={`${val}`}>{`${val}`}</option>;
      })}
    </select>
  );
};

export default YearMenu;
