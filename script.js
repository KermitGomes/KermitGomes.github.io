// Executa quando a página carregar
document.addEventListener("DOMContentLoaded", () => {

    const btnMenu = document.getElementById("AbrirMN");
    const aside = document.getElementById("aside");
    const main = document.getElementById("main");
    const icone = document.getElementById("theme");

    // Como o menu inicia aberto,
    // o conteúdo já começa deslocado
    if (main) {
        main.classList.add("menu-aberto");
    }

    // Abrir/Fechar menu
    btnMenu.addEventListener("click", () => {

        aside.classList.toggle("hidden");

        if (main) {

            if (aside.classList.contains("hidden")) {
                // Menu fechado → volta para o centro
                main.classList.remove("menu-aberto");
            } else {
                // Menu aberto → vai para a direita
                main.classList.add("menu-aberto");
            }

        }
    });

    // Carregar tema salvo
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("dark-mode");

        if (icone) {
            icone.src = "./icons/light.svg";
        }
    }

    // Carregar tamanho da fonte salvo
    const fonteSalva = localStorage.getItem("tamanhoFonte");

    if (fonteSalva) {
        document.body.style.fontSize = fonteSalva + "px";
    }
});


// Mudar tema
function mudarTema() {
    const body = document.body;
    const icone = document.getElementById("theme");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icone.src = "./icons/light.svg";
        localStorage.setItem("tema", "escuro");
    } else {
        icone.src = "./icons/dark.svg";
        localStorage.setItem("tema", "claro");
    }
}


// Aumentar/Diminuir fonte
function alterarFonte(fator) {
    let tamanhoAtual = parseFloat(
        window.getComputedStyle(document.body).fontSize
    );

    let novoTamanho = tamanhoAtual * fator;

    document.body.style.fontSize = novoTamanho + "px";
    localStorage.setItem("tamanhoFonte", novoTamanho);
}


// Resetar fonte
function resetarFonte() {
    document.body.style.fontSize = "16px";
    localStorage.removeItem("tamanhoFonte");
}

// VERIFICADOR
document.getElementById("formContato").addEventListener("submit", function(event) {

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome.length < 3) {
        alert("O nome deve ter pelo menos 3 caracteres.");
        event.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        alert("Digite um e-mail válido.");
        event.preventDefault();
        return;
    }

    if (mensagem.length < 10) {
        alert("A mensagem deve ter pelo menos 10 caracteres.");
        event.preventDefault();
        return;
    }

    alert("Mensagem enviada com sucesso!");
});