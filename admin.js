// Para simplicidade, não implementamos autenticação para o admin.
// Recomendado implementar depois (pode ser igual ao login).

const userTableBody = document.getElementById('userTableBody');
const logoutBtn = document.getElementById('logoutBtn');

function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function renderUsers() {
  const users = getUsers();
  userTableBody.innerHTML = '';

  users.forEach((user, index) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <td>${user.nome}</td>
      <td>${user.email}</td>
      <td>${user.confirmado ? '✅' : '❌'}</td>
      <td>${user.autorizado ? '✅' : '❌'}</td>
      <td>
        <button onclick="toggleAuthorization(${index})">
          ${user.autorizado ? 'Revogar' : 'Autorizar'}
        </button>
      </td>
    `;

    userTableBody.appendChild(tr);
  });
}

function toggleAuthorization(index) {
  const users = getUsers();
  users[index].autorizado = !users[index].autorizado;
  saveUsers(users);
  renderUsers();
}

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('usuarioLogado');
  window.location.href = 'login.html';
});

// Inicializa
renderUsers();
