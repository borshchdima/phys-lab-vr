// Логіка фізики та ML
function updateMass(newMass) {
  const ball = document.querySelector('#ball');
  ball.setAttribute('dynamic-body', { mass: newMass });
  console.log('Маса оновлена до:', newMass);
}

// Заглушка для ML прогнозування
async function predictLanding(data) {
  console.log('Прогнозування траєкторії для:', data);
  // Тут буде виклик моделі TensorFlow.js
}
