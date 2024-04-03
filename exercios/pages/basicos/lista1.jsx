export default function list() {
  function lista(limit) {
    const items = [];
    for(let i = 0; i <= limit; i++) {
      items.push(<span>{i},</span>);
    }
    return items;
  }

  return (
    <div>
      {lista(10)}
    </div>
  )
}