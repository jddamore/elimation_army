import React, { Component } from 'react';
import { Node } from './Node.js';
import Button from '@mui/material/Button';

let grid = [];
let size = 100;

function refreshGrid  (state) {
  grid = [];
  for (let row = 0; row < size; row++) {
    const currentRow = [];
    for (let col = 0; col < size; col++) {
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
    const right = (state) =>  {
      let coordinates = state.split("|");
      let x = parseInt(coordinates[0]) + 1;
      if (x === size) {
        x = 0;
      }
      let y = parseInt(coordinates[1]);
      this.setState({
        grid: this.state.grid,
        position: `${x}|${y}`
      })
      console.log(x, y);
    }
    const left = (state) =>  {
      let coordinates = state.split("|");
      let x = parseInt(coordinates[0]) - 1;
      if (x === -1) {
        x = size - 1;
      }
      let y = parseInt(coordinates[1]);
      this.setState({
        grid: this.state.grid,
        position: `${x}|${y}`
      })
      console.log(x, y);
    }
    const up = (state) =>  {
      let coordinates = state.split("|");
      let x = parseInt(coordinates[0]);
      let y = parseInt(coordinates[1]) - 1;
      if (y === -1){
        y = size - 1;
      }
      this.setState({
        grid: this.state.grid,
        position: `${x}|${y}`
      })
      console.log(x, y);
    }
    const down = (state) =>  {
      let coordinates = state.split("|");
      let x = parseInt(coordinates[0]) ;
      let y = parseInt(coordinates[1]) +1;
      if(y === size){
        y = 0
      }
      this.setState({
        grid: this.state.grid,
        position: `${x}|${y}`
      })
      console.log(x, y);
    }
    


    return (
      <div>
        <Button onClick={() => right(this.state.position)}>Right</Button>
        <Button onClick={() => up(this.state.position)}>up</Button>
        <Button onClick={() => down(this.state.position)}>down</Button>
        <Button onClick={() => left(this.state.position)}>left</Button>        
        <div className="grid">
        {grid.map((row, rowId) => {
          return (
            <div key={rowId} style={{fontSize:"1px"}}>
              {row.map((node, nodeId) => {
                let key = nodeId + "|" + rowId;
                // console.log(rowId + "|" + nodeId);
                return (
                  <Node key={key} parentToChild={ {key: key, grid: this.state.grid, position: this.state.position}}></Node>
                );
              })}
            </div>)
        })}
        </div>
      </div>
    )
  }
}

export default Grid;