function atualizarDataHora() {
    var dataHoraElement = document.getElementById('dataHora');
    var agora = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    var dataHoraFormatada = agora.toLocaleDateString('pt-BR', options);

    dataHoraElement.textContent = dataHoraFormatada;
}

// Atualizar a cada segundo
setInterval(atualizarDataHora, 1000);

// Chamar a função inicialmente para exibir imediatamente
atualizarDataHora();

function abrirPopUp() {
    // URL da página que você quer abrir no pop-up
    var url = 'https://forms.office.com/pages/responsepage.aspx?id=hoDG-Fy5y0mdOO03lAq-9Zf0TVQVXapKqGDznLF4Az1UQjY5Q01OUVJMTDlRWlVSVFo1Qkk5RlEzUS4u';

    // Configuração da janela do pop-up
    var configuracaoPopUp = 'width=2000,height=1200,scrollbars=yes,center';

    // Abrir o pop-up
    window.open(url, 'Forms', configuracaoPopUp);
}