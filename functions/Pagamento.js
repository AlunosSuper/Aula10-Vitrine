import LimparCarrinho from "./LimparCarrinho"

export default function Pagamento() {
    window.alert(
    "Faça o pagamento atraves\nda chave PIX: seuemail@gmail.com"
  )
  LimparCarrinho()
  window.location.reload()
}