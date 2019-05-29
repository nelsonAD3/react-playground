import React, { Component } from 'react';


class Counter extends React.Component {
    static defaultProps = {
        step: 1  // green
      };

    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { 
            count: 0
        }
      }

    //   const step = 5;
      handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props)
        console.log('state in handleButtonClick', this.state)
        console.log('state in handleButtonClick', this.props.step)
        this.setState({ count: this.state.count + this.props.step })
      }
      render() {
        return (
          <div>
            <p>The current count: {this.state.count}</p>
            <button onClick={this.handleButtonClick}>
              Add 5
            </button>
          </div>
        )
      }
  }

export default Counter