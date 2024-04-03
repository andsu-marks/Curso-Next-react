import styles from "../styles/Subdivisao.module.css"

export default function Subdivisao(props) {
  return (
    <div className={styles.container}>
      <div 
        style={{
          backgroundColor: props.preta ? "#000" : "#fff"
        }}
        className={styles.subdivisao}>
      </div>
    </div>
  )
}