class NegociacoesController{
    
    constructor(){
        let $ = document.querySelector.bind(document);
        this.quantidade = $('#quantidade');
        this.valor = $('#valor');
        this.data = $('#data');
        
    }

    adicionar(event){
        event.preventDefault();


        let n1 = new Negociacao(new Date(), this.quantidade, this.valor );

        console.log(this.quantidade.value)
        console.log(this.valor.value)
        console.log(this.data.value)
        console.log(n1.volume)
    }
}