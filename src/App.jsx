// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'


function App({xIsNext,squares,onPlay}) {
  // const [count, setCount] = useState(0)

  const handleClick = (i) => {
    if (squares[i] || calculateWinner(squares)){
      return
    }
    const nextSquares =squares.slice();
    if (xIsNext ? nextSquares[i]="X":nextSquares[i]="O")
    onPlay(nextSquares)
  }
  const calculateWinner = (squares) => {
    const lines =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    ];
    for(let i=0;i<lines.length;i++){
      const [a,b,c]=lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    return null
  }
const winner =calculateWinner(squares);
let status;
if(winner){
  status = "winner:"+winner;
}  
else {
  status ="Next Player:"+(xIsNext ? "X":"O")
}

  return (
    <>
      <h1 className='items-center justify-center  m-auto flex font-bold text-3xl my-10'>Tic-Tac-Toe Game</h1>
      <div className='items-center justify-center  m-auto flex font-bold text-2xl my-8'>{status}</div>
      <div className='items-center justify-center  m-auto flex'>
        <Button value={squares[0]} onSquareClick={() => handleClick(0)}/>
        <Button value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Button value={squares[2]} onSquareClick={() => handleClick(2)}/>
      </div>
      <div className='items-center justify-center  m-auto flex'>
        <Button value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Button value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Button value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className='items-center justify-center  m-auto flex'>
        <Button value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Button value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Button value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>

    </>
  )
}

export default App
