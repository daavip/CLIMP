/* Side-Bar*/
document.addEventListener('DOMContentLoaded', function() {
  const btnExpandir = document.querySelector('.btn-expandir');
  const menuLateral = document.querySelector('.menu-lateral');

  btnExpandir.addEventListener('click', function() {
    menuLateral.classList.toggle('expandido');
  });
});

/* Contador */
document.addEventListener('DOMContentLoaded', () => {
  const updateTimes = () => {
    const rows = document.querySelectorAll('#aparelhos-table tbody tr');
    rows.forEach(row => {
      const checkbox = row.querySelector('input[type="checkbox"]');
      const timeElement = row.querySelector('td[data-start-time]');
      const startTime = timeElement.dataset.startTime;
      const startDate = new Date(startTime);

      if (!checkbox.checked) {
        const now = new Date();
        const diff = now - startDate;
        const minutes = Math.floor(diff / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        timeElement.textContent = `${minutes}m ${seconds}s`;
      }
    });
  };

  updateTimes();
  setInterval(updateTimes, 1000); // Atualiza a cada segundo
});

/* Modal */
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("criar-maquina-btn");
  const span = document.getElementsByClassName("close-btn")[0];
  const form = document.getElementById("criar-maquina-form");
  const table = document.getElementById("aparelhos-table").getElementsByTagName('tbody')[0];

  // Abre o modal
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // Fecha o modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // Fecha o modal se o usuário clicar fora do modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  // Adiciona nova máquina na tabela quando o formulário é enviado
  form.onsubmit = function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const serial = document.getElementById("serial").value;
    const active = document.getElementById("active").value;

    const newRow = table.insertRow();
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${serial}</td>
      <td>
        <label class="switch">
          <input type="checkbox" checked>
          <span class="slider"></span>
        </label>
      </td>
    `;

    modal.style.display = "none";
    form.reset();
  }
});