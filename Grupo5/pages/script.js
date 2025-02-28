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

    // Se todos os campos estão preenchidos, exibe o alerta de sucesso
    alert('Cadastro realizado com sucesso!');
    return true; // Permite o envio se tudo estiver preenchido
}

// Aguardando o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o formulário e o botão
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button');

    // Função para habilitar/desabilitar o botão de envio
    function verificar_botao() {
        let modelo = document.getElementById("modelo").value;
        let marca = document.getElementById("marca").value;
        let ano = document.getElementById("ano").value;
        let preco = document.getElementById("preco").value;

        // Desabilita o botão se algum campo estiver vazio
        if (modelo === "" || marca === "" || ano === "" || preco === "") {
            submitButton.disabled = true;
        } else {
            submitButton.disabled = false;
        }
    }

    // Adiciona evento de input para verificar sempre que os campos mudarem
    form.addEventListener('input', verificar_botao);

    // Desabilita o botão inicialmente
    verificar_botao();

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function(event) {
        // Se os campos não estiverem preenchidos corretamente, impede o envio
        if (!verificar_campos_contato()) {
            event.preventDefault();
        }
    });
});
