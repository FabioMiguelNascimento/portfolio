var translations = {
    'en': {
        'WhoAmI': 'Who am I',
        'WhoAmIText': 'Since childhood, I have maintained a strong involvement with the world of technology, awakening an interest in programming from an early age. Over the years, I have developed skills in creating small codes and functions. Currently, at 19 years old, I am looking for opportunities in the technology market. I have a great appreciation for video games and a deep interest in web development, especially using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, in addition to software development with <b>Java</b>, <b>Spring Boot</b> and <b>C#</b>',
        'Language': 'Language',
        'LanguageText': 'These are some of the <b>languages</b> and <b>frameworks</b> that I have professionalized over the years</span>',
        'Projects': 'Projects',
        'ProjectsText': 'In this section, you will find a selection of my most recent projects, as well as those that I consider the best and most representative of my work',
        'repository': 'Repository',
        'LikedWhatYouSaw?': 'Did you like what you saw?',
        'LikedWhatYouSaw?Text': 'If you like my work and want to contact me, feel free to send me a message. I am always open to new opportunities and challenges',
        'GetInTouch': 'Get in Touch',
        'Name': 'Name',
        'Phone': 'Phone',
        'Message': 'Message',
        'Submit': 'Submit',
        'NavLanguage': 'Languages',
        'NavProjects': 'Projects',
        'NavContact': 'Contact',
        'Repository': '<i class="fab fa-github"></i> <b>Repository</b>',
        'footer-credits': '© 2024 <b>Fabio Miguel Nascimento</b>. All rights reserved',
        'fullstack': 'Front-end Developer',

        'project_name_1': 'Online Store',
        'project_description_1': 'This project is a replica of an e-commerce store for selling various products. It relies on JavaScript to perform the functions of fetch, product categories (in production), shopping cart (in production), product filtering (in production)',
        'project_name_2': 'Animal World',
        'project_description_2': 'This project is nothing more than a simple Landing Page that uses some functions such as shape-outside and clip path. This project shows a little about my design quality and how I internalize it in the code.',
        'project_name_3': 'Landing Pages',
        'project_description_3': 'Here I demonstrate some landing pages I made in Figma and Photoshop. These are launch pages for people and small causes.',

        'status_em_andamento': 'In Progress',
        'status_concluído': 'Completed',

        'tech_html': 'HTML',
        'tech_css': 'CSS',
        'tech_javascript': 'JavaScript',
        'tech_figma': 'Figma',
        'tech_photoshop': 'Photoshop',

        'link_github': 'GitHub',
        'link_site': 'Website',
        'link_figma': 'Figma'
    },
    'pt': {
        'WhoAmI': 'Quem eu sou',
        'WhoAmIText': 'Desde a infância, tenho mantido um forte envolvimento com o universo da tecnologia, despertando um interesse pela programação desde cedo. Ao longo dos anos, desenvolvi habilidades na criação de pequenos códigos e funções. Atualmente, aos 19 anos, estou buscando oportunidades no mercado de tecnologia. Tenho um grande apreço por videogames e um profundo interesse em desenvolvimento web, especialmente utilizando <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, além do desenvolvimento de software com <b>Java</b>, <b>Spring Boot</b> e <b>C#</b>',
        'Language' : 'Linguagens',
        'LanguageText': 'Essas são algumas das <b>linguagens</b> e <b>frameworks</b> que tenho me profissionalizado ao longo dos anos</span>',
        'Projects': 'Projetos',
        'ProjectsText': 'Nesta seção, você encontrará uma seleção dos meus projetos mais recentes, bem como aqueles que considero os melhores e mais representativos do meu trabalho',
        'repository' : 'Repositório',
        'LikedWhatYouSaw?' : 'Gostou do que viu?',
        'LikedWhatYouSaw?Text' : 'Se você gostou do meu trabalho e deseja entrar em contato comigo, sinta-se à vontade para me enviar uma mensagem. Estou sempre aberto a novas oportunidades e desafios',
        'GetInTouch' : 'Entre em Contato',
        'Name' : 'Nome',
        'Phone' : 'Telefone',
        'Message' : 'Mensagem',
        'Submit' : 'Enviar',
        'NavLanguage': 'Linguagens',
        'NavProjects': 'Projetos',
        'NavContact': 'Contato',
        'Repository': '<i class="fab fa-github"></i> <b>Repositório</b>',
        'footer-credits' : '© 2024 <b>Fábio Miguel Nascimento</b>. Todos os direitos reservados',
        'fullstack': 'Desenvolvedor Front-end',

        'project_name_1': 'Loja Online',
        'project_description_1': 'Este projeto é uma réplica de uma loja de comércio eletrônico para venda de diversos produtos. Ele conta com JavaScript para realizar as funções de fetch, categorias de produtos (em produção), carrinho de compras (em produção), filtragem de produtos (em produção)',
        'project_name_2': 'Mundo Animal',
        'project_description_2': 'Este projeto não passa de uma simples Landing Page que utiliza algumas funções como shape-outside e clip path. Este projeto mostra um pouco sobre a minha qualidade de design e como eu internalizo isso no código.',
        'project_name_3': 'Landing Pages',
        'project_description_3': 'Aqui demonstro algumas landing pages que fiz no Figma e Photoshop. São páginas de lançamento para pessoas e pequenas causas.',
        'status_em_andamento': 'Em andamento',
        'status_concluído': 'Concluído',

        'tech_html': 'HTML',
        'tech_css': 'CSS',
        'tech_javascript': 'JavaScript',
        'tech_figma': 'Figma',
        'tech_photoshop': 'Photoshop',

        'link_github': 'GitHub',
        'link_site': 'Site',
        'link_figma': 'Figma'
    }
};

function changeLanguage(lang) {
    var elements = document.querySelectorAll('[data-translate]');
    elements.forEach(function (element) {
        var key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

