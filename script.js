// Variaveis Globais
const novaSessao = document.querySelector('#form-data');
const forms = document.querySelector('#evaluation-form');

function textInputValidation() {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const login = document.getElementById('login');
  login.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && senha.value === '123456') {
      return alert('Olá, Tryber!');
    }
    return alert('Email ou senha inválidos.');
  });
}
textInputValidation();

const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');
submitBtn.disabled = true;
agreement.addEventListener('click', () => {
  submitBtn.disabled = !agreement.checked;
});

const area = document.querySelector('#textarea');
area.addEventListener('input', () => {
  const caracteres = area.value.length;

  const contador = document.querySelector('#counter');
  contador.innerHTML = 500 - caracteres;
});

function atribuiNome() {
  const localNome = novaSessao.firstElementChild;
  const nome1 = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  localNome.innerHTML = `Nome:  ${nome1} ${sobrenome}`;
}

function atribuiemail() {
  const localEmail = novaSessao.children[1];
  const email = document.querySelector('#input-email').value;
  localEmail.innerHTML = `Email:  ${email}`;
}

function alteraCasa() {
  const casa = novaSessao.children[2];
  const selecionada = document.querySelector('#house');
  const resposta = selecionada.options[selecionada.selectedIndex].value;
  casa.innerText = `Casa: ${resposta}`;
}

function alteraFamilia() {
  const familia = novaSessao.children[3];
  const selecionado = document.querySelector('input[name=family]:checked').value;
  familia.innerText = `Família: ${selecionado}`;
}

function atribuiMateriais() {
  const LocalMateriais = novaSessao.children[4];
  const escolhida = document.querySelectorAll('input[name=materias]:checked');
  const lista = [];
  for (let index = 0; index < escolhida.length; index += 1) {
    lista.push(` ${escolhida[index].value}`);
  }
  LocalMateriais.innerText = `Matérias:${lista}`;
}

function altribuiAvaliacao() {
  const familia = novaSessao.children[5];
  const selecionado = document.querySelector('input[name=rate]:checked').value;
  familia.innerText = `Avaliação: ${selecionado}`;
}

function atribuiTexto() {
  const observacoes = novaSessao.children[6];
  observacoes.innerText = `Observações: ${area.value}`;
}

function exibeInformacoes(e) {
  e.preventDefault();
  forms.style.display = 'none';
  novaSessao.style.display = 'flex';
  atribuiNome();
  atribuiemail();
  alteraCasa();
  alteraFamilia();
  atribuiMateriais();
  altribuiAvaliacao();
  atribuiTexto();
}
submitBtn.addEventListener('click', exibeInformacoes);
