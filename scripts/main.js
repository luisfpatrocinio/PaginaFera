

// Assim que a janela
window.onload = criarCards


const nois = [   
    {
    "nome" : "Patrocinio",
    "topicos" : [
        {
            "title" : "Redes Sociais", "content" : ["Instagram", "Facebook"]
        },
        {
            "title" : "Hobbies", "content" : ["Jogar volei", "Consumir bebidas"]
        },
        {
            "title" : "Coisas que faz escondido", "content" : ["Bate Masturbacao"]
        }
    ],
    "fotoUrl" : "https://www.w3schools.com/howto/img_avatar.png",
    "dataNasc" : "2000-01-01"
    },

    {
        "nome" : "Patrocinio",
        "topicos" : [
            {
                "title" : "Redes Sociais", "content" : ["Instagram", "Facebook"]
            },
            {
                "title" : "Hobbies", "content" : ["Jogar volei", "Consumir bebidas"]
            },
            {
                "title" : "Coisas que faz escondido", "content" : ["Bate Masturbacao"]
            }
        ],
        "fotoUrl" : "https://www.w3schools.com/howto/img_avatar.png",
        "dataNasc" : "2000-01-01"
        }
]

function criarCards() {
    nois.forEach(pessoa => criarCard(pessoa))
}


function criarCard(pessoa) {
    const personGrid = document.getElementById('people-grid');
    const alunoCard = createElementWithClassName('div', 'person-card');
    const cardHeader = createElementWithClassName('div', 'card-header');
    const cardBody = createElementWithClassName('div', 'card-content');


    personGrid.appendChild(alunoCard);
    alunoCard.appendChild(cardHeader);
    alunoCard.appendChild(cardBody);

    const fotoAluno = pessoa.fotoUrl ? pessoa.fotoUrl : 'https://www.w3schools.com/howto/img_avatar.png';
    const dataNasc = pessoa.dataNasc ? pessoa.dataNasc : 'não informada';


    cardHeader.innerHTML = `<img src="${fotoAluno}" alt="Foto de ${pessoa.nome}" class="person-photo">  <h2>${pessoa.nome}</h2>`;
    cardBody.innerHTML = `<p>Data de nascimento: ${formatarDAtaDeNascimento(dataNasc)} </p>`;

    criarTopicos(pessoa.topicos, cardBody)



}

function criarTopicos(topicos, cardBody) {
    topicos.forEach(topico => {

        const topicosList = createElementWithClassName("h3", "card-topic");
        topicosList.textContent = topico.title;

        const listaDePontos = createElementWithClassName("ul", "card-list")

        cardBody.appendChild(topicosList);

        cardBody.appendChild(listaDePontos);

        topico.content.forEach(ponto => listaDePontos.innerHTML += `<li> ${ponto} </li>`)

        

    })
}


function formatarDAtaDeNascimento(data) {
    const dataNasc = new Date(data);
    const dia = String(dataNasc.getDate()).padStart(2, '0')
    const mes = String(dataNasc.getMonth() + 1).padStart(2, '0');
    return `${dia}/${mes}/${dataNasc.getFullYear()}`;
}



// SCRIPT COMENTADO PARA ANIMAR O GIF DE PERFIL AO PASSAR O MOUSE
document.querySelectorAll('.member img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.src = "assets/profileGif.gif";
        img.style.animationIterationCount = '1';
    });

    // Reiniciar a animação ao sair do mouse
    img.addEventListener('mouseleave', () => {
        img.src = "assets/profileFirstFrame.gif"
    });
});


function createElementWithClassName(tagName, className) { 
    const element = document.createElement(tagName);
    element.className = className;
    return element;
}