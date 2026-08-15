// functions/RemoverCarrinho.js

export default function RemoverCarrinho(codigo) {
  const texto    = localStorage.getItem("carrinho")
  const carrinho = JSON.parse(texto || "[]")
  const novo     = carrinho.filter(function(item) {
    return item !== codigo
  })
  localStorage.setItem("carrinho", JSON.stringify(novo))
}