const produtoController = {
    produtos: [],
    addProduto: function() {
        var produto = new Produto;
        produto.nome = document.getElementById('nome').value;
        produto.descricao = document.getElementById('descricao').value;
        produto.quant = parseInt(document.getElementById('quant').value);
        produto.valor = parseFloat(document.getElementById('valor').value);
        this.produtos.push(produto);
        if (produto.add(this.produtos)) {
            alert("Produto Adicionado!");
        }
    }
}