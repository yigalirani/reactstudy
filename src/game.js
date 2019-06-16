import React from 'react';
import ReactDOM from 'react-dom';

const a=size=>Array(size).fill(null)
const Square = props=> 
  <button 
    className="square" 
    onClick={() => props.onClick()}
  >
    {props.value}
  </button>


class Board extends React.Component {
  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }
  constructor(props) {
    super(props);
    this.state = {
      squares: a(9),
      next:'X'
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice(); //is slice just copies the data? look it up
    squares[i] = this.state.next;
    this.setState({squares: squares,next:this.state.next==='X'?'O':'X'});
  }  
  renderRow(start){
    return <div className="board-row">{a(3).map((x,pos)=>this.renderSquare(pos+start))}</div> 
  }
  render() {
    return <div>{this.render2()}{this.render2()}</div>
  } 
  render2() {
    const status = 'Next player: '+this.state.next;
    const winner=calculateWinner(this.state.squares)
    return (
      <div>
        <div className="status">{status}</div>
        <div className="status">winnder:{winner}</div>
        {this.renderRow(0)}
        {this.renderRow(3)}
        {this.renderRow(6)}
      </div>
    );
  }
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