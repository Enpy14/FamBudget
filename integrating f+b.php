fetch('register.php', {
    method: 'POST',
    body: new FormData(document.querySelector('#registerForm'))
}).then(response => response.text())
  .then(data => alert(data))
  .catch(error => console.error('Error:', error));
