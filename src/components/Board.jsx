import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  /*
        Create 9 components Cells directly make code look verbose.
        So we use this syntax: 
        Array(9).fill()
        This will create the array with 9 items in it. 
        But because we fill nothing so each is empty
    */
// console.log(props);

  return (
    <div className="game-board">
      {props.cells
        .map((item, index) => (
          <Cell 
          key={index} 
          value={item} 
          onClick= {()=> props.onClick(index)}>
          </Cell>
        ))}
    </div>
  );
};

export default Board;
