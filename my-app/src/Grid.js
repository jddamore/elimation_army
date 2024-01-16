import React, { Component } from 'react';
import { Node } from './Node.js';

const grid = [];
for (let row = 0; row < 100; row++) {
  const currentRow = [];
  for (let col = 0; col < 100; col++) {
    currentRow.push(' ');
  }
    grid.push(currentRow);
}

export class Grid extends Component {
 
  render() {
    return (
      <div className="grid">
      {grid.map((row, rowId) => {
        return (
          <div key={rowId}>
            {row.map((node, nodeId) => {
              return (
                <Node></Node>
              );
            })}
          </div>)
      })}
    </div>
    )
  }
}

export default Grid;