import App from "../App"
import { useState } from "react"
const Game = () => {
 
    const [history,setHistory]=useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove]=useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares =history[currentMove]

    const handlePlay = (nextSquares) => {
      const nextHistory =[...history.slice(0,currentMove + 1),nextSquares]
      setHistory(nextHistory)
      setCurrentMove(nextHistory.length-1)
   
    }
    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove)
       
    };
      const moves = history.map((squares,move) => {
        let description;
        if(move>0){
            description="Go to move #" + move;
        }
        else{
            description="Go to game start";
        }
        return(
            <li key={move} className="flex items-center gap-2">
                {/* <div className="font-semibold text-xl">{move+1}.</div> */}
                <button className="hover:bg-gray-300 border-[1px] border-black bg-gray-200 w-40 my-1 py-2 items-center justify-center flex" onClick = {() => jumpTo(move)}>
                {description}
                </button>
            </li>
        );

      } );
    
    
    
  return (
    <div className="game items-center justify-center flex ">
        <div className="gameBoard mx-7">
        <App
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
        />
        </div>
   
      <div className="gamesHistory ">
        <ol>
            {moves}
        </ol>
      </div>
    </div>
  )
}

export default Game
