import axios from "axios"

// Slide 4: Função para cadastrar um novo produto via POST
function CatalogarProduto(produto) {
  return axios({
    method: "POST",
    url: "http://localhost:4000/catalogar",
    data: {
      codigo: produto.codigo,
      marca: produto.marca,
      modelo: produto.modelo,
      preco: produto.preco,
      descricao: produto.descricao,
      imagens: produto.imagens,
      promocao: produto.promocao
    }
  })
}

// Slide 5: Função para obter a lista de produtos via GET
function ObterProdutos() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/produtos"
  })
}

// Slide 6: Função para obter os detalhes de um produto específico via GET
function ObterProdutoCodigo(codigo) {
  return axios({
    method: "GET",
    url: `http://localhost:4000/produto/${codigo}`
  })
}

// Slide 7: Função para buscar produtos que estão em promoção via GET
function ObterPromocao() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/promocao"
  })
}

// Exportação em bloco de todas as funções (Slide 5)
export {
  CatalogarProduto,
  ObterProdutos,
  ObterProdutoCodigo,
  ObterPromocao
}