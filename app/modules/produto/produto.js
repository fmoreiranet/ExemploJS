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

    //Create Read Update Delete (CRUD)
    //Adicionar produto ao armazenamento
    add(produto) {
        try {
            var baseProduto = [];  //Criando Vetor para receber os dados do localstorage
            baseProduto = JSON.parse(localStorage.getItem('produtos'));//JSON.parse() -> pega um json e converte em objeto
            baseProduto.push(produto); // Adicionando o produto na lista de produtos;

            var produtosJson = JSON.stringify(baseProduto); //Criando JSON dos objetos na baseProduto
            localStorage.setItem('produtos', produtosJson);
            return true;
        } catch (ex) {
            console.error(ex);
            return false;
        }
    }

    //listar produtos
    getAll() {
        return JSON.parse(localStorage.getItem('produtos'));
    }

    //atualizar produtos

    //remover produtos
}