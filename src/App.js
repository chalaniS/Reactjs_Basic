import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(()=>{ 
    alert("You've changed the cpunter to " + counter)   

  }, [counter]);


  return (
    <div className="App">     

    <button onClick={() => setCounter((prevCount) => (prevCount = prevCount -1))}>-</button>
    <h1>{counter}</h1>
    <button onClick={() => setCounter((prevCount) => (prevCount = prevCount +1))}>+</button>    


    </div>
  );
}

export default App;
