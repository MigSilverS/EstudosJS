//raiz quadrada e cúbica
let numero = parseFloat(prompt("Digite um número: "))
let rQuadrada = Math.sqrt(numero)
console.log(rQuadrada)

let rCubica = Math.cbrt(numero)
console.log(rCubica)

//potencia

numero = parseFloat(prompt("Digite um número: "))
let potencia = parseInt(prompt("Digite a potência: "))

console.log(Math.pow(numero, potencia))

//Raiz de outros números
console.log(Math.pow(numero,1/7))

//PI
console.log(Math.PI)

//Arrumar os numeros em 2 caracteres depois da vírgula
let PI = Math.PI
console.log(PI.tofixed(2))