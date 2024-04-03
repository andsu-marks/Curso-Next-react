import { useState } from "react";

export default function coontador() {
  let [valor, setValor] = useState(0);

  function increment() {
    setValor(valor + 1)
    console.log(valor);
  }

  function decrement() {
    setValor(valor - 1);
    console.log(valor)
  }


  return (
    <div>
      <h1>Contador</h1>
      <div>Valor: {valor}</div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}