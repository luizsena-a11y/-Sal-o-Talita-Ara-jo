let servicoSelecionado = '';

// FUNÇÃO ÚNICA (escolha uma das duas opções acima)
function selecionarServico(elemento, servico) {
    // Remove seleção anterior
    document.querySelectorAll('.chip').forEach(chip => {
        chip.classList.remove('active');
    });
    
    // Adiciona seleção atual
    elemento.classList.add('active');
    
    // Salva o serviço
    servicoSelecionado = servico;
}

function enviarWhatsApp(event) {
    event.preventDefault();

    // Pega os valores
    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const servico = servicoSelecionado;

    // Valida
    if (!servico) {
        alert('Por favor, selecione um serviço!');
        return;
    }

    // Formata data
    const dataFormatada = new Date(data + 'T00:00:00').toLocaleDateString('pt-BR');

    // Monta mensagem
    const mensagem = `*Novo Agendamento* "💇‍♀️";

*Nome:* ${nome}
*Data:* ${dataFormatada}
*Horário:* ${horario}
*Serviço:* ${servico}

Aguardo confirmação! 😊`.trim();

    // Envia
    const mensagemCodificada = encodeURIComponent(mensagem);
    const linkWhatsApp = `https://wa.me/5521975176417?text=${mensagemCodificada}`;
    
    window.open(linkWhatsApp, '_blank');
}

// Carrossel Bootstrap
var myCarousel = document.querySelector('#carouselExample');
if (myCarousel) {
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        wrap: true
    });
}