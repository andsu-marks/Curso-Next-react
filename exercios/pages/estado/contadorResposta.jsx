import NumeroDisplay from "@/components/NumeroDisplay";
import { useState } from "react";

export default function contador() {
  const [numero, setNumero] = useState(0);

  const inc = () => setNumero(numero + 1);
  const dec = () => setNumero(numero - 1);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1>Contador</h1>
      <NumeroDisplay numero={numero} />
      <div>Valor: {numero}</div>
      <div>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  )
}