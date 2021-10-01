let loginBtn = document.querySelector('#login');
let createBtn = document.querySelector('#create');

$('.message a').click(function () {
  $('form').animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
});

const createFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#name-create').value.trim();
  const email = document.querySelector('#email-create').value.trim();
  const password = document.querySelector('#password-create').value.trim();

  if (email && password) {
    const response = await fetch('/api/profile', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create account');
    }
  }
};

createBtn.addEventListener('click', createFormHandler);

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/profile/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

loginBtn.addEventListener('click', loginFormHandler);
