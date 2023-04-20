const link = document.getElementById('my-link');
const text = document.getElementById('text');
 link.addEventListener('mouseover', () => {
  text.style.display = 'block';
});
 link.addEventListener('mouseout', () => {
  text.style.display = 'none';
});
// const cards = document.querySelectorAll('.small-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    removeActiveClass();
    card.classList.add('active');
  });
});

function removeActiveClass() {
  cards.forEach(card => {
    card.classList.remove('active');
  });
}
const container = document.querySelector('.card-container small-card');
const cards = document.querySelectorAll('.small-card');

container.addEventListener('scroll', function() {
  const center = getCenterCard();
  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === center) {
      cards[i].classList.add('center-card');
    } else {
      cards[i].classList.remove('center-card');
    }
  }
});

function getCenterCard() {
  const containerRect = container.getBoundingClientRect();
  const containerCenter = containerRect.left + containerRect.width / 2;
  let closestCard;
  let closestDistance = Infinity;
  for (let i = 0; i < cards.length; i++) {
    const cardRect = cards[i].getBoundingClientRect();
    const cardCenter = cardRect.left + cardRect.width / 2;
    const distance = Math.abs(containerCenter - cardCenter);
    if (distance < closestDistance) {
      closestCard = cards[i];
      closestDistance = distance;
    }
  }
  return closestCard;
}
