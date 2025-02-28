// Função para garantir que o DOM esteja completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    // Função para abrir/fechar o menu em telas menores
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');  // Alterna a classe "show" para mostrar/ocultar o menu
    });

    // Validação do formulário
    document.getElementById('form-contato').addEventListener('submit', function(event) {
        event.preventDefault();  // Previne o comportamento padrão do formulário (não envia a página)

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const sugestao = document.getElementById('sugestao').value;

        // Verificando se todos os campos foram preenchidos
        if (!nome || !email || !sugestao) {
            alert('Por favor, preencha todos os campos!');
            return;  // Retorna para evitar o envio do formulário
        }

        // Verificando se o e-mail é válido
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, insira um e-mail válido!');
            return;  // Retorna para evitar o envio do formulário
        }

        // Caso todos os campos estejam corretos
        alert('Formulário enviado com sucesso!');
        
        // Aqui você pode enviar os dados para um servidor ou executar outra ação.
        // Por exemplo, limpando os campos após o envio:
        document.getElementById('form-contato').reset();
    });
});
