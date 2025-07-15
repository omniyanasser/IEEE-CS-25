import { useState } from "react";
import { handleClick } from './handleClick'

import Board from "./Board";

function Game() {
  const [board, setBoard] = useState<Array<string | null>>(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [scores, setScores] = useState<{ X: number; O: number }>({X: 0,O: 0,});



  const handleReset = () => {
  setBoard(Array(9).fill(null));
  setIsXTurn(true);
  setScores({ X: 0, O: 0 });
};

const handleNewRound = () => {
  setBoard(Array(9).fill(null));
  setIsXTurn(true);
  
};


 return (
  <div className="text-center mt-6 mx-auto container">
  
  <h1 className="text-center mt-6 text-4xl text-gray-600">TIC-TAC-TOE</h1>
   

    <Board board={board} onBlockClick={(index) =>
    handleClick({ index, board, isXTurn, setBoard, setIsXTurn, setScores })
}
/>



    {/* Current Turn */}

 <p className="text-xl font-bold my-5">
      Current Turn: <span className="text-gray-500">
        {isXTurn ? "X" : "O"}
      </span>
    </p>

    {/* ScoreBoard */}
<div className="flex justify-center gap-10 mb-4">
  <div className="text-center">
    <h3 className="text-lg font-bold text-red-500">Player X</h3>
    <p className="text-2xl">{scores.X}</p>
  </div>
  <div className="text-center">
    <h3 className="text-lg font-bold text-green-500">Player O</h3>
    <p className="text-2xl">{scores.O}</p>
  </div>
</div>


{/* Reset All Button  , handleNewRound */}
<button
  onClick={handleNewRound}
  className="mt-6 mr-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
>
  New Round
</button>

<button
  onClick={handleReset}
  className="mt-6 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
>
  Reset All
</button>

  </div>
);

}

export default Game;
