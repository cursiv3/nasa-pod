import React from "react";
import "./main.css";
import MonthMenu from "./menus/month";
import YearMenu from "./menus/year";
import DayMenu from "./menus/day";

const config = require("../config");

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      month: "01",
      year: "2018",
      day: "05",
      image: "",
      data: null,
      date: new Date().getFullYear()
    };
    this.onChange = this.onChange.bind(this);
  }

  getPicture() {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${config.api_key}&date=${
        this.state.year
      }-${this.state.month}-${this.state.day}`
    )
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ image: json.hdurl, data: json });
      });
  }

  onChange(evt) {
    let update = {};
    update[evt.target.name] = evt.target.value;
    this.setState(update);
  }

  render() {
    let currentYr = new Date().getFullYear();
    return (
      <div className="App">
        {this.state.image !== "" && (
          <img className="main-image" src={this.state.image} />
        )}
        <MonthMenu date={this.state.date} onChange={this.onChange} />
        <YearMenu date={this.state.date} onChange={this.onChange} />
        <DayMenu month={this.state.month} onChange={this.onChange} />
        <button onClick={() => this.getPicture()}>Get Picture</button>
      </div>
    );
  }
}

export default App;
