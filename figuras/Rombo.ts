class Rombo {
    private _lado:number
    private _diagonal:number

    constructor(_lado:number,_diagonal:number){
        this._lado = _lado
        this._diagonal = _diagonal
    }

    getLado1(){
        return this._lado
    }
    getDiagonal(){
        return this._diagonal
    }

    getArea(){
        return this._lado*this._diagonal/2
        
    }
    getPerimetro(){
        return this._lado*4
        
    }
}
export{Rombo}