class Circulo {
    private _radio: number

    constructor(_radio:number ){
        this._radio = _radio
        
    }

    getRadio(){
        return this._radio
    }
    getArea(){
        return Math.PI*Math.pow(this._radio,2)
        
    }
    getPerimetro(){
        return 2*Math.PI*this._radio
        
    }
}
export{Circulo}