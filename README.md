# 🌱 CoopAgro PR | Concurso Agrinho 2026

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**CoopAgro PR** é uma plataforma educacional interativa desenvolvida para o **Concurso Agrinho 2026 (Categoria Programação)**. O projeto prova, por meio da tecnologia, que o agronegócio paranaense pode ser altamente produtivo e genuinamente sustentável.

---

## 🎯 Objetivo do Projeto
Atender ao tema *"Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente"*. 
A aplicação desmistifica a ideia de que preservar a natureza custa caro, utilizando os conceitos geográficos de **Milton Santos** (o *meio técnico-científico-informacional*) para ensinar aos produtores como a evolução técnica beneficia tanto a colheita quanto o ecossistema.

## 🚀 Funcionalidades Principais

* **Simulador Agronômico Inteligente:** O coração do projeto. Um motor matemático em JavaScript puro que processa o tamanho da área e o nível tecnológico escolhido para projetar a colheita e a quantidade de água preservada.
* **Acessibilidade de Áudio (Leitura em Voz Alta):** Botões interativos que executam arquivos `.mp3`, lendo a base teórica para usuários com dificuldades visuais ou de leitura.
* **Modo Escuro (Dark Mode):** Alternância fluida de tema baseada em CSS Variáveis e manipulada via JS, gravando a preferência do usuário no `localStorage`.
* **Design Responsivo Avançado:** O layout se adapta perfeitamente a computadores, tablets e celulares utilizando *Flexbox*, *Media Queries* e um Menu Sanduíche customizado.
* **Zero Frameworks:** Cumprindo rigorosamente o regulamento do edital, o site foi construído inteiramente com HTML5, CSS3 e Vanilla JavaScript, sem uso de bibliotecas externas (como Bootstrap) ou CSS/JS *inline*.

## 📂 Estrutura de Arquivos

```text
/
├── assets/
│   ├── audio/
│   │   ├── agro40.mp3
│   │   ├── convencional.mp3
│   │   └── direto.mp3
│   └── img/
│       └── logo.png
├── index.html       # Estrutura semântica da página
├── style.css        # Design System, variáveis e responsividade
├── script.js        # Motor do simulador, áudios e interações de interface
└── README.md        # Documentação do projeto
