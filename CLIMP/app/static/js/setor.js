document.addEventListener('DOMContentLoaded', function() {
    
    const modalSetor = document.getElementById('modal-setor');
    const criarSetorBtn = document.getElementById('criar-setor-btn');
    const closeBtnSetor = document.querySelector('.close-btn');

    criarSetorBtn.addEventListener('click', function() {
        modalSetor.style.display = 'block';
    });

    closeBtnSetor.addEventListener('click', function() {
        modalSetor.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalSetor) {
            modalSetor.style.display = 'none';
        }
    });


    document.querySelectorAll('.btn-excluir').forEach(button => {
        button.addEventListener('click', function() {
            const sectorId = this.dataset.id;

            fetch(`/sector/delete/${sectorId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Setor excluido:', data);
                // Atualizar a interface conforme necessário
                location.reload();
            })
            .catch(error => console.error('Erro ao excluir o setor:', error));
        });
    });
});
