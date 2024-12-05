const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  messageDiv.textContent = ''; // Очищаем предыдущее сообщение
  messageDiv.classList.remove('success', 'error'); // Удаляем предыдущие классы

  // Валидация на стороне клиента (простая проверка)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username.length < 3 || password.length < 6) {
    messageDiv.textContent = 'Логин и пароль должны быть длиннее.';
    messageDiv.classList.add('error');
    return;
  }


  // Имитация отправки на сервер (замените на ваш код)
  setTimeout(() => {
    const success = Math.random() < 0.8; // 80% вероятность успеха
    if (success) {
      messageDiv.textContent = 'Успешный вход!';
      messageDiv.classList.add('success');
    } else {
      messageDiv.textContent = 'Неверный логин или пароль.';
      messageDiv.classList.add('error');
    }
  }, 1000); // 1 секунда для имитации загрузки
});