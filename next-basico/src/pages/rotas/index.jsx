import Link from "next/link";
import router from "next/router" 

function navegacaoSimples(url) {
  router.push(url);
}

function navegacaoComParams() {
  router.push({
    pathname: "/rotas/params",
    query: {
      id: 123,
      nome: "Ana"

    }
  })
}

export default function rotas() {
  return (
    <div>
      <h1>Rotas index</h1>
      <ul>
        <Link href="/rotas/params?id=12&nome=Ana">
          <li>Params</li>
        </Link>
        <Link href="/rotas/params?id=12&nome=Ana">
          <li>Buscar</li>
        </Link>
      </ul>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
        <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/daniel")}>Daniel</button>
          <button onClick={navegacaoComParams}>PArams</button>

      </div>
    </div>
  )
}