let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
function toonMenu() {
	if (navMenu.style.display === "flex") {
		navMenu.style.display = "none";
	} else {
		navMenu.style.display = "flex";
	}
}
menuKnop.addEventListener("click",toonMenu);
