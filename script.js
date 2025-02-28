function verificar_campos_contato() {
    // Essa função pode ser usada para realizar outras verificações se necessário.
}

// Aguardando o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de submit
    const submitButton = document.querySelector('button[type="submit"]');

    // Adiciona um ouvinte de evento de clique
    submitButton.addEventListener('click', function(event) {
        // Previne o comportamento padrão de envio do formulário
        event.preventDefault();

        // Corrigindo: Usando .value em vez de .textContent
        const modelo = document.getElementById("modelo").value;
        const marca = document.getElementById("marca").value;
        const ano = document.getElementById("ano").value;
        const preco = document.getElementById("preco").value;

        // Verificando se algum campo está vazio
        if (modelo === "" || marca === "" || ano === "" || preco === "") {
            alert('Falta inserir informações nos campos!');
        } else {
            alert('Enviado com sucesso!');
            
            // Limpar os campos após o envio (opcional)
            document.getElementById("modelo").value = "";
            document.getElementById("marca").value = "";
            document.getElementById("ano").value = "";
            document.getElementById("preco").value = "";

            // Aqui você pode realizar o envio do formulário ou qualquer outra ação necessária:
            // document.querySelector('form').submit();
        }
    });
});
