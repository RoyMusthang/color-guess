const rgbColor = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const opt = document.querySelector('.options');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const arrColors = [];
const score = document.getElementById('score');
const pontos = localStorage.getItem('pontos');
if (pontos > 0) score.innerHTML = pontos;

function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `(${r}, ${g}, ${b})`;
}

for (let i = 0; i < balls.length; i += 1) {
  arrColors[i] = generateColor();
}

function getRandomInteger() {
  return Math.floor(Math.random() * 6);
}

function insertColors() {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = `rgb${arrColors[i]}`;
  }
  rgbColor.innerText = arrColors[getRandomInteger()];
}

insertColors();

opt.addEventListener('click', (event) => {
  if ((event.target.tagName = 'div')) {
    if (event.target.style.backgroundColor === `rgb${rgbColor.innerText}`) {
      answer.innerHTML = 'Acertou!';
      score.innerHTML = parseInt(score.innerHTML, 10) + 3;
      localStorage.setItem('pontos', parseInt(score.innerHTML, 10));
    } else {
      answer.innerHTML = 'Errou! Tente novamente!';
    }
  }
});

reset.addEventListener('click', () => {
  window.location.reload();
});