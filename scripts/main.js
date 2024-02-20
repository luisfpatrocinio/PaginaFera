

// Assim que a janela
window.onload = criarCards


const nois = [   
    {
    "nome" : "Patrocinio",
    "topicos" : [
        {
            "title" : "Redes Sociais", 
            "content" : ["Black Hole Games", "Github: luisfpatrocinio", "X: @patrocinioluisf", "Linkedin: luisfpatrocinio", "Itch.io: patrocinioluisf", "Discord", "Steam"], 
            "links" : ["https://www.blackhole.games/", "https://github.com/luisfpatrocinio/", "https://twitter.com/patrocinioluisf", "https://linkedin.com/in/luisfpatrocinio/", "https://patrocinioluisf.itch.io/", "https://discordapp.com/users/256614318571782154/", "https://steamcommunity.com/id/patrocinioluisf/"]
        },
        {
            "title" : "Hobbies", "content" : ["Fazer programas", "Jogar volei", "Consumir bebidas", "Fazer joguinhos", "Academia"], 
        }
    ],
    "fotoUrl" : "../assets/images/patro_back.jpeg",
    "fotoUrlFront" : "../assets/images/patro_front.jpeg",
    "dataNasc" : "1995-09-25",
    "key": "patro"
    },

    {
        "nome" : "Ryan",
        "topicos" : [
            {
                "title" : "Redes Sociais", "content" : ["Github", "Instagram: @ryofac", "Linkedin: Ryan Faustino"], "links" : ["https://github.com/ryofac/", "https://www.instagram.com/ryofac/", "https://www.linkedin.com/in/ryan-faustino-b94b57269/"]
            },
            {
                "title" : "Hobbies", "content" : ["Fazer programas em Java >_<", "Consumir cafézinho", "Escutar um rockzinho"]
            },
        ],
        "fotoUrl" : "../assets/images/ryan_back.jpeg",
        "fotoUrlFront" : "../assets/images/ryan_front.jpeg",
        "dataNasc" : "2005-08-19",
        "key": "ryan"
    },

    {
        "nome" : "Hermínio",
        "topicos" : [
            {
                "title" : "Redes Sociais", "content" : ["Github: herminioneto", "Linkedin: Hermínio Neto"], "links" : ["https://www.github.com/herminioneto/", "https://www.linkedin.com/in/herminio-neto/"]
            },
            {
                "title" : "Hobbies", "content" : ["Fazer programas", "Jogar um lolzinho", "Tomar um cafézinho"]
            },
        ],
        "fotoUrl" : "../assets/images/herminio_back.jpeg",
        "fotoUrlFront" : "../assets/images/herminio_front.jpeg",
        "dataNasc" : "2000-11-26",
        "key": "herminio"
    }
]

function criarCards() {
    nois.forEach(pessoa => criarCard(pessoa))

    const cardHeaders = document.getElementsByClassName('person-card');
    for (let i = 0; i < cardHeaders.length; i++) {
        cardHeaders[i].addEventListener('mouseover', function() {
            const img = this.querySelector('img');
            const id = img.getAttribute('id');
            img.src = `../assets/images/${id}_front.jpeg`;
        });

        cardHeaders[i].addEventListener('mouseout', function() {
            const img = this.querySelector('img');
            const id = img.getAttribute('id');
            img.src = `../assets/images/${id}_back.jpeg`;
        });
    }
}


function criarCard(pessoa) {
    const personGrid = document.getElementById('people-grid');
    const alunoCard = createElementWithClassName('div', 'person-card');
    const cardHeader = createElementWithClassName('div', 'card-header');
    const cardBody = createElementWithClassName('div', 'card-content');


    personGrid.appendChild(alunoCard);
    alunoCard.appendChild(cardHeader);
    alunoCard.appendChild(cardBody);

    // atribuir foto padrão caso nao encontre
    const fotoAluno = pessoa.fotoUrl ? pessoa.fotoUrl : 'https://www.w3schools.com/howto/img_avatar.png';
    const dataNasc = pessoa.dataNasc ? pessoa.dataNasc : 'não informada';

    cardHeader.innerHTML = `<img id="${pessoa.key}" src="${fotoAluno}" alt="Foto de ${pessoa.nome}" class="person-photo">  <h2>${pessoa.nome}</h2>`;
    cardBody.innerHTML = `<div class="card-bar"> </div>`
    cardBody.innerHTML += `<p>Data de nascimento: ${formatarDAtaDeNascimento(dataNasc)} </p>`;

    criarTopicos(pessoa.topicos, cardBody)
}

function criarTopicos(topicos, cardBody) {
    topicos.forEach(topico => {

        const topicosList = createElementWithClassName("h3", "card-topic");
        topicosList.textContent = topico.title;

        const listaDePontos = createElementWithClassName("ul", "card-list")

        cardBody.appendChild(topicosList);

        cardBody.appendChild(listaDePontos);

        for (let i = 0; i < topico.content.length; i++) {
            const ponto = topico.content[i];

            // Colocar links caso haja
            if (topico.links) {
                let className = "link-topic"
                listaDePontos.innerHTML += `<li class="${className}" onclick="window.open('${topico.links[i]}', '_blank');" > ${ponto} </li>`
            }
            else {
                listaDePontos.innerHTML += `<li> ${ponto} </li>`
            }

            

        }

        

    })
}


function formatarDAtaDeNascimento(data) {
    const dataNasc = new Date(data);
    const dia = String(dataNasc.getDate()).padStart(2, '0')
    const mes = String(dataNasc.getMonth() + 1).padStart(2, '0');
    return `${dia}/${mes}/${dataNasc.getFullYear()}`;
}






function createElementWithClassName(tagName, className) { 
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}