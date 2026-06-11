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
    // Pega todos os botões que tem a classe btn-ouvir
    const botoesOuvir = document.querySelectorAll('.btn-ouvir');

    botoesOuvir.forEach(function(botao) {
        botao.addEventListener('click', function() {
            // Pega o ID do áudio que está guardado no "data-audio" do botão
            const idAudio = botao.getAttribute('data-audio');
            const elementoAudio = document.getElementById(idAudio);
            
            // Verifica se o áudio está pausado
            if (elementoAudio.paused) {
                elementoAudio.play();
                botao.textContent = "⏸️ Pausar";
                console.log("Tocando áudio: " + idAudio);
            } else {
                // Se já estiver tocando, a gente pausa
                elementoAudio.pause();
                botao.textContent = "🔊 Ouvir";
                console.log("Áudio pausado: " + idAudio);
            }
        });
    });

    // ==========================================
    // 4. SIMULADOR DE PRODUTIVIDADE
    // ==========================================
    const formulario = document.getElementById('form-simulador');
    const campoNome = document.getElementById('nome');
    const campoArea = document.getElementById('area');
    const campoManejo = document.getElementById('manejo');
    
    const divCarregando = document.getElementById('mensagem-carregando');
    const divResultado = document.getElementById('resultado-relatorio');
    const botaoCalcular = document.getElementById('btn-calcular');

    formulario.addEventListener('submit', function(evento) {
        evento.preventDefault(); // Não deixa a página recarregar
        console.log("Calculando simulador...");

        const nomeDigitado = campoNome.value;
        const areaDigitada = Number(campoArea.value);
        const manejoEscolhido = campoManejo.value;

        // Esconde botão e resultado, mostra mensagem de espera
        botaoCalcular.classList.add('escondido');
        divResultado.classList.add('escondido');
        divCarregando.classList.remove('escondido');

        // Um tempo de 2 segundos para fingir que está pensando muito
        setTimeout(function() {
            
            let sacasPorHectare = 0;
            let aguaEconomizadaPorHectare = 0;
            let diagnostico = "";

            if (manejoEscolhido === "convencional") {
                sacasPorHectare = 50;
                aguaEconomizadaPorHectare = 0;
                diagnostico = "Atenção: O solo precisa de mais proteção contra chuvas e desgaste.";
            } 
            else if (manejoEscolhido === "direto") {
                sacasPorHectare = 65;
                aguaEconomizadaPorHectare = 12000;
                diagnostico = "Bom: O plantio direto está protegendo o solo e retendo umidade.";
            } 
            else if (manejoEscolhido === "agro40") {
                sacasPorHectare = 85;
                aguaEconomizadaPorHectare = 35000;
                diagnostico = "Excelente: A tecnologia está garantindo máxima sustentabilidade e menor uso de água!";
            }

            const totalDeSacas = areaDigitada * sacasPorHectare;
            const totalDeAgua = areaDigitada * aguaEconomizadaPorHectare;

            console.log("Sucesso! Relatório gerado para: " + nomeDigitado);

            // Colocando os textos no HTML pelo JS
            divResultado.innerHTML = `
                <h3>Olá, ${nomeDigitado}!</h3>
                <p>Aqui está a projeção sustentável para os seus <strong>${areaDigitada} hectares</strong>:</p>
                <br>
                <p>🌽 <strong>Colheita Estimada:</strong> ${totalDeSacas} sacas totais.</p>
                <p>💧 <strong>Água Preservada:</strong> ${totalDeAgua} Litros na irrigação.</p>
                <p>🌍 <strong>Diagnóstico da Terra:</strong> ${diagnostico}</p>
            `;

            divCarregando.classList.add('escondido');
            divResultado.classList.remove('escondido');
            
            botaoCalcular.classList.remove('escondido');
            botaoCalcular.textContent = "Refazer Cálculo";

        }, 2000);
    });

});
