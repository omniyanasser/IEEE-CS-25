export function checkWinner(board: (string | null)[]): string | null | "draw" {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let win of winningCombinations) {
    const [a, b, c] = win;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]; 
    }
  }

 
  const isDraw = board.every((cell) => cell !== null);
  if (isDraw) return "draw";

  return null;
}
