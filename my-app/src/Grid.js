import React, { Component } from 'react';
import { Node } from './Node.js';

let grid = [];

function refreshGrid  (state) {
  grid = [];
  for (let row = 0; row < 100; row++) {
    const currentRow = [];
    for (let col = 0; col < 100; col++) {
      currentRow.push('');
    }
    grid.push(currentRow);
  }
  state = grid
}

export class Grid extends Component {
 
  state = {
    grid: [],
    position: '5|5'
  };

  render() {
    refreshGrid(this.state.grid);
    return (
      <div className="grid">
      {grid.map((row, rowId) => {
        return (
          <div key={rowId} style={{fontSize:"1px"}}>
            {row.map((node, nodeId) => {
              let key = rowId + "|" + nodeId;
              // console.log(rowId + "|" + nodeId);
              return (
                <Node key={key} parentToChild={ {key: key, grid: this.state.grid, position: this.state.position}}></Node>
              );
            })}
          </div>)
      })}
    </div>
    )
  }
}

export default Grid;