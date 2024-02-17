window.onload = main
var personGrid = null;

const alunosCadastrados = [];

async function main() {
    personGrid = document.getElementById('people-grid');
    console.log(personGrid)
    var alunos = null;
    try {
        alunos = await getAlunos();
        console.log(alunos);
    } catch (error) {
        alert(error.message);
        return;
    }

    for(i = 0; i < alunos.length; i++){
        var aluno = alunos[i];
        if (aluno in alunosCadastrados) return;
        criarAluno(aluno);
    }
}


async function criarAluno(aluno) {
    const alunoCard = createElementWithClassName('div', 'person-card');
    const cardHeader = createElementWithClassName('div', 'card-header');
    const cardBody = createElementWithClassName('div', 'card-body');

    personGrid.appendChild(alunoCard);
    alunoCard.appendChild(cardHeader);
    alunoCard.appendChild(cardBody);

    const fotoAluno = aluno.fotoUrl ? aluno.fotoUrl : 'https://www.w3schools.com/howto/img_avatar.png';
    const dataNasc = aluno.dataNasc ? aluno.dataNasc : 'não informada';

    cardHeader.innerHTML = `<img src="${fotoAluno}" alt="Foto de ${aluno.nome}" class="person-photo">  <h2>${aluno.nome}</h2>`;
    cardBody.innerHTML = `<p>Data de nascimento: ${formatarDAtaDeNascimento(dataNasc)} </p>  <p> Sobre: ${aluno.descricao} </p>`;
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


async function getAlunos() {
    var alunos = [];
    await fetch("http://localhost:8080/alunos").catch(() => {throw new Error("Não foi possível conectar a API")}).then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Erro ao buscar alunos');
    }).then(data => {alunos = data;});
    return alunos;
}