import { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { GreenText } from './components/Texts/GreenText'
import './App.css';

function HolaNombre(name){
  return `Hola ${name}`;
}

function sort(numero) {
  const arr = [12, 129, 1, 0, 65, 13];
  arr.push(numero);
  const sortArr = arr.sort();
  return sortArr;
}

function App() {
  console.log("APP hola");
  const [name, setName] = useState("Javier");
  const [count, setCount] = useState(1000);
  const fisrtRef = useRef();
  const valueMemo = useMemo(()=>sort(count), [count]);
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
      {/* <p>{ count }</p> */}
      {/* <p>Mensaje: { valueMemo }</p> */}
      <div>
        {
          valueMemo.map((item, index)=>(
            <p key={index} >item: {item}</p>
          ))
        }
        <p>Hola</p>
      </div>
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
