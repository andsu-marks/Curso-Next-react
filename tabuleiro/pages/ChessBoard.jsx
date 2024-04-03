import Linha from "../components/Linha";
import styles from "../styles/Home.module.css"
import Subdivisao from "../components/Subdivisao";
import Linha2 from "@/components/Linha2";

export default function ChessBoard() {
  return (
    <div>
      <Linha/>
      <Linha2/>
      <Linha/>
      <Linha2/>
      <Linha/>
      <Linha2/>
      <Linha/>
      <Linha2/>      
    </div>
  )
}