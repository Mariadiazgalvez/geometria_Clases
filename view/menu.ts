import { leerTeclado } from '../view/entradaTeclado'

export const menu = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Rectangulo')
    console.log('2.- Circulo')
    console.log('3.- Rombo')
    console.log('4.- Triangulo Equilatero')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}