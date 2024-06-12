document.addEventListener('DOMContentLoaded', function() {
  // Configuração do modal de criação de máquina
  const modal = document.getElementById('modal');
  const criarMaquinaBtn = document.getElementById('criar-maquina-btn');
  const closeBtn = document.querySelector('.close-btn');

  criarMaquinaBtn.addEventListener('click', function() {
      modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });

  // Troca de status das máquinas
  document.querySelectorAll('.status-toggle').forEach(toggle => {
      toggle.addEventListener('change', function() {
          const machineId = this.dataset.id;
          const newStatus = this.checked ? 1 : 0;

          fetch(`/machine/status/${machineId}/`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
              },
              body: JSON.stringify({ status: newStatus })
          })
          .then(response => response.json())
          .then(data => {
              console.log('Status atualizado:', data);
          })
          .catch(error => console.error('Erro ao atualizar o status:', error));
      });
  });
});
