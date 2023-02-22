import React from 'react';

//转自: https://www.bilibili.com/video/BV1tV411m7Qo/?spm_id_from=333.999.0.0

// 传统类组件
class Timer01 extends React.Component {

  state = {
    time: new Date()
  };

  tick = () => {
    this.setState((state) => {
      return { time: new Date() };
    });
  }

  timer = null;
  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  render() {
    return (
      <div>
	<h1>Timer01</h1>
	<h2>It's {this.state.time.toLocaleString()}.</h2>
      </div>
    );
  }
}

export default Timer01;
