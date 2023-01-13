import { memo } from "react";
function MemoComponent({ textP }) {
    console.log("Hola soy un memo component");
    return (
        <p>{textP}</p>
    );
}

//const hola = (numero) => numbero*2;//Funcion de flecha
// es igual a 
// const hola = function(numero){return numero*2 };
//ddasda
//()=>{}

function renderConditionCompoenent(oldProps, nextProps) {
    return oldProps === "nextProps";
}

export default memo(MemoComponent, renderConditionCompoenent);
