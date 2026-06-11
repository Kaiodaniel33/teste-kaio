// Espera o HTML carregar antes de rodar os códigos
document.addEventListener('DOMContentLoaded', function() {
    console.log("Sistema CoopAgro PR Iniciado!");

    // ==========================================
    // 1. MODO ESCURO
    // ==========================================
    const botaoTema = document.getElementById('btn-modo-escuro');
    const corpoDaPagina = document.body;

    botaoTema.addEventListener('click', function() {
        corpoDaPagina.classList.toggle('modo-escuro');
        
        if (corpoDaPagina.classList.contains('modo-escuro')) {
            botaoTema.textContent = "☀️ Claro";
            console.log("Modo Escuro ativado.");
        } else {
            botaoTema.textContent = "🌙 Escuro";
            console.log("Modo Claro ativado.");
        }
    });

    // ==========================================
    // 2. MENU SANDUÍCHE (Mobile)
    // ==========================================
    const botaoMenu = document.getElementById('btn-menu-mobile');
    const menuLinks = document.getElementById('menu-links');

    botaoMenu.addEventListener('click', function() {
        menuLinks.classList.toggle('mostrar-menu');
        console.log("Clicou no botão do menu celular.");
    });

    // ==========================================
    // 3. LÓGICA DOS ÁUDIOS (Acessibilidade e Milton Santos)
    // ==========================================
    const botoesOuvir = document.querySelectorAll('.btn-ouvir');

    botoesOuvir.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // Pega o ID do áudio que está guardado no "data-audio" do botão
            const idAudio = botao.getAttribute('data-audio');
            const elementoAudio = document.getElementById(idAudio);
            
            // Pausa todos os outros áudios para não tocar dois juntos
            document.querySelectorAll('audio').forEach(function(audio) {
                if(audio.id !== idAudio) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });

            // Restaura o texto de todos os botões para "Ouvir"
            botoesOuvir.forEach(function(b) {
                b.textContent = "🔊 Ouvir";
            });
            
            // Toca ou pausa o áudio atual
            if (elementoAudio.paused) {
                elementoAudio.play();
                botao.textContent = "⏸️ Pausar";
                console.log("Tocando áudio: " + idAudio);
            } else {
                elementoAudio.pause();
                botao.textContent = "🔊 Ouvir";
                console.log("Áudio pausado: " + idAudio);
            }
        });
    });

    // ==========================================
    // 4. SIMULADOR DE PRODUTIVIDADE E MEIO AMBIENTE
    // ==========================================
    const formulario = document.getElementById('form-simulador');
    const campoNome = document.getElementById('nome');
    const campoArea = document.getElementById('area');
    const campoManejo = document.getElementById('manejo');
    
    const divCarregando = document.getElementById('mensagem-carregando');
    const divResultado = document.getElementById('resultado-relatorio');
    const botaoCalcular = document.getElementById('btn-calcular');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); 
        console.log("Iniciando cálculos do simulador...");

        const nomeDigitado = campoNome.value;
        const areaDigitada = Number(campoArea.value);
        const manejoEscolhido = campoManejo.value;

        botaoCalcular.classList.add('escondido');
        divResultado.classList.add('escondido');
        divCarregando.classList.remove('escondido');

        // Tempo para simular carregamento de dados (2 segundos)
        setTimeout(function() {
            
            let sacasPorHectare = 0;
            let aguaEconomizadaPorHectare = 0;
            let diagnostico = "";

            // Ligação do simulador com a teoria escrita nos cards acima
            if (manejoEscolhido === "convencional") {
                sacasPorHectare = 50;
                aguaEconomizadaPorHectare = 0;
                diagnostico = "Atenção: Seguindo técnicas antigas, seu solo fica exposto. Risco de perda de nutrientes.";
            } 
            else if (manejoEscolhido === "direto") {
                sacasPorHectare = 65;
                aguaEconomizadaPorHectare = 12000;
                diagnostico = "Bom trabalho: O plantio direto usa a palhada como escudo, protegendo o solo e retendo umidade.";
            } 
            else if (manejoEscolhido === "agro40") {
                sacasPorHectare = 85;
                aguaEconomizadaPorHectare = 35000;
                diagnostico = "Excelente! A era técnico-científica-informacional garante máxima produção e grande economia de água!";
            }

            const totalDeSacas = areaDigitada * sacasPorHectare;
            const totalDeAgua = areaDigitada * aguaEconomizadaPorHectare;

            console.log("Relatório gerado com sucesso para: " + nomeDigitado);

            // Injetando o HTML dentro da divResultado
            divResultado.innerHTML = `
                <h3>Olá, ${nomeDigitado}!</h3>
                <p>Aqui está a projeção técnica para os seus <strong>${areaDigitada} hectares</strong>:</p>
                <br>
                <p>🌽 <strong>Colheita Total Estimada:</strong> ${totalDeSacas} sacas.</p>
                <p>💧 <strong>Água Doce Preservada:</strong> ${totalDeAgua} Litros.</p>
                <p>🌍 <strong>Diagnóstico:</strong> ${diagnostico}</p>
            `;

            divCarregando.classList.add('escondido');
            divResultado.classList.remove('escondido');
            
            botaoCalcular.classList.remove('escondido');
            botaoCalcular.textContent = "Refazer Cálculo";

        }, 2000);
    });

});
