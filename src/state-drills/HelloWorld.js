import React, { Component } from 'react';

// The component should render an outter div element. Inside the div there should
//  be p element containing Hello, world. The word "world" should come from state in a property named who.

// The component should also display 3 buttons, one for each: "World", "Friend" and "React".

// When a user clicks on one of the three buttons, use state and an event handler to 
// update the state property who so that the content in the p element changes.

// If the user clicks the "Friend" button, the p displays Hello, Friend!.
// If the user clicks the "React" button, the p displays Hello, React!.
// If the user clicks the "World" button, the p displays Hello, World!.



class HelloWorld extends React.Component {

    static defaultProps = {
        step: 1  // green
      };

    constructor(props) {
        console.log('props in constructor', props)
        super(props)
        this.state = { 
            who: 'world'
        }
      }
      handleButtonClickFriend = () => {
        this.setState({ who: 'Friend' })
      }
      handleButtonClickReact = () => {
        this.setState({ who: 'React' })
      }
      handleButtonClickWorld = () => {
        this.setState({ who: 'World' })
      }
    render() {
        return (
          <div>
            <p>Hello, {this.state.who}</p>
            <button onClick={this.handleButtonClickFriend}>Friend</button>
            <button onClick={this.handleButtonClickReact}>React</button>
            <button onClick={this.handleButtonClickWorld}>World</button>
          </div>
        )
      }

}

export default HelloWorld