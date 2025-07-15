import './App.css'
interface ResetButtonProps {
  onReset: () => void;
}

function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button className="btn btn-primary mx-1" onClick={onReset}>
      Reset
    </button>
  );
}

export default ResetButton;
