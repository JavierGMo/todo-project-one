import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(1000);
  const handleAddNumber = (e) => {
    setCount(count+1);
  };
  return (
    <div className="App">
      <p>{ count }</p>
      <button
        onClick={handleAddNumber}
      >+</button>
    </div>
  );
}

export default App;
