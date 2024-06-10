document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById("aparelhos-table").getElementsByTagName('tbody')[0];
  const confirmDeleteModal = document.getElementById("confirm-delete-modal");

  // Mostrar o modal de confirmação
  function showDeleteConfirmation(row) {
    confirmDeleteModal.style.display = "block";

    document.getElementById("confirm-delete-btn").onclick = () => {
      deleteRow(row); // Deleta a linha específica passada como argumento
      confirmDeleteModal.style.display = "none"; // Fecha o modal de confirmação
    };

    document.getElementById("cancel-delete-btn").onclick = () => {
      confirmDeleteModal.style.display = "none"; // Fecha o modal sem deletar
    };

    document.querySelector(".close-btn").onclick = () => {
      confirmDeleteModal.style.display = "none";
    };
  }

  // Deletar a linha da tabela
  function deleteRow(row) {
    table.deleteRow(row.rowIndex);
  }

  // Adicionar eventos aos botões de deletar
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const row = this.closest('tr'); // Encontra a linha mais próxima
      showDeleteConfirmation(row); // Mostra o modal de confirmação
    });
  });

  // Fechar modal ao clicar fora do modal
  window.addEventListener('click', event => {
    if (event.target == confirmDeleteModal || event.target == modal) {
      confirmDeleteModal.style.display = "none";
      modal.style.display = 'none';
    }
  });

  const modal = document.getElementById("modal");
  const span = document.getElementsByClassName("close-btn")[0];

  document.getElementById('criar-maquina-btn').onclick = () => modal.style.display = 'block';
  span.onclick = () => modal.style.display = 'none';

  document.getElementById('criar-maquina-form').onsubmit = event => {
    event.preventDefault();
    addOrUpdateRow();
  };

  function addOrUpdateRow(editingRow = null) {
    const name = document.getElementById("name").value;
    const serial = document.getElementById("serial").value;
    const active = document.getElementById("active").value;
    const startTime = new Date().toISOString();

    if (editingRow) {
      editingRow.cells[0].textContent = nomeAparelho;
      editingRow.cells[1].textContent = operador;
      editingRow.cells[2].textContent = setor;
      editingRow.cells[3].setAttribute('data-start-time', startTime);
    } else {
      const newRow = table.insertRow();
      newRow.innerHTML = `
        <td>${nomeAparelho}</td>
        <td>${operador}</td>
        <td>${setor}</td>
        <td data-start-time="${startTime}">Calculando...</td>
        <td>
          <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
          </label>
        </td>
        <td><button class="edit-btn">Editar</button></td>
        <td><button class="delete-btn">Deletar</button></td>
      `;
      newRow.querySelector('.edit-btn').addEventListener('click', () => editRow(newRow));
      newRow.querySelector('.delete-btn').addEventListener('click', () => showDeleteConfirmation(newRow));
    }

    modal.style.display = 'none';
    document.getElementById('criar-maquina-form').reset();
  }

  function editRow(row) {
    document.getElementById("nome-aparelho").value = row.cells[0].innerText;
    document.getElementById("operador").value = row.cells[1].innerText;
    document.getElementById("setor").value = row.cells[2].innerText;
    modal.style.display = 'block';

    document.getElementById('criar-maquina-form').onsubmit = event => {
      event.preventDefault();
      addOrUpdateRow(row);
    };
  }
});
