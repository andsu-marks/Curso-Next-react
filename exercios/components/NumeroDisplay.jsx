export default function NumeroDisplay(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50px",
      width: "50px",
      borderRadius: "25px",
      backgroundColor: "#222",
      color: "#fff",
      fontSize: "2rem"
    }}>
      {props.numero}
    </div>
  )
}