import NumeroDisplay from "@/components/NumeroDisplay";
import { useState } from "react";

export default function contador() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [numero3, setNumero3] = useState(0);
  const [numero4, setNumero4] = useState(0);
  const [numero5, setNumero5] = useState(0);
  const [numero6, setNumero6] = useState(0);

  function sorteia1() {
    setNumero1(Math.floor(Math.random() * 60) + 1);
  }

  function sorteia2() {
    setNumero2(Math.floor(Math.random() * 60) + 1);
  }

  function sorteia3() {
    setNumero3(Math.floor(Math.random() * 60) + 1);
  }

  function sorteia4() {
    setNumero4(Math.floor(Math.random() * 60) + 1);
  }

  function sorteia5() {
    setNumero5(Math.floor(Math.random() * 60) + 1);
  }

  function sorteia6() {
    setNumero6(Math.floor(Math.random() * 60) + 1);
  }

  function sorteiaTodos() {
    sorteia1();
    sorteia2();
    sorteia3();
    sorteia4();
    sorteia5();
    sorteia6();
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <h1>Contador</h1>
      <div style={{ display: "flex", margin: "25px" }}>
        <NumeroDisplay numero={numero1} />
        <NumeroDisplay numero={numero2} />
        <NumeroDisplay numero={numero3} />
        <NumeroDisplay numero={numero4} />
        <NumeroDisplay numero={numero5} />
        <NumeroDisplay numero={numero6} />
      </div>
      <button onClick={sorteiaTodos}>Sortear</button>
    </div>
  );
}
