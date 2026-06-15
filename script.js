const botao = document.getElementById("AbrirMN");
const aside = document.getElementById("aside");

botao.addEventListener("click", () => {
    aside.classList.toggle("aberto");
});