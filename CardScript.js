const cardContainer = document.querySelector('.card-container-small-card-container');
const cards = cardContainer.querySelectorAll('.small-card');

cardContainer.addEventListener('scroll', () => {
  const centerCardIndex = getCenterCardIndex(cardContainer.scrollLeft, cards);
  cards.forEach((card, index) => {
    if (index === centerCardIndex) {
      card.style.transform = 'scale(1.2)';
    } else {
      card.style.transform = 'scale(1)';
    }
  });
});

function getCenterCardIndex(scrollLeft, cards) {
  const containerWidth = cardContainer.offsetWidth;
  const cardWidth = cards[0].offsetWidth;
  const centerPosition = scrollLeft + containerWidth / 2;
  return Math.floor(centerPosition / cardWidth);
}
