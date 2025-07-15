interface PauseButtonProps {
  onPause: () => void;
}

function PauseButton({ onPause }: PauseButtonProps) {
  return (
    <button className="btn btn-danger mx-1" onClick={onPause}>
      Pause
    </button>
  );
}

export default PauseButton;
