// Função para buscar e atualizar o número de máquinas operando na API
async function atualizarMaquinasOperando() {
    // Simulação de dados - substitua este bloco pelo código para buscar na API
    const numeroMaquinasOperando = Math.floor(Math.random() * 10); // Número aleatório entre 0 e 10
    document.getElementById('maquinas-operando').textContent = `${numeroMaquinasOperando} / 10`;
}

// Função para buscar e atualizar o número de máquinas com defeito na API
async function atualizarMaquinasDefeito() {
    // Simulação de dados - substitua este bloco pelo código para buscar na API
    const numeroMaquinasDefeito = Math.floor(Math.random() * 5); // Número aleatório entre 0 e 5
    document.getElementById('maquinas-defeito').textContent = numeroMaquinasDefeito;
}

// Função para buscar e atualizar o total de horas usadas na API
async function atualizarTotalHorasUsadas() {
    // Simulação de dados - substitua este bloco pelo código para buscar na API
    const totalHorasUsadas = Math.floor(Math.random() * 100); // Número aleatório entre 0 e 100
    document.getElementById('total-horas-usadas').textContent = `${totalHorasUsadas}h`;
}

// Função para buscar e atualizar o horário de trabalho do operador na API
async function atualizarHorarioTrabalhoOperador() {
    // Simulação de dados - substitua este bloco pelo código para buscar na API
    const horarioTrabalho = "08:00 - 17:00"; // Horário fixo - substitua pela lógica de busca na API
    document.getElementById('horario-trabalho').textContent = horarioTrabalho;
}

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