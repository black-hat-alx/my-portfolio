// Get the profile and display cards
const profileCard = document.getElementById('profile-card');
const displayCard = document.getElementById('display-card');

// Add a click event listener to the profile card
profileCard.addEventListener('click', () => {
  alert('Profile card clicked!');
});

// Add a mouseover event listener to the display card
displayCard.addEventListener('mouseover', () => {
  displayCard.style.backgroundColor = '#eee';
});

// Add a mouseout event listener to the display card
displayCard.addEventListener('mouseout', () => {
  displayCard.style.backgroundColor = 'white';
});

// var container = document.querySelector('.bottom-section');
// var scrollAmount = 2; // Adjust this value to change the scroll speed

// function scroll() {
//   container.scrollLeft += scrollAmount;
//   if (container.scrollLeft >= (container.scrollWidth - container.offsetWidth)) {
//     container.scrollLeft = 0;
//   }
// }

// setInterval(scroll, 50); // Adjust this value to change the scrolling interval

