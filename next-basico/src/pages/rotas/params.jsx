import { useRouter } from "next/router";

export default function Parans() {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;

  return (
    <div>Rotas Params: {id} e {nome}</div>
  )
}