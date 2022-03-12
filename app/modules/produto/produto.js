class Produto {
    constructor() {
        this.id = null,
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
    add() {
        try {
            this.validData();
            var baseProduto = JSON.parse(localStorage.getItem('produtos'));//JSON.parse() -> pega um json e converte em objeto
            if (baseProduto == null) {
                baseProduto = [];  //Criando Vetor para receber os dados do localstorage
            }
            this.id = Date.now();
            baseProduto.push(this); // Adicionando o produto na lista de produtos;
            var produtosJson = JSON.stringify(baseProduto); //Criando JSON dos objetos na baseProduto
            localStorage.setItem('produtos', produtosJson);
            localStorage.setItem("atualizado", new Date().toString());
            //return true;
        } catch (ex) {
            console.error(ex);
            throw ex;
            //return false;
        }
    }

    //listar produtos
    getAll() {
        var baseProduto = JSON.parse(localStorage.getItem('produtos'));
        if (baseProduto == null) {
            baseProduto = [];  //Criando Vetor para receber os dados do localstorage
        }
        return baseProduto;
    }

    //atualizar produtos
    update() {
        try {
            this.validData();
            var produtos = this.getAll();
            for (var i = 0; i < produtos.length; i++) {
                if (produtos[i].id == this.id) {
                    produtos[i] = this;
                }
            }
            //produtos[index] = produto;
            var produtosJson = JSON.stringify(produtos);
            localStorage.setItem('produtos', produtosJson);
        } catch (ex) {
            console.error(ex);
            throw ex;
        }
    }

    //remover produtos

    //validarDados: passiva
    validData() {
        var erros = "";
        if (!this.nome || this.nome == "") {
            erros += "Nome em branco!\n";
        }

        if (!this.descricao || this.descricao == "") {
            erros += "Descrição em branco!\n";
        }

        if (!this.quant || this.quant == 0) {
            erros += "Quantidade não pode esta zerada!\n";
        }

        if (!this.valor || this.valor == 0) {
            erros += "Valor não pode esta zerado!\n";
        }

        if (erros != "") {
            throw erros;
        }
    }
}