document.addEventListener('DOMContentLoaded', function() {
    
    const modalChamados = document.getElementById('modal-chamados');
    const criarChamadosBtn = document.getElementById('criar-chamados-btn');
    const closeBtnChamados = document.querySelector('.close-btn');

    criarChamadosBtn.addEventListener('click', function() {
        modalChamados.style.display = 'block';
    });

    closeBtnChamados.addEventListener('click', function() {
        modalChamados.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalChamados) {
            modalChamados.style.display = 'none';
        }
    });


    document.querySelectorAll('.btn-excluir-chamado').forEach(button => {
        button.addEventListener('click', function() {
            const sectorId = this.dataset.id;

            fetch(`/call/delete/${sectorId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('chamado excluido:', data);
                // Atualizar a interface conforme necessário
                location.reload();
            })
            .catch(error => console.error('Erro ao excluir o chamado:', error));
        });
    });

    document.querySelectorAll('.open-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const openId = this.dataset.id;
            const newStatus = this.checked ? 1 : 0;
  
            fetch(`/call/open/${openId}/`, {
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
