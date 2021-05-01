//retorne o maior numero
const numeros = [30, 40 ,80]

const maior = numeros
.reduce((acumulador, value) => {
  if(acumulador < value) return value
  return acumulador
})
//retorna -> 80