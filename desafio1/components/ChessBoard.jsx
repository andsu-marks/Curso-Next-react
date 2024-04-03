export default function ChessBoard() {
  const rows = [];
  for (let i = 0; i < 8; i++) {
     const squares = [];
     for (let j = 0; j < 8; j++) {
       const isWhite = (i + j) % 2 === 0;
       squares.push(
         <div
           key={`${i}-${j}`}
           className="square"
           style={{ backgroundColor: isWhite ? 'white' : 'black' }}
         >
           {/* Aqui você pode adicionar a lógica para exibir as peças */}
         </div>
       );
     }
     rows.push(
       <div key={i} className="row" style={{ display: 'flex' }}>
         {squares}
       </div>
     );
  }
 
  return (
     <div className="chess-board" style={{ display: 'flex', flexDirection: 'column-reverse' }}>
       {rows}
     </div>
  );
 }