// Arrays para armazenar cadastros de pets e tutores
const cadastros = [];

// Elementos de entrada 
const nomePetInput = document.getElementById('nome-pet');
const idadeInput = document.getElementById('idade');
const generoInput = document.getElementById('genero');
const porteInput = document.getElementById('porte');
const pesoInput = document.getElementById('peso');

const nomeTutorInput = document.getElementById('nome-tutor');
const emailInput = document.getElementById('email');
const enderecoInput = document.getElementById('endereco');

// Função para exibir mensagens de erro
function exibirErro(mensagem) {
    const mensagemErro = document.getElementById('mensagem-erro');
    mensagemErro.textContent = mensagem;
}

// Função para salvar o cadastro
function salvarCadastro(event) {
    event.preventDefault(); 

    // Captura os valores dos campos de entrada
    const cadastroPet = {
        nome: nomePetInput.value.trim(),
        idade: idadeInput.value,
        genero: generoInput.value.trim(),
        porte: porteInput.value.trim(),
        peso: pesoInput.value
    };

    const cadastroTutor = {
        nome: nomeTutorInput.value.trim(),
        email: emailInput.value.trim(),
        endereco: enderecoInput.value.trim()
    };

    // Adiciona o cadastro ao array
    cadastros.push({ cadastroPet, cadastroTutor });
    exibirCadastros();
    limparFormulario();
}

// Função para exibir cadastros na página
function exibirCadastros() {
    const listaCadastros = document.getElementById('lista-cadastros');
    listaCadastros.innerHTML = ''; // Limpa a lista antes de exibir novos dados

    cadastros.forEach((cadastro, index) => {
        const item = document.createElement('div');
        item.classList.add('cadastro-item');
        
        item.innerHTML = `
            <h3>Cadastro ${index + 1}</h3>
            <p><strong>Pet:</strong> ${cadastro.cadastroPet.nome} (${cadastro.cadastroPet.genero}), ${cadastro.cadastroPet.idade} anos, Porte: ${cadastro.cadastroPet.porte}, Peso: ${cadastro.cadastroPet.peso} kg</p>
            <p><strong>Tutor:</strong> ${cadastro.cadastroTutor.nome}, E-mail: ${cadastro.cadastroTutor.email}, Endereço: ${cadastro.cadastroTutor.endereco}</p>
            <button onclick="editarCadastro(${index})">Editar</button>
            <button onclick="deletarCadastro(${index})">Deletar</button>
        `;

        listaCadastros.appendChild(item);
    });
}

// Função para limpar os campos do formulário
function limparFormulario() {
    document.getElementById('form-cadastro-pet').reset();
    document.getElementById('form-cadastro-tutor').reset();
    exibirErro(""); // Limpa a mensagem de erro
}

// Função para editar um cadastro
function editarCadastro(index) {
    const cadastro = cadastros[index];

    // Preenche os campos do formulário com os dados do cadastro selecionado
    nomePetInput.value = cadastro.cadastroPet.nome;
    idadeInput.value = cadastro.cadastroPet.idade;
    generoInput.value = cadastro.cadastroPet.genero;
    porteInput.value = cadastro.cadastroPet.porte;
    pesoInput.value = cadastro.cadastroPet.peso;

    nomeTutorInput.value = cadastro.cadastroTutor.nome;
    emailInput.value = cadastro.cadastroTutor.email;
    enderecoInput.value = cadastro.cadastroTutor.endereco;

    // Remove o cadastro para re-salvá-lo com as novas informações
    cadastros.splice(index, 1);
    exibirCadastros();
}

// Função para deletar um cadastro
function deletarCadastro(index) {
    cadastros.splice(index, 1);
    exibirCadastros();
}

// Evento de envio do formulário
document.getElementById('form-cadastro-tutor').addEventListener("submit", salvarCadastro);

