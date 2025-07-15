import { checkWinner } from "./checkWinner";
import Swal from 'sweetalert2';


interface HandleClickParams {
  index: number;
  board: (string | null)[];
  isXTurn: boolean;
  setBoard: React.Dispatch<React.SetStateAction<(string | null)[]>>;
  setIsXTurn: React.Dispatch<React.SetStateAction<boolean>>;
  setScores: React.Dispatch<React.SetStateAction<{ X: number; O: number }>>;
}

export function handleClick({
  index,
  board,
  isXTurn,
  setBoard,
  setIsXTurn,
  setScores,
}: HandleClickParams): void {
  if (board[index]) return;

  const newBoard = [...board];
  newBoard[index] = isXTurn ? "X" : "O";
  setBoard(newBoard);

  const winner = checkWinner(newBoard);



if (winner === "X" || winner === "O") {
  setScores((prev) => ({
    ...prev,
    [winner]: prev[winner] + 1,
  }));

  Swal.fire({
    title: `Player ${winner} wins!`,
  
    confirmButtonText: 'OK',
  });

  setBoard(Array(9).fill(null));
  setIsXTurn(true);
  return;
}

if (winner === "draw") {
  Swal.fire({
    title: "It's a draw!",
    
    confirmButtonText: 'Try Again',
  });

  setBoard(Array(9).fill(null));
  setIsXTurn(true);
  return;
}


  
  setIsXTurn(!isXTurn);
}
