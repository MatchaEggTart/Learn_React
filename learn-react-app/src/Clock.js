import React from 'react';

class Clock extends React.Component {
  render() {
    return (
      <div>
	<h2>Clock</h2>
	<span>It is {this.props.date.toLocaleTimeString()}.</span>
      </div>
    )
  }
}

export default Clock;
