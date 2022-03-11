const produtoController = {
    produto: new Produto, //Criado um produto. Ficar na memoria todo o
    produtos: [],//{} um objeto  e assim [] é um veto
    getDataForm: function () {
        this.produto.nome = document.getElementById('nome').value;
        this.produto.descricao = document.getElementById('descricao').value;
        this.produto.quant = parseInt(document.getElementById('quant').value);
        this.produto.valor = parseFloat(document.getElementById('valor').value);
        this.produto.foto1 = document.getElementById('foto').filename;
    },
    updateDataForm: function (produto = new Produto) {
        document.getElementById('nome').value = produto.nome;
        document.getElementById('descricao').value = produto.descricao;
        document.getElementById('quant').value = produto.quant;
        document.getElementById('valor').value = produto.valor;
        document.getElementById('foto').filename = produto.foto;
    },
    addProduto: function () {
        try {
            this.getDataForm();
            produto.add(this.produto);
            alert("Produto Adicionado!");
            this.getAllProduto();
        } catch (ex) {
            alert(ex);
        }
    },
    getAllProduto: function () {
        var produto = new Produto;
        this.produtos = produto.getAll();
        var tabela = "<table class='table'> <tr> <th>Nome</th> <th>Desescricao</th> <th>Quant</th> <th>Valor</th> <th>//</th> <th>X</th></tr>";

        for (var index = 0; index < this.produtos.length; index++) {
            tabela += "<tr> <td>" + this.produtos[index].nome + "</td> <td>" + this.produtos[index].descricao + "</td> <td>" + this.produtos[index].quant + "</td> <td> R$" + this.produtos[index].valor.toFixed(2) + "</td> <td onclick='produtoController.getProduto(" + index + ")'>//</td> <td>X</td></tr>";
        }

        tabela += "</table>";
        document.getElementById("listaProdutos").innerHTML = tabela
    },
    //validação reativa
    validRequired: function () {
        var campos = document.querySelectorAll(".required");//document.getElementsByClassName("required")
        var erros = document.querySelectorAll(".textErro");

        for (var index = 0; index < campos.length; index++) {
            if (campos[index].value == "") {
                erros[index].style = "display: block";
            } else {
                erros[index].style = "display: none";
            }
        }
    },
    getProduto: function (index = 0) {
        console.log(this.produtos[index]);
        this.updateDataForm(this.produtos[index]);
        this.produto.id = index;
    },
    updateProduto() {
        try {
            this.getDataForm();
            this.produto.update(this.produto, this.produto.id);
            alert("Produto Atualizado!");
            this.getAllProduto();
        } catch (ex) {
            alert(ex);
        }
    }
}