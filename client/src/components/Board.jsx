import React from 'react';
import Cell from './Cell';
import './Board.css';

function Board({ board, onCellClick, activeRow, playerTurn, gameOver, scores }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        <div className="row" key={rowIndex}>
	  <span className="turn-marker">
	      {!gameOver && activeRow === rowIndex && (
		  <>
		    {playerTurn === 0 ? 'P1' : 'P2'}
		  </>
	      )}
	      {gameOver && (
		  <>
		      {rowIndex ? 'P2' : 'P1'}
		  </>
	      )}
	  </span>
          {row.map((cell, colIndex) =>
            <Cell
              key={colIndex}
              value={cell}
              onClick={() => onCellClick(rowIndex, colIndex)}
            />
          )}
	  <span className="turn-marker">
	      {!gameOver && activeRow === rowIndex && (
		  <>
		      {playerTurn === activeRow ? 'max' : 'min'}
		  </>
	      )}
	      {gameOver && (
		  <>
		      {rowIndex ? scores[1] : scores[0]}
		  </>
	      )}
	  </span>
        </div>
      )}
    </div>
  );
}

export default Board;

