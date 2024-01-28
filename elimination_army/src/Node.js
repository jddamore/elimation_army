import React, { Component } from 'react';

export class Node extends Component { 
  
  
  render() {

    this.state = {
      pointer: ''
    };

    // let pointer = '';
    if (this.props.parentToChild.position === this.props.parentToChild.key) {
      this.state.pointer = 'x';
      console.log('yo');
    }
    // console.log(this.props.parentToChild.key);
    return (
      <div className="node">&nbsp;{this.state.pointer}</div>
    )
  } 
}

export default Node;