/* Side-Bar*/
document.addEventListener('DOMContentLoaded', function() {
    const btnExpandir = document.querySelector('.btn-expandir');
    const menuLateral = document.querySelector('.menu-lateral');
  
    btnExpandir.addEventListener('click', function() {
      menuLateral.classList.toggle('expandido');
    });
  });