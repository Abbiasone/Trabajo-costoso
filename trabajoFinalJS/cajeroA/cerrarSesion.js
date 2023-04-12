
const cerrarSesionBtn = document.getElementById('cerrarSesionBtn');

cerrarSesionBtn.addEventListener('click', function() {
  localStorage.removeItem('usuario');
  localStorage.removeItem('contraseña');
  
  window.location.href = 'index.html';
});