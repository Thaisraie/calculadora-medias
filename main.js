const form = document.getElementById('form-materia');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji chorando">';
const materias = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeMateria = document.getElementById('nome-materia');
    const inputNotaMateria = document.getElementById('nota-materia');

    if (materias.includes(inputNomeMateria.value)) {
        alert(`A matéria: ${inputNomeMateria.value} já foi inserida!`);
    }else {
        materias.push(inputNomeMateria.value);
    notas.push(parseFloat(inputNotaMateria.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeMateria.value}</td>`;
    linha += `<td>${inputNotaMateria.value}</td>`;
    linha += `<td>${inputNotaMateria.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNomeMateria.value = '';
    inputNotaMateria.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}