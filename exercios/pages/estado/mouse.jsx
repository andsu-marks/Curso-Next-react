import { useState } from "react"

export default function mouse() {
  const arrayX = useState(0);
  let x = arrayX[0];
  const alterarX = arrayX[1];

  const arrayY = useState(0);
  let y = arrayY[0];
  const alterarY = arrayY[1];

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#222",
    alignItems: "center",
    color: "#fff",
    height: "100vh"
  }

  function quandoMover(e) {
    alterarX(e.clientX);
    alterarY(e.clientY);
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo x: {x}</span>
      <span>Eixo y: {y}</span>
    </div>
  )
}