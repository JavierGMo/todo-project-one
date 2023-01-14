import { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';



function App() {
  console.log("APP hola");
  const [count, setCount] = useState(1000);
  const fisrtRef = useRef();
  /*const handleUseCallback = useCallback(()=>{
    sortAnything(count);
  }, [count]);*/
  const handleAddNumber = (e) => {
    setCount(count+1);
  };
  /*const handleInputBtn = ()=>{
    console.log(fisrtRef.current.focus());
  };*/
  /*useEffect(()=>{
    //const { idpokemon } = Promise.all([reqPokapi], ()=>{
    //  setCount(idpokemon);
    //})
  }, [count]);*/
  return (
    <div className="App">
      <p>{ count }</p>
      <input ref={fisrtRef} placeholder="Soy un input" />
      <button
        onClick={handleAddNumber}
      >+</button>
      <button
        onClick={()=>console.log("Menosss***")}
      >-</button>
      <button
      >Enviar</button>
    </div>
  );
}

export default App;
