const siteHeaderHamburgerButton = document.getElementById("site-header__hamburger-button");
const siteHeaderXButton = document.getElementById("site-header__x-button");
const siteHeaderNavbarMenu = document.getElementById("site-header__navbar-menu");
const siteHeaderNavbarServicesLi = document.getElementById("site-header__navbar-services").firstChild;
const siteHeaderNavbarChildrenUl = document.getElementById("site-header__navbar-children-ul");
const siteHeaderNavbarUpdownIcon = document.getElementById("site-header__navbar-updown-icon");

const siteHeaderHamburgerButtonHandler = () => {
	//siteHeaderNavbarMenu.classList.toggle("visible");
	siteHeaderNavbarMenu.classList.toggle("hidden");
	//siteHeaderHamburgerButton.classList.toggle("visible");
	siteHeaderHamburgerButton.classList.toggle("hidden");
	//siteHeaderXButton.classList.toggle("visible");
	siteHeaderXButton.classList.toggle("hidden");
}
siteHeaderHamburgerButton.addEventListener("click", siteHeaderHamburgerButtonHandler);
siteHeaderXButton.addEventListener("click", siteHeaderHamburgerButtonHandler);

const siteHeaderNavbarServicesLiHandler = () => {
	siteHeaderNavbarChildrenUl.classList.toggle("visible");
	siteHeaderNavbarChildrenUl.classList.toggle("hidden");
	siteHeaderNavbarChildrenUl.classList.toggle("zero-height");
	siteHeaderNavbarUpdownIcon.classList.toggle("up");
	siteHeaderNavbarUpdownIcon.classList.toggle("down");
}
siteHeaderNavbarServicesLi.addEventListener("click", siteHeaderNavbarServicesLiHandler);

// adds the "hidden" class to the navbar on window load
if (window.innerWidth < 991) siteHeaderNavbarMenu.classList.add("hidden");

const getViewPort = () => window.screen.availWidth < 991 ? "small" : "large"
let currentViewPort = getViewPort();
window.onresize = () => {
	const newViewPort = getViewPort()
	if (currentViewPort !== newViewPort) {
		if (currentViewPort === "small") {
			siteHeaderNavbarMenu.classList.remove("hidden");
			siteHeaderXButton.classList.add("hidden");
		}
		if (currentViewPort === "large") {
			siteHeaderNavbarMenu.classList.add("hidden");
			siteHeaderXButton.classList.add("hidden");
			siteHeaderHamburgerButton.classList.remove("hidden");
		}
	}
	currentViewPort = newViewPort
}