const produtoController = {
    produtos: [],
    addProduto: function () {
        var produto = new Produto;
        produto.nome = document.getElementById('nome').value;
        produto.descricao = document.getElementById('descricao').value;
        produto.quant = parseInt(document.getElementById('quant').value);
        produto.valor = parseFloat(document.getElementById('valor').value);
        //this.produtos.push(produto);
        if (produto.add(produto)) {
            alert("Produto Adicionado!");
        }
        this.getAllProduto();
    },
    getAllProduto: function () {
        var produto = new Produto;
        this.produtos = produto.getAll();
        var tabela = "<table class='table'> <tr> <th>nome</th> <th>Desescricao</th> <th>Quant</th> <th>Valor</th> </tr>";

        for (var index = 0; index < this.produtos.length; index++) {
            tabela += "<tr> <td>" + this.produtos[index].nome + "</td> <td>" + this.produtos[index].descricao + "</td> <td>" + this.produtos[index].quant + "</td> <td> R$" + this.produtos[index].valor.toFixed(2) + "</td> </tr>";
        }

        tabela += "</table>";
        document.getElementById("listaProdutos").innerHTML = tabela
    }
}