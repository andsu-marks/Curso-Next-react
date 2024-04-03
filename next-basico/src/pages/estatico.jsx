import { useEffect, useState } from "react"

export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function estatico(props) {
  // const [number, setNumber] = useState(0);

  // useEffect(() => {
  //   setNumber(Math.random())
  // }, [])

  return (
    <div>
      <span>Aleatorio: {props.numero}</span>
    </div>
  )
}