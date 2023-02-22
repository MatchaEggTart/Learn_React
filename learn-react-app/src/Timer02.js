import React, { useState, useEffect } from 'react';

//转自: https://www.bilibili.com/video/BV1tV411m7Qo/?spm_id_from=333.999.0.0

// React Hook 函数组件

const Timer02 = () => {
  // useState 来控制时间状态
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  }
  // useEffect 来实现自动更新时间
  // useEffect 包含了 componentDidMount/componentWillUnmount
  useEffect(() => {
    // react-native setTimeout不会实时更新，要用 setInterval
    // setTimeout(tick, 1000);
    setInterval(tick, 1000);
  }, [time]);
  return (
    <div>
      <h1>Timer02</h1>
      <span>It's {time.toLocaleString()}.</span>
    </div>
  )
}

export default Timer02;
