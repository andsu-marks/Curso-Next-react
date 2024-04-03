export function mega(qtde = 6, numeros = [], seed = null) {
  qtde = +qtde;

  // Define a semente inicial se não for fornecida
  if (seed === null) {
    seed = Math.random();
  }
  
  // Usa a semente para garantir a mesma sequência de números aleatórios
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  if (qtde < 6 || qtde > 60) {
    throw "Quantidade inválida!";
  }

  if (numeros.length === qtde) {
    return numeros.sort();
  }

  const numeroAleatorio = Math.floor(random() * 60) + 1;
  if (!numeros.includes(numeroAleatorio)) {
    return mega(qtde, [...numeros, numeroAleatorio], seed);
  } else {
    return mega(qtde, numeros, seed);
  }
}
