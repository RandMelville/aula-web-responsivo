
document
  .getElementById('formUser')
  .addEventListener('submit', function (event) {
    let isValid = true;
    const inputs = document.querySelectorAll('input');
    let alertShown = false; // Flag para verificar se o alerta já foi exibido

    inputs.forEach((input) => {
      // Verifica se o campo está vazio
      if (input.value.trim() === '') {
        isValid = false;

        // Exibir alerta apenas se ainda não tiver sido exibido
        if (!alertShown) {
          if (input.id === 'nome') {
            alert("Por favor, insira o seu nome!");
          } else if (input.id === 'email') {
            alert("Por favor, insira o seu e-mail!");
          }
          alertShown = true; // Marcar que o alerta foi exibido
        }
      }
    });

    // Impede o envio do formulário se algum campo estiver vazio
    if (!isValid) {
      event.preventDefault();
    }
  });


// Seleciona o header
const header = document.querySelector('header');

// Função para verificar a largura da janela
function verificarTamanho() {
    if (window.innerWidth < 600) {
        header.style.display = 'none'; // Esconde o header se a largura for menor que 600px
    } else {
        header.style.display = 'block'; // Mostra o header caso a largura seja maior ou igual a 600px
    }
}

// Chama a função inicialmente para verificar o tamanho da janela
verificarTamanho();

// Adiciona um ouvinte de evento para ajustar o comportamento quando o tamanho da janela mudar
window.addEventListener('resize', verificarTamanho);
