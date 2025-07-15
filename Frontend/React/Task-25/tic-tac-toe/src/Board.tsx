interface BoardProps {
  board: (string | null)[];
  onBlockClick: (index: number) => void;
}

function Board({ board, onBlockClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2 w-64 mx-auto mt-4 bg-black text-white">
      {board.map((value, index) => {
        let borderColor = "border-gray";
        let textColor = "text-white";

        if (value === "X") {borderColor = "border-red-500"; textColor="text-red-500";}
        else if (value === "O"){borderColor = "border-green-500";  textColor = "text-green-500";} 

        return (
          <button
            key={index}
            className={`w-20 h-20 border-2 text-2xl font-bold ${borderColor} ${textColor}`}
            onClick={() => onBlockClick(index)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

export default Board;
