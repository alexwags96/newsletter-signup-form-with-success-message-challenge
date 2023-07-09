
const email = document.getElementById('email');

const params = new URLSearchParams(window.location.search);


email.textContent=params.get('email');