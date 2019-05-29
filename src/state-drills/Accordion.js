import React, { Component } from 'react';

export default class Accordion extends React.Component {
    static defaultProps = {
        sections:[]
    }

    state = {
        currentSectionIndex: 0
    };

    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
        console.log(this.state);
      }

    renderList() {
        return this.props.sections.map((section, index) => (
        <li key={index}>
            <button key={index} onClick={() => this.handleButtonClick(index)}>
              {section.title}
            </button>
            {this.renderContent(index)}
        </li>
              ))
      }

    renderContent(index) {
        const currentTab = this.props.sections[this.state.currentSectionIndex]
        // return (
        //   <p className='content'>
        //     {currentTab.content}
        //   </p>
        // )
        if (index === this.state.currentSectionIndex){
            return (
                <p className='content'>
                  {currentTab.content}
                </p>
              )
        } 

      }


    render(){
        return(
            <ul>
                {this.renderList()}
                
                {/* <li><button></li> */}
                {/* <li><button></li> */}
            </ul>
        )
    }
}