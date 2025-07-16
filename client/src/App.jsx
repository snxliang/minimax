import { useState } from 'react';
import Board from './components/Board.jsx';
import './App.css';

const SYMBOLS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/'];

function App() {
    const [numSpaces, setNumSpaces] = useState(() => {
	const saved = localStorage.getItem('numSpaces');
	return saved ? Number(saved) : 5; // fallback to 5
    });
    const [gameOver, setGameOver] = useState(false);
    const [scores, setScores] = useState([0, 0])

    const [board, setBoard] = useState(
	Array(2).fill(null).map(() => Array(numSpaces).fill(null))
    );
    const [currentSymbol, setCurrentSymbol] = useState(SYMBOLS[0]);
    const [playerTurn, setPlayerTurn] = useState(0);
    let [count, setCounter] = useState(1);
    let [toggle, setToggle] = useState(0);
    const activeRow = playerTurn ^ toggle;

    function fillEmpty(rowData) {
	return rowData.map(sym => {
	    // If the value is null, undefined, or an empty string, replace it:
	    if (sym === null || sym === undefined || sym === '') {
		return '1';
	    }
	    return sym;
	});
    }

    function evaluate(rowData) {
	const cleaned = [];
	let i = 0;

	while (i < rowData.length) {
	    const sym = rowData[i];

	    if (sym === null) {
		i++;
		continue;
	    }

	    // If it's a digit, gather the full number
	    if (/\d/.test(sym)) {
		let numStr = '';
		while (i < rowData.length && /\d/.test(rowData[i])) {
		    numStr += rowData[i];
		    i++;
		}

		// Remove leading zeros (unless number is just '0')
		numStr = numStr.replace(/^0+(?!$)/, '');
		cleaned.push(...numStr.split(''));
	    } else {
		// operator or other non-digit
		cleaned.push(sym);
		i++;
	    }
	}

	const expr = cleaned.join('');

	const result = eval(expr);

	return result;
    }

    function checkDuplicate(row, col) {
	const rowData = board[row];
	if (rowData.includes(currentSymbol)) return 0;	// prevents duplicate symbols

	return 1;
    }

    function checkValidExpr(newBoard, row) {
	const rowData = newBoard[row];
	const newRow = fillEmpty(rowData);

	try {
	    const result = evaluate(newRow);
	    return 1;
	} catch (err) {
	    return 0;  // Syntax error
	}
    }

    function handleCellClick(row, col) {
	if (board[row][col]) return;	// prevents overwriting cells
	if (row !== activeRow) return;	// forces correct row
	if (!checkDuplicate(row, col)) return;

	const newBoard = board.map(r => [...r]);
	newBoard[row][col] = currentSymbol;

	if (!checkValidExpr(newBoard, row)) return;

	setBoard(newBoard);

	// Switch player
	setCounter(count + 1);
	setPlayerTurn(count % 2);
	setToggle((Math.floor(count / 2)) % 2);

	console.log(count)

	if (count >= numSpaces * 2) {
	    endGame(newBoard);
	}
    }

    function endGame(board) {
	console.log('game over')
	setGameOver(true);

	const score0 = evaluate(board[0]);
	const score1 = evaluate(board[1]);
	setScores([score0, score1]);
    }

    return (
	<div className="App">
	<h1 className='heading'>
	Minimax
	<select
	value={numSpaces}
	onChange={(e) => {
	    const newSpaces = Number(e.target.value);
	    setNumSpaces(newSpaces);
	    localStorage.setItem('numSpaces', newSpaces);
	    setBoard(Array(2).fill(null).map(() => Array(Number(e.target.value)).fill(null)));
	    setCounter(1);
	    setToggle(0);
	    setPlayerTurn(0);
	    setScores([0, 0]);
	    setGameOver(false);
	}}
	className='spaces-select'
	>
	<option value="3">3</option>
	<option value="5">5</option>
	<option value="7">7</option>
	<option value="9">9</option>
	<option value="11">11</option>
	</select>
	</h1>

	<div style={{ marginBottom: '40px' }}>
	{SYMBOLS.map(sym => (
	    <button
	    key={sym}
	    onClick={() => setCurrentSymbol(sym)}
	    className={`symbol-button ${sym === currentSymbol ? 'selected' : ''}`}
	    style={{ fontWeight: sym === currentSymbol ? 'bold' : 'normal' }}
	    >
	    {sym}
	    </button>
	))}
	</div>
	<div className='board-container'>
	<Board board={board} onCellClick={handleCellClick} activeRow={activeRow} playerTurn={playerTurn} gameOver={gameOver} scores={scores} />
	</div>
	</div>
    );
}

export default App;
