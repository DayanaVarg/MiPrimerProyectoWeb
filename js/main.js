const consejos = [
  'Usa siempre casco, rodilleras, coderas y muñequeras.',
  'Mantén las rodillas ligeramente flexionadas para tener mejor equilibrio.',
  'Aprende a frenar antes de aumentar la velocidad.',
  'Patina en superficies lisas y evita zonas con mucho tráfico.',
  'Revisa tus ruedas y rodamientos antes de cada práctica.'
];

document.getElementById('btnConsejo').addEventListener('click', function () {
  const aleatorio = consejos[Math.floor(Math.random() * consejos.length)];
  document.getElementById('consejo').textContent = aleatorio;
});
