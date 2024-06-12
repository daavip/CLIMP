document.addEventListener('DOMContentLoaded', function() {
    
    const modalRotinas = document.getElementById('modal-rotinas');
    const criarRotinasBtn = document.getElementById('criar-rotinas-btn');
    const closeBtnRotinas = document.querySelector('.close-btn');

    criarRotinasBtn.addEventListener('click', function() {
        modalRotinas.style.display = 'block';
    });

    closeBtnRotinas.addEventListener('click', function() {
        modalRotinas.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalRotinas) {
            modalRotinas.style.display = 'none';
        }
    });


    document.querySelectorAll('.btn-excluir-rotina').forEach(button => {
        button.addEventListener('click', function() {
            const sectorId = this.dataset.id;

            fetch(`/routine/delete/${sectorId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('rotina excluida:', data);
                // Atualizar a interface conforme necessário
                location.reload();
            })
            .catch(error => console.error('Erro ao excluir a rotina:', error));
        });
    });

    document.querySelectorAll('.running-toggle').forEach(toggle => {
        toggle.addEventListener('change', function() {
            const routineId = this.dataset.id;
            const newStatus = this.checked ? 1 : 0;
  
            fetch(`/routine/running/${routineId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
                },
                body: JSON.stringify({ running: newStatus })
            })
            .then(response => response.json())
            .then(data => {
                console.log('Status atualizado:', data);
            })
            .catch(error => console.error('Erro ao atualizar o status:', error));
        });
    });
});
