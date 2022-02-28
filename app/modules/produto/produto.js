class Produto {
    constructor() {
        this.nome = "",
            this.descricao = "",
            this.quant = 0,
            this.valor = 0,
            this.foto1 = "",
            this.foto2 = "",
            this.foto3 = ""
    };

    //Adicionar produto ao armazenamento
    add(produto) {
        produto = JSON.stringify(produto); //JSON.parse() -> pega um json e converte em objeto
        localStorage.setItem('produtos', produto);
        return true;
    }

    //listar produtos

    //atualizr produtos

    //remover produtos
}