export default function Filho(props) {
  console.log(props.funcao)

  return (
    <div>
      <h1>Filho</h1>
      <button onClick={ev => props.funcao(ev)}></button>
    </div>
  )
}