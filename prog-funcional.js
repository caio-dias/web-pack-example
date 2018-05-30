let calculator = (operador) => {
    return (n1, n2) => {
        let resultado
        switch (operador) {
            case '+':
                resultado = n1 + n2
                break
            case '-':
                resultado = n1 - n2
                break
            case '*':
                resultado = n1 * n2
                break
            case '/':
                resultado = n1 / n2
                break
            default:
                return 'Operação invalida'
                break
        }
        console.log(`A conta ${n1} ${operador} ${n2} = ${resultado}`)
    }
}

//ao atribuir a função a uma var, a var também vira uma função, que invocada, passa os parametros para a segunda função.
let soma = calculator('+')
let subtracao = calculator('-')
let multiplicacao = calculator('*')
let divisao = calculator('/')
let invalido = calculator('&')

console.log(soma(1,2))
console.log(subtracao(3,2))
console.log(multiplicacao(6,2))
console.log(divisao(6,2))
console.log(invalido(6,2))
