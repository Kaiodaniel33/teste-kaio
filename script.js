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
    // 3. LÓGICA DOS ÁUDIOS (Acessibilidade)
    // ==========================================
    const botoesOuvir = document.querySelectorAll('.btn-ouvir');

    botoesOuvir.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // Pega o ID do áudio que está guardado no "data-audio" do botão
            const idAudio = botao.getAttribute('data-audio');
            const elementoAudio = document.getElementById(idAudio);
            
            // Pausa TODOS os áudios para não tocar vozes misturadas
            document.querySelectorAll('audio').forEach(function(audio) {
                audio.pause();
                // Se não for o áudio que o usuário acabou de clicar, zera ele
                if(audio.id !== idAudio) {
                    audio.currentTime = 0;
                }
            });

            // O botão sempre vai ficar como "🔊 Ouvir" 
            // Pega o áudio que o usuário clicou, zera o tempo para o início e toca
            elementoAudio.currentTime = 0;
            elementoAudio.play();
            
            console.log("Tocando áudio do início: " + idAudio);
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
