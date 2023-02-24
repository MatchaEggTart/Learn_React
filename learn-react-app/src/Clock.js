import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({ date: new Date() })
  }
  
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  
  render() {
    return (
      <div>
	<h2>Clock</h2>
	<span>{this.state.date.toLocaleString()}</span>
      </div>
    )
  }
}
export default Clock;
