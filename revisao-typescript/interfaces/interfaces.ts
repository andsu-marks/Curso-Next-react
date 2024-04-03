interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Ola " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  }
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
pessoa.saudar("Skywalker")
// saudarComOla({nome: "Jonas", idade: 27, xyz: true})


// Usando classes..

class Cliente implements Humano {
  nome: string = "";
  ultimaCompra: Date = new Date;
  saudar(sobrenome: string) {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);

// interface Função

interface funcaoCalculo {
  (a: number, b: number): number;
}

let potencia: funcaoCalculo

potencia = function(base: number, exp: number): number {
  return base ** exp;
}

console.log(potencia(3, 10));