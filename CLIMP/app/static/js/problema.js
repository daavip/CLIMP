document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal-defeito");
    const confirmDeleteModal = document.getElementById("confirm-delete-modal");
    const btn = document.getElementById("informar-defeito-btn");
    const span = document.getElementsByClassName("close-btn")[0];
    const form = document.getElementById("informar-defeito-form");
    const table = document.getElementById("aparelhos-table").getElementsByTagName('tbody')[0];

    // Função para mostrar o modal de confirmação de remoção
    function showDeleteConfirmation(row) {
        confirmDeleteModal.style.display = "block";
        document.getElementById("confirm-delete-btn").onclick = function () {
            deleteRow(row);
            confirmDeleteModal.style.display = "none";
        };
        document.getElementById("cancel-delete-btn").onclick = function () {
            confirmDeleteModal.style.display = "none";
        };
        document.querySelector(".close-btn").onclick = function () {
            confirmDeleteModal.style.display = "none";
        };
    }

    // Função para deletar a linha da tabela
    function deleteRow(row) {
        table.deleteRow(row.rowIndex);
    }

    // Função para abrir o modal
    btn.onclick = function () {
        modal.style.display = "block";
    };

    // Função para fechar o modal de defeito
    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    form.onsubmit = function (event) {
        event.preventDefault();
        addNewRow();
    };

    function addNewRow() {
        const nomeAparelho = document.getElementById("nome-aparelho").value;
        const operador = document.getElementById("operador").value;
        const setor = document.getElementById("setor").value;
        const defeito = document.getElementById("defeito").value;

        const newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${nomeAparelho}</td>
            <td>${operador}</td>
            <td>${setor}</td>
            <td>${defeito}</td>
            <td><button class="edit-btn">Editar</button></td>
            <td><button class="delete-btn">Deletar</button></td>
        `;

        modal.style.display = "none";
        form.reset();

        const editBtn = newRow.querySelector(".edit-btn");
        const deleteBtn = newRow.querySelector(".delete-btn");

        editBtn.onclick = function () {
            editRow(newRow);
        };

        deleteBtn.onclick = function () {
            showDeleteConfirmation(newRow);
        };
    }

    function editRow(row) {
        document.getElementById("nome-aparelho").value = row.cells[0].innerText;
        document.getElementById("operador").value = row.cells[1].innerText;
        document.getElementById("setor").value = row.cells[2].innerText;
        document.getElementById("defeito").value = row.cells[3].innerText;
        modal.style.display = "block";

        form.onsubmit = function (event) {
            event.preventDefault();
            row.cells[0].innerText = document.getElementById("nome-aparelho").value;
            row.cells[1].innerText = document.getElementById("operador").value;
            row.cells[2].innerText = document.getElementById("setor").value;
            row.cells[3].innerText = document.getElementById("defeito").value;
            modal.style.display = "none";
            form.reset();
            form.onsubmit = addNewRow;
        };
    }
});
