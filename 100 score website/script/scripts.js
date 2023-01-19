//  Responsive menu
var hamburgerButton = document.querySelector('.menuButton');
var menuHeight = document.querySelector('.hidden');

function toggleMenu() {
menuHeight.classList.toggle("hidden");
}

hamburgerButton.onclick = toggleMenu;