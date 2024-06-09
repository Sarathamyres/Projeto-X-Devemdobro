btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");

  cartaoAtual--;
  cartoes[cartaoAtual].classList.add("selecionado");
});
