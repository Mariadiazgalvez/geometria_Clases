class Triangulo {
    private _lados: number
    private _altura:number

    constructor(_lados:number,_altura:number){
        this._lados = _lados
        this._altura = _altura
    }

    getLado1(){
        return this._lados
    }
    getAltura(){
        return this._altura
    }

    getArea(){
        return this._lados * this._altura/2
        
    }
    getPerimetro(){
        return this._lados + this._lados + this._lados
        
    }
}
export{Triangulo}