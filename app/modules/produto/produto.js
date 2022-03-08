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
            this.validData();
            var baseProduto = JSON.parse(localStorage.getItem('produtos'));//JSON.parse() -> pega um json e converte em objeto
            if (baseProduto == null) {
                baseProduto = [];  //Criando Vetor para receber os dados do localstorage
            }

            baseProduto.push(produto); // Adicionando o produto na lista de produtos;
            var produtosJson = JSON.stringify(baseProduto); //Criando JSON dos objetos na baseProduto
            localStorage.setItem('produtos', produtosJson);
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

    //remover produtos

    //validarDados
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