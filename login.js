// Função para buscar usuários no localStorage
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

// Salva usuários no localStorage
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Login
document.getElementById('loginForm').addEventListener('submit', e => {
  e.preventDefault();

  const email = document.getElementById('email').value.toLowerCase();
  const senha = document.getElementById('senha').value;

  const users = getUsers();
  const user = users.find(u => u.email === email);

  if (!user) {
    alert('Usuário não encontrado.');
    return;
  }

  if (user.senha !== senha) {
    alert('Senha incorreta.');
    return;
  }

  if (!user.confirmado) {
    alert('E-mail não confirmado. Por favor, confirme seu e-mail antes de acessar.');
    return;
  }

  if (!user.autorizado) {
    alert('Usuário não autorizado. Aguarde aprovação.');
    return;
  }

  // Login OK - salva usuário logado e redireciona
  localStorage.setItem('usuarioLogado', JSON.stringify(user));
  alert(`Bem-vindo, ${user.nome}!`);
  window.location.href = 'index.html'; // Ajuste conforme sua página principal
});

// Cadastro
document.getElementById('cadastroForm').addEventListener('submit', e => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('emailCadastro').value.toLowerCase();
  const senha = document.getElementById('senhaCadastro').value;

  if (nome.split(' ').length < 2) {
    alert('Informe pelo menos nome e sobrenome.');
    return;
  }

  let users = getUsers();

  if (users.some(u => u.email === email)) {
    alert('E-mail já cadastrado.');
    return;
  }

  // Novo usuário: não confirmado e não autorizado ainda
  const novoUser = {
    nome,
    email,
    senha,
    confirmado: false,
    autorizado: false,
  };

  users.push(novoUser);
  saveUsers(users);

  alert('Cadastro realizado! Por favor, confirme seu e-mail (simulado).');

  // Simula confirmação clicando aqui:
  if (confirm('Simular confirmação do e-mail agora?')) {
    novoUser.confirmado = true;
    alert('E-mail confirmado! Agora aguarde a autorização.');

    // Atualiza no storage
    saveUsers(users);
  }

  // Limpa formulário
  e.target.reset();
});
