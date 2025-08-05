import { useAtom } from "jotai";
import { atom } from "jotai";

const countAtom = atom(0);
const doubleAtom = atom(get => get(countAtom) * 2);


// useAtom Hook slide

function Counter() {
    const [count, setCount] = useAtom(countAtom);
    const [double] = useAtom(doubleAtom);

  return (
    <div>
      <h2>Counter: {count}</h2>
       <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter
