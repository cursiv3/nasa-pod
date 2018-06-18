import React from "react";

class DayMenu extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.month !== nextProps.month) {
      this.forceUpdate();
    }
  }

  render() {
    let numberOfDays;
    let days = [];
    switch (this.props.month) {
      case "04":
      case "06":
      case "09":
      case "11":
        numberOfDays = 30;
        break;
      case "02":
        numberOfDays = 28;
        break;
      default:
        numberOfDays = 31;
    }

    for (let day = 1; day <= numberOfDays; day++) {
      days.push(day);
    }

    return (
      <select name="month" onChange={evt => this.props.onChange(evt)}>
        {days.map(val => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    );
  }
}

export default DayMenu;
