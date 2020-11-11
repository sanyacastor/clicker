import React from "react";


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: this.getTime(),
    };
    this.updateTime = this.updateTime.bind(this);
  }

  updateTime() {
    this.setState((previous) => {
      return {
        seconds: this.getTime(),
      };
    });
  }
  componentDidMount() {
    setInterval(this.updateTime, 100);
  }

  getTime() {
    let ms = this.props.dateTo - new Date();
    let seconds = Math.floor(ms / 1000);
    let str = "",
      minutes = 0,
      hours = 0,
      days = 0;
    minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;

    if (minutes) {
      hours = Math.floor(minutes / 60);
      minutes -= hours * 60;
      if (hours) {
        days = Math.floor(hours / 24);
        hours -= days * 24;
        if (days) {
          str += ` ${days} д.`;
        }
        str += ` ${hours} ч.`;
      }
      str += ` ${minutes} мин.`;
    }
    str += ` ${seconds} сек.`;

    return str;
  }
//до др, до диплома 2022 (25 июня)
  render() {
    return (
      <div>
        {this.props.caption} <br /> {this.state.seconds}
      </div>
    );
  }
}

export default Counter