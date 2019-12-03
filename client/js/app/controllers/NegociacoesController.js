class NegociacoesController{
    // construtor 
    constructor(){
        let $ = document.querySelector.bind(document);
        this._quantidade = $('#quantidade');
        this._valor = $('#valor');
        this._data = $('#data');      
    }

    // Evento disparado após o envio do formulário
    adicionar(event){
        event.preventDefault();
        // convertendo data string para array e instanciando para new Date
        let data = new Date(this._data.value.split('-'))
        
        console.log(data)  

        // // Criando uma instancia de Negociacao
        let negociacao = new Negociacao(data, this._quantidade.value, this._valor.value );
        console.log(negociacao)
        // console.log(this._quantidade.value)
        // console.log(this._valor.value)
        // console.log(this._data.value)
        // console.log(negociacao)

    }
}