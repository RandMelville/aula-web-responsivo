document.getElementById("btnEnviar").addEventListener("click", function(event) {
    event.preventDefault();

    const isValid = executeDefaultValidations() && executeCustomValidations();    
        
    if (isValid) {
        alert("Formulário enviado com sucesso!");
        clearInputs();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const menuHamburger = document.querySelector(".menu-hamburger");
    const menuOpcoes = document.querySelector(".menu-opcoes");

    menuHamburger.addEventListener("click", function () {
        if (menuOpcoes.style.display === "flex") {
            menuOpcoes.style.display = "none";
        } else {
            menuOpcoes.style.display = "flex";
            menuOpcoes.style.flexDirection = "column";
            menuOpcoes.style.position = "absolute";
            menuOpcoes.style.top = "80px";
            menuOpcoes.style.right = "20px";
            menuOpcoes.style.backgroundColor = "#fac270";
            menuOpcoes.style.padding = "10px";
            menuOpcoes.style.borderRadius = "8px";
            menuOpcoes.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
        }
    });
});

function getInputValue(inputId) {
    return document.getElementById(inputId).value;
}

function clearInputs(formId) {
    document.getElementById("formContato").reset();
}

function executeDefaultValidations() {
    const form = document.getElementById("formContato");

    if (!form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    return true;
}

function executeCustomValidations() {
    const nome = getInputValue("nome");
    const email = getInputValue("email");
    const mensagem = getInputValue("mensagem");

    if (nome.length > 512) {
        alert("O nome deve ter no máximo 512 caracteres.");
        return false;
    }
    
    if (email.length > 64) {
        alert("O e-mail deve ter no máximo 64 caracteres.");
        return false;
    }
    
    if (mensagem.length > 1024) {
        alert("A mensagem deve ter no máximo 1024 caracteres.");
        return false;
    }

    return true;
}