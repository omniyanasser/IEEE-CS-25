import { useState, useEffect } from "react";
import Resetbutton from "./resetButton";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";

import './App.css'

function App() {
  const [seconds, setSeconds] = useState<number>(0);
  const [startLabel, setStartLabel] = useState<string>("Start");
  const [isRunning, setIsRunning] = useState<boolean>(false);


  useEffect(() => {
      let interval: number | undefined;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev: number) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSeconds:number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const m = mins < 10 ? `0${mins}` : mins;
    const s = secs < 10 ? `0${secs}` : secs;
    return `${m}:${s}`;
  };

  const handleStart = ():void => {
    setIsRunning(true);
    setStartLabel("Continue"); 
  };

    const handleReset = (): void => { 
    setSeconds(0);         
    setIsRunning(true); 
  };

  const handlePause = (): void => {
  setIsRunning(false);
};


  return (
    
    <div className="container text-center">
      <div className="row">
      <div className="col-12 text-center">

        <div className="outercircle">

       
      <h2>{formatTime(seconds)}</h2>
        </div>
      </div>
    </div>

     <div className="row">
      <div className="col-12 text-center">

        <div className="shadow rounded-2 p-3 my-1 format">
             <Resetbutton onReset={handleReset} />
             <StartButton onStart={handleStart} label={startLabel} />
             <PauseButton onPause={handlePause} />
   

       </div>
      </div>
    </div>
    </div>
  );
}

export default App;
