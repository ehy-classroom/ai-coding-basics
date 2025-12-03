

// Slides-Daten als JSON

let slidesData = [];
let cols = 3;
let row = 0;
let col = 0;
let rows = 1;
const matrix = document.querySelector('.slide-matrix');

function renderSlides() {
  matrix.innerHTML = '';
  slidesData.forEach(slide => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide';
    slideDiv.innerHTML = `<h2>${slide.title}</h2><ul>${slide.points.map(p => `<li>${p}</li>`).join('')}</ul>`;
    matrix.appendChild(slideDiv);
  });
}

function updateMatrixGrid() {
  rows = Math.ceil(slidesData.length / cols);
  matrix.style.gridTemplateColumns = `repeat(${cols}, 100vw)`;
  matrix.style.gridTemplateRows = `repeat(${rows}, 100vh)`;
  matrix.style.width = `${cols * 100}vw`;
  matrix.style.height = `${rows * 100}vh`;
}

function updateMatrixPosition() {
  matrix.style.transform = `translate(${-col * 100}vw, ${-row * 100}vh)`;
  matrix.style.transition = 'transform 0.5s cubic-bezier(.77,0,.18,1)';
}

function move(dx, dy) {
  row = Math.max(0, Math.min(rows - 1, row + dy));
  col = Math.max(0, Math.min(cols - 1, col + dx));
  updateMatrixPosition();
}

document.getElementById('up').onclick = () => move(0, -1);
document.getElementById('down').onclick = () => move(0, 1);
document.getElementById('left').onclick = () => move(-1, 0);
document.getElementById('right').onclick = () => move(1, 0);
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') move(0, -1);
  if (e.key === 'ArrowDown') move(0, 1);
  if (e.key === 'ArrowLeft') move(-1, 0);
  if (e.key === 'ArrowRight') move(1, 0);
});

// Folie hinzufügen
document.getElementById('add-slide').onclick = () => {
  slidesData.push({ title: `Neue Folie`, points: ["Punkt 1", "Punkt 2", "Punkt 3"] });
  renderSlides();
  updateMatrixGrid();
  updateMatrixPosition();
};

// Spaltenanzahl ändern
document.getElementById('col-count').addEventListener('change', e => {
  cols = Math.max(1, parseInt(e.target.value, 10));
  rows = Math.ceil(slidesData.length / cols);
  // Reset auf erste Folie
  row = 0;
  col = 0;
  updateMatrixGrid();
  updateMatrixPosition();
});

// Daten aus data.json laden und initialisieren
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    slidesData = data;
    renderSlides();
    updateMatrixGrid();
    updateMatrixPosition();
  });
