document.addEventListener('DOMContentLoaded', function() {
    // Configuração do modal de criação de defeito
    const modalDefeito = document.getElementById('modal-defeito');
    const criarDefeitoBtn = document.getElementById('criar-defeito-btn');
    const closeBtnDefeito = document.querySelector('.close-btn');

    criarDefeitoBtn.addEventListener('click', function() {
        modalDefeito.style.display = 'block';
    });

    closeBtnDefeito.addEventListener('click', function() {
        modalDefeito.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalDefeito) {
            modalDefeito.style.display = 'none';
        }
    });

    // Resolver defeito
    document.querySelectorAll('.btn-resolver').forEach(button => {
        button.addEventListener('click', function() {
            const defectId = this.dataset.id;

            fetch(`/defect/resolve/${defectId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': document.querySelector('[name=csrfmiddlewaretoken]').value
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log('Defeito resolvido:', data);
                // Atualizar a interface conforme necessário
                location.reload();
            })
            .catch(error => console.error('Erro ao resolver o defeito:', error));
        });
    });
});
