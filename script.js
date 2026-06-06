// Aguarda o HTML carregar antes de rodar o código (Boa prática ensinada em aula)
document.addEventListener('DOMContentLoaded', function() {
    console.log("Sistema CoopAgro PR Iniciado com Sucesso!");

    // ==========================================
    // 1. LÓGICA DO MODO ESCURO (Melhoria de Usabilidade)
    // ==========================================
    const botaoTema = document.getElementById('btn-modo-escuro');
    const corpoDaPagina = document.body;

    botaoTema.addEventListener('click', function() {
        // A função toggle adiciona a classe se não tiver, ou tira se já tiver
        corpoDaPagina.classList.toggle('modo-escuro');
        
        // Se a classe foi adicionada, altera o texto do botão
        if (corpoDaPagina.classList.contains('modo-escuro')) {
            botaoTema.textContent = "☀️ Claro";
            console.log("Usuário ativou o Modo Escuro");
        } else {
            botaoTema.textContent = "🌙 Escuro";
            console.log("Usuário voltou para o Modo Claro");
        }
    });

    // ==========================================
    // 2. LÓGICA DO MENU SANDUÍCHE (Mobile)
    // ==========================================
    const botaoMenu = document.getElementById('btn-menu-mobile');
    const menuLinks = document.getElementById('menu-links');

    botaoMenu.addEventListener('click', function() {
        menuLinks.classList.toggle('mostrar-menu');
        console.log("Menu sanduíche clicado.");
    });

    // ==========================================
    // 3. LÓGICA DO SIMULADOR (Matemática e Manipulação de DOM)
    // ==========================================
    // Pegando os elementos do HTML pelo ID
    const formulario = document.getElementById('form-simulador');
    const campoNome = document.getElementById('nome');
    const campoArea = document.getElementById('area');
    const campoManejo = document.getElementById('manejo');
    const divCarregando = document.getElementById('mensagem-carregando');
    const divResultado = document.getElementById('resultado-relatorio');
    const botaoCalcular = document.getElementById('btn-calcular');

    // Função que é executada quando o usuário clica em "Gerar meu Relatório"
    formulario.addEventListener('submit', function(evento) {
        // Evita que a página recarregue sozinha
        evento.preventDefault();
        console.log("Formulário enviado. Processando dados...");

        // Pegando os valores que o usuário digitou nas variáveis
        const nomeDigitado = campoNome.value;
        const areaDigitada = Number(campoArea.value);
        const manejoEscolhido = campoManejo.value;

        // Esconder o botão e mostrar a mensagem de carregando
        botaoCalcular.classList.add('escondido');
        divResultado.classList.add('escondido');
        divCarregando.classList.remove('escondido');

        // Simulando um tempo de processamento de 2 segundos (2000 milissegundos)
        setTimeout(function() {
            
            // Variáveis que vão guardar os resultados do cálculo
            let sacasPorHectare = 0;
            let aguaEconomizadaPorHectare = 0;
            let diagnostico = "";

            // Estrutura de decisão (IF / ELSE IF) baseada na tecnologia
            if (manejoEscolhido === "convencional") {
                sacasPorHectare = 50;
                aguaEconomizadaPorHectare = 0;
                diagnostico = "Atenção: O solo precisa de mais proteção contra chuvas.";
            } 
            else if (manejoEscolhido === "direto") {
                sacasPorHectare = 65;
                aguaEconomizadaPorHectare = 12000;
                diagnostico = "Bom: O plantio direto está protegendo o seu solo da erosão.";
            } 
            else if (manejoEscolhido === "agro40") {
                sacasPorHectare = 85;
                aguaEconomizadaPorHectare = 35000;
                diagnostico = "Excelente: A tecnologia está garantindo a máxima sustentabilidade!";
            }

            // Realizando a matemática final
            const totalDeSacas = areaDigitada * sacasPorHectare;
            const totalDeAgua = areaDigitada * aguaEconomizadaPorHectare;

            console.log("Cálculo concluído para: " + nomeDigitado);
            console.log("Sacas totais calculadas: " + totalDeSacas);

            // Injetando o HTML dentro da divResultado
            // Repare no "Olá, Nome" que é exigência da rubrica
            divResultado.innerHTML = `
                <h3>Olá, ${nomeDigitado}!</h3>
                <p>Aqui está a projeção para os seus <strong>${areaDigitada} hectares</strong>:</p>
                <br>
                <p>🌽 <strong>Colheita Total Estimada:</strong> ${totalDeSacas} sacas.</p>
                <p>💧 <strong>Água Doce Preservada:</strong> ${totalDeAgua} Litros.</p>
                <p>🌍 <strong>Diagnóstico:</strong> ${diagnostico}</p>
            `;

            // Mostra o resultado na tela e tira o carregando
            divCarregando.classList.add('escondido');
            divResultado.classList.remove('escondido');
            
            // Volta o botão para o usuário poder testar de novo
            botaoCalcular.classList.remove('escondido');
            botaoCalcular.textContent = "Calcular Novamente";

        }, 2000); // Fim do setTimeout
    });

}); // Fim do carregamento do documento
