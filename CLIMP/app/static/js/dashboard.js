// Chama as funções para buscar e atualizar as informações quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    atualizarMaquinasOperando();
    atualizarMaquinasDefeito();
    atualizarTotalHorasUsadas();
    atualizarHorarioTrabalhoOperador();
});

// Chama as funções para buscar e atualizar as informações a cada 60 segundos
setInterval(() => {
    atualizarMaquinasOperando();
    atualizarMaquinasDefeito();
    atualizarTotalHorasUsadas();
    atualizarHorarioTrabalhoOperador();
}, 60000);