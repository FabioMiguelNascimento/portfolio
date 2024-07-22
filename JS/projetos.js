// Função para carregar os dados do JSON
async function carregarProjetos() {
    try {
        const response = await fetch('/data/projetos.json');
        const data = await response.json();
        return data.categorias;
    } catch (error) {
        console.error('Erro ao carregar os projetos:', error);
    }
}

// Função para criar o HTML de um projeto individual
function criarHTMLProjeto(projeto, index) {
    const direcao = index % 2 === 0 ? 'esquerda' : 'direita';
    
    function getIconPath(linguagem) {
        const nomeArquivo = linguagem.toLowerCase().replace(/[^a-z0-9]/g, '') + '.svg';
        return `./icons/${nomeArquivo}`;
    }

    function getStatusEmoji(status) {
        switch (status.toLowerCase()) {
            case 'em andamento':
                return '🚧'; // Emoji de construção
            case 'concluído':
                return '✅'; // Emoji de check verde
            default:
                return '❓'; // Emoji de interrogação para status desconhecido
        }
    }

    return `
    <div class="box ${direcao} ${projeto.nome.replace(/\s+/g, '')}">
        <div class="image">
            <a href="${projeto.links.find(link => link.nome === 'Site')?.url || '#'}" target="_blank">
                <img src="${projeto.imagem}" alt="${projeto.nome}">
            </a>
        </div>
        <div class="detalhes">
            <div class="status-emoji tooltip">
                ${getStatusEmoji(projeto.status)}
                <span class="tooltiptext">${projeto.status}</span>
            </div>
            <div class="nome">
                <h1>${projeto.nome}</h1>
            </div>
            <div class="descricao">
                <p>${projeto.descricao}</p>
            </div>
            <ul class="techstack">
                ${projeto.linguagens ? projeto.linguagens.map(lang => 
                    `<li class="tooltip">
                        <img src="${getIconPath(lang)}" alt="${lang}" class="icon">
                        <span class="tooltiptext">${lang}</span>
                    </li>`
                ).join('') : ''}
            </ul>
            <div class="btns">
                ${projeto.links.map(link => 
                    `<a href="${link.url}" target="_blank" class="projetos-botao">
                        <i class="${link.nome.toLowerCase() === 'site' ? 'fas fa-play' : 'fab fa-' + link.nome.toLowerCase()} icon"></i>
                        <span>${link.nome}</span>
                    </a>`
                ).join('')}
            </div>
        </div>
    </div>
    `;
}

// Função para renderizar todos os projetos
async function renderizarProjetos() {
    const categorias = await carregarProjetos();
    const container = document.querySelector('.container');
    
    if (!container) {
        console.error('Elemento .container não encontrado');
        return;
    }

    if (!categorias) {
        console.error('Não foi possível carregar os projetos');
        return;
    }

    let todosOsProjetos = categorias.flatMap(categoria => categoria.projetos);

    todosOsProjetos.forEach((projeto, index) => {
        const projetoHTML = criarHTMLProjeto(projeto, index);
        container.innerHTML += projetoHTML;
    });
}

// Inicialização
function inicializar() {
    renderizarProjetos();
}

// Esperar o DOM carregar completamente antes de inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}