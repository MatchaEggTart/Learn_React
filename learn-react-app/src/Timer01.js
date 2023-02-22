import React from 'react';

//转自: https://www.bilibili.com/video/BV1tV411m7Qo/?spm_id_from=333.999.0.0

// 传统类组件
class Timer01 extends React.Component {

  // 组件的状态
  state = {
    time: new Date()
  };

  tick = () => {
    this.setState((state) => {
      return { time: new Date() };
    });
  }

  timer = null;

  // 利用 componDidMount 这个生命函数实现时间实时更新
  componentDidMount() {
    // 每一秒触发一次 tick函数
    this.timer = setInterval(this.tick, 1000);
  }

  // 利用 componetWillUnmount 生命函数卸载定时器
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  render() {
    return (
      <div>
	<h1>Timer01</h1>
	<span>It's {this.state.time.toLocaleString()}.</span>
      </div>
    );
  }
}

export default Timer01;
