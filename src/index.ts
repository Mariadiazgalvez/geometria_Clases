import {menu} from '../src/view/menu'
import { leerTeclado } from '../src/view/entradaTeclado'
import { Rectangulo } from '../src/figuras/Rectangulo'
import { Triangulo } from '../src/figuras/Triangulo'
import { Circulo } from '../src/figuras/Circulo'
import { Rombo } from '../src/figuras/Rombo'

const main = async () => {
    let n: number
    do {
        n = await menu()
        switch(n){
            case 1:
                console.log("Perimetro y Area de un rectangulo")
                let l1:number
                let l2:number
                l1 = parseInt(await leerTeclado("Introduzca el primer lado del rectángulo"))
                l2 = parseInt(await leerTeclado('Introduzca el segundo lado del rectángulo'))
                let rectangulo = new Rectangulo(l1,l2)
                console.log("Perimetro: "+ rectangulo.getPerimetro())
                console.log("Area: "+ rectangulo.getArea())
                break
            case 2:
                console.log("Perimetro y Area de un circulo")
                let r:number
                r = parseInt(await leerTeclado('Introduzca el radio del círculo'))
                let circulo = new Circulo(r)
                console.log("Perimetro: "+circulo.getPerimetro())
                console.log("Area: "+circulo.getArea())
                break
            case 3:
                console.log("Perimetro y Area de un rombo")
                let l:number
                let diag:number
                l = parseInt(await leerTeclado('Introduzca el lado del rombo'))
                diag = parseInt(await leerTeclado('Introduzca la diagonal del rombo'))
                let rombo = new Rombo(l,diag)
                console.log("Perimetro: "+rombo.getPerimetro())
                console.log("Area: "+rombo.getArea())
                break
            case 4:
                console.log("Perimetro y Area de un triangulo equilatero")
                let lados:number
                let altura:number
                altura =  parseInt( await leerTeclado('Introduzca la altura del triangulo'))
                lados =  parseInt( await leerTeclado('Introduzca el lado del triangulo'))
                let triangulo = new Triangulo(lados,altura)
                console.log("Perimetro: "+triangulo.getPerimetro())
                console.log("Area: "+triangulo.getArea())
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}

main()



