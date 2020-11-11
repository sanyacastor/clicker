import "./App.css";
import React from "react";
import Counter from "./components/Counter";

const buttons = [
  { caption: "До Нг", date: new Date(2021, 0, 1) },
  { caption: "До Др", date: new Date(2021, 8, 21) },
  { caption: "До Диплома", date: new Date(2022, 5, 25) },
];

class Button extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    return (
      <button className='button' onClick={this.props.action}>
        {this.props.caption}
      </button>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeTo: new Date(2021, 0, 1),
      caption: "До Нг",
    };
  }

  updateTime(time, caption) {
    this.setState({ timeTo: time, caption: caption });
  }

  render() {
    return (
      <>
        <div className='buttons'>
          {buttons.map((b, i) => (
            <Button
              key={i}
              caption={b.caption}
              action={() => this.updateTime(b.date, b.caption)}
            />
          ))}
        </div>
        <div className='box'>
          <Counter dateTo={this.state.timeTo} caption={this.state.caption} />
        </div>
      </>
    );
  }
}

export default App;
