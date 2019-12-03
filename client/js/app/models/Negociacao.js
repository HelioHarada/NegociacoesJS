class Negociacao {

    constructor(data, quantidade, valor){
        this._date = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;
        // deixar this imutavel
        Object.freeze(this)
    }

    get data(){
        return new Date(this._date.getTime());
    }

    get quantidade(){
        return this._quantidade
    }

    get valor(){
        return this._valor
    }

    get volume(){
        console.log(this._valor.value)
        console.log(this._quantidade.value)
        return this._valor.value * this._quantidade.value;
    }
}