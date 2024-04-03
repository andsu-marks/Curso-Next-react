export function mega(numeroAleatorio, qtde = 6, numeros = []) {
  if(qtde < 6 && qtde > 60) {
    throw "Quantidade inválida!";
  }

  if (numeros.length === qtde) {
    return numeros.sort()
  }

  if (!numeros.includes(numeroAleatorio)) {
    return mega(qtde, [...numeros, numeroAleatorio]);
  } else {
    return mega(numeroAleatorio, qtde, numeros)
  }
}
