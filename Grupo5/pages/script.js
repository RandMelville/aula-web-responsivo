// Função para verificar campos antes de enviar o formulário
function verificar_campos_contato() {
    let modelo = document.getElementById("modelo").value;
    let marca = document.getElementById("marca").value;
    let ano = document.getElementById("ano").value;
    let preco = document.getElementById("preco").value;

    if (modelo === "" || marca === "" || ano === "" || preco === "") {
        console.log('Falta inserir informações nos campos!');
        alert('Por favor, preencha todos os campos antes de enviar.');
        return false; // Impede o envio do formulário
    }

    return true; // Permite o envio se tudo estiver preenchido
}

// Aguardando o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário
    const form = document.querySelector('form');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function(event) {
        // Se os campos não estiverem preenchidos corretamente, impede o envio
        if (!verificar_campos_contato()) {
            event.preventDefault();
        }
    });
});
