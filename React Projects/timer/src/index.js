import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
import './index.css';
class TimerWraper extends React.Component {

  constructor(props) {
    super(props)
    this.state = { timeLeft: null, timeStart: null }
    this.startTimer = this.startTimer.bind(this)

  }

  startTimer(timeLeft) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      //console.log('2:InSide of set setInterval')
      var timeLeft = this.state.timeLeft - 1;
     // console.log(timeLeft)
      if (timeLeft === 0) clearInterval(timer)
      this.setState({ timeLeft: timeLeft })

    }, 1000)
    //console.log('1. After setInterval')
    return this.setState({
      timeLeft: timeLeft,
      timer: timer
    })


  }

  render() {
    return (
      <div className>
        <h3>Timer</h3>
        <div className>
          <Button  time='5' startTimer={this.startTimer} />
          <Button time='10' startTimer={this.startTimer} />
          <Button time='15' startTimer={this.startTimer} />
        </div>
        <Timer timeLeft={this.state.timeLeft} />
        <audio id='end_of_time' src='flute_c_long_01.wav' preload='auto'></audio>
      </div>
    )

  }

}

class Timer extends React.Component {
  render() {
    if (this.props.timeLeft >= 0) {
     return (<h1>time left:{this.props.timeLeft}</h1>);
    }
    if (this.props.timeLeft === null || this.props.timeLeft === 0) {
      return <h1>Done</h1>


    }
  }


}

class Button extends React.Component {
  startTimer(event) {
    this.props.startTimer(this.props.time)

  }
  render() {
    return <button type='button'  onClick={this.startTimer.bind(this)}>
      {this.props.time} seconds
    </button>
  }

}

ReactDOM.render(
  <TimerWraper />,
  document.getElementById('gg')
);
