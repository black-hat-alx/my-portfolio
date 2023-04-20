var container = document.querySelector('.card-container small-card-container');
var cardWidth = document.querySelector('.small-card').offsetWidth;
var scrollDistance = cardWidth + 20; /* adjust this to the desired distance to scroll */
var currentScroll = 0;

function scrollCards() {
  currentScroll += scrollDistance;
  container.scrollLeft = currentScroll;
  if (currentScroll >= container.scrollWidth - container.offsetWidth) {
    currentScroll = 0;
  }
}

setInterval(scrollCards, 2000); /* adjust this to change the scrolling speed */
