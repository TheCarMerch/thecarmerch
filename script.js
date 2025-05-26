function filterCategory(category) {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.style.display = card.classList.contains(category) ? 'block' : 'none';
  });
}
function toggleTheme() {
  const body = document.body;
  body.style.backgroundColor = body.style.backgroundColor === 'white' ? '#111' : 'white';
  body.style.color = body.style.color === 'black' ? '#eee' : 'black';
}