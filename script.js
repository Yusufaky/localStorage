// Salvar valor da variável no localStorage
function login() {
  let nome = document.querySelector('#nome').value;
  let pass = document.querySelector('#pass').value;
  if (nome === '' && pass === '') {
    alert('Dados Vazios')
  } else {
    localStorage.setItem('nome', nome);
    localStorage.setItem('pass', pass);
    if (nome === 'Marcos' && pass === '123') {
      window.location.href = "produtos.html";
    } else {
      alert('Valor do Login Incorreto')
    }
  }
}

// Recuperar valor da variável do localStorage
function verLogin() {
  let nome2 = localStorage.getItem('nome');
  let pass2 = localStorage.getItem('pass');
  if (nome2 === null && pass2 === null) {
    document.querySelector('#resultado').innerHTML = "Sem Dados";
    document.querySelector('#resultado2').innerHTML = "Sem Dados";
  } else {
    document.querySelector('#resultado').innerHTML = nome2;
    document.querySelector('#resultado2').innerHTML = pass2;
  }
}

function voltar() {
  localStorage.removeItem('nome');
  localStorage.removeItem('pass');
  window.location.href = "index.html";
}
