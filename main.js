const form = document.getElementById('form-cadastro');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomePescador = document.getElementById('nome-pescador');
    const telPescador = document.getElementById('telefone-pescador');
    
    let linha = '<tr>';
    linha += `<td>${nomePescador.value}</td>`;
    linha += `<td>${telPescador.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    nomePescador.value = '';
    telPescador.value = '';
});