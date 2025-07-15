import './App.css'
interface startButtonProps {
  onStart: () => void;
  label: string;
}

function StartButton({ onStart , label }: startButtonProps) {
  return (
    <button className="btn btn-success" onClick={onStart}>
      {label}
    </button>
  );
}

export default StartButton;
