import React,{useState,useEffect}  from 'react';
import ReactDOM from 'react-dom';

const a=size=>Array(size).fill(null)
const Square = props=> 
  <button 
    className="square" 
    onClick={() => props.onClick()}
  >
    {props.value}
  </button>


function Board() {
  function renderSquare(i) {
    return <Square 
      value={squares[i]}
      key={i}
      onClick={() => handleClick(i)}
    />;
  }
  const [squares,setSquares]=useState(a(9))
  const [next,setNext]=useState('X')
  function handleClick(i) {
    squares[i] = next;
    setSquares(squares)
    setNext(next==='X'?'O':'X')
  }  
  function renderRow(start){
    return <div className="board-row">{a(3).map((x,pos)=>renderSquare(pos+start))}</div> 
  }
  function render() {
    return <div>{render2()}{render2()}</div>
  } 
  function render2() {
    const status = 'Next player: '+next;
    const winner=calculateWinner(squares)
    return (
      <div>
        <div className="status">{status}</div>
        <div className="status">winnder:{winner}</div>
        {renderRow(0)}
        {renderRow(3)}
        {renderRow(6)}
      </div>
    );
  }
  return render()
}

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}