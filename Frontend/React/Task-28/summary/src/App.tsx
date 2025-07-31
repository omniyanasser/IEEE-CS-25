import { useState,useEffect , useRef  } from 'react';
import User from './User';
import { UserContext } from './Context';
 {/* useState
  const [value, setValue] = useState(initialValue);

     value: the current value.
     setValue: a function to update the value.
     initialValue: the starting value (0, "", [], {}).
     
 */}

 {/*
  useEffect

  useEffect(() => {
   side effects
     Code to run on component mount or when dependencies change
     return () => {
       Cleanup code when component unmounts or dependencies change
    };
  }, [dependencies]); // Optional dependencies array

  usage:
  Fetching data from an API
  Updating the DOM

 */}

 {/*
  useRef
  const ref = useRef(initialValue);
  ref.current: the current value of the ref.
  initialValue: the starting value (null, {}, [], etc.).


 */}


 {/*
 UserContext

 allow to access data from a context provider without passing props manually through every level of the component tree.

 */}


function App() {

const [count, setCount] = useState(0);
 const [name, setName] = useState('');
const inputRef = useRef(null);


//  useEffect(() => {
//     const interval = setInterval(() => {
//       console.log('useEffect');
//     }, 1000);
//     return () => {
//       clearInterval(interval);
//     };
//   }, []); 


  useEffect(() => {
    inputRef.current.focus();
  }, []);
 
  return (
    <>
     <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <hr />
      <input  ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>


   <UserContext.Provider value={{ name: "Omniya", age: 21 }}>
      <User />
    </UserContext.Provider>


    </>
  )
}

export default App
