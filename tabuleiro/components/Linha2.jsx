import styles from "../styles/Linha.module.css"
import Subdivisao from "./Subdivisao";

export default function Linha2(props) {
  return (
    <div className={styles.linha}>
      <Subdivisao preta/>
      <Subdivisao/>
      <Subdivisao preta/>
      <Subdivisao/>
      <Subdivisao preta/>
      <Subdivisao/>
      <Subdivisao preta/>
      <Subdivisao/>
    </div>
  )
}