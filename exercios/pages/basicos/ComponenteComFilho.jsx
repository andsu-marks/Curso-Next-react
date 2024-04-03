import Item from "@/components/Item";
import Lista from "@/components/Lista";

export default function componenteComFilho() {
  return (
    <div>
      <Lista>
          <Item conteudo="Alguma coisa" />
        <Item conteudo="Item #12" />
        <Item conteudo="Item #13" />
      </Lista>
    </div>
  )
}