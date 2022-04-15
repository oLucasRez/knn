import { migration } from './migration';

const db = migration(500);

db.map((film) => {
  const { action: r, commedy: g, drama: b } = film;

  const ball = document.createElement('div');

  ball.classList.add('ball');

  ball.style.background = `rgb(${r},${g},${b})`;
  ball.style.left = `${r - b / 2}px`;
  ball.style.top = `${255 - (g - b / 2)}px`;
  ball.style.zIndex = `${b}`;

  document.getElementById('root').append(ball);
});
