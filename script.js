// Registrar Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registrado', reg))
        .catch(err => console.error('Erro ao registrar Service Worker:', err));
    });
  }
  
  // Formulário de Agendamento
  const form = document.getElementById('agendamentoForm');
  const mensagem = document.getElementById('mensagemSucesso');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    mensagem.classList.remove('hidden');
    form.reset();
  });
  