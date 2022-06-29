const heroImageButton = document.getElementById("hero-image__button");
const heroImageScrollIcon = document.getElementById("hero-image__scroll");
const ctaArticleButton = document.getElementById("cta-article__button");
const cta2ArticleButton = document.getElementById("cta2-article__button");
const googleReviewsButton = document.getElementById("google-reviews");
const trustpilotReviewsButton = document.getElementById("trustpilot-reviews");
const lavadoDetailButton = document.getElementById("lavado-detail");
const lavadoCompletoButton = document.getElementById("lavado-completo");
const lavadoIntegralButton = document.getElementById("lavado-integral");
const siteHeaderHamburgerButton = document.getElementById("site-header__hamburger-button");
const siteHeaderXButton = document.getElementById("site-header__x-button");
const siteHeaderNavbarMenu = document.getElementById("site-header__navbar-menu");
const siteHeaderNavbarServicesLi = document.getElementById("site-header__navbar-services").firstChild;
const siteHeaderNavbarChildrenUl = document.getElementById("site-header__navbar-children-ul");
const siteHeaderNavbarUpdownIcon = document.getElementById("site-header__navbar-updown-icon");

const heroImageButtonClickHandler = () => {
	window.open("https://miauriga.com/collections/limpieza", "_blank")
}
heroImageButton.addEventListener("click", heroImageButtonClickHandler);

const heroImageScrollIconCLickHandler = () => {
	window.location.href = "#pancake-section__first";
	// removing # from the url
	let scrollV, scrollH, loc = window.location;
	if ("pushState" in history)
		history.replaceState("", document.title, loc.pathname + loc.search);
	else {
		// Prevent scrolling by storing the page's current scroll offset
		scrollV = document.body.scrollTop;
		scrollH = document.body.scrollLeft;

		loc.hash = "";

		// Restore the scroll offset, should be flicker free
		document.body.scrollTop = scrollV;
		document.body.scrollLeft = scrollH;
	}
}
heroImageScrollIcon.addEventListener("click", heroImageScrollIconCLickHandler);

const ctaArticleButtonClickHandler = () => {
	window.open("https://miauriga.com/collections/limpieza", "_blank");
}
ctaArticleButton.addEventListener("click", ctaArticleButtonClickHandler);

const cta2ArticleButtonClickHandler = () => {
	window.open("https://miauriga.com/collections/limpieza", "_blank");
}
cta2ArticleButton.addEventListener("click", cta2ArticleButtonClickHandler);

const googleReviewsButtonClickHandler = () => {
	window.open("https://g.page/miauriga", "_blank");
}
googleReviewsButton.addEventListener("click", googleReviewsButtonClickHandler);

const trustpilotReviewsButtonClickHandler = () => {
	window.open("https://es.trustpilot.com/review/miauriga.com", "_blank");
}
trustpilotReviewsButton.addEventListener("click", trustpilotReviewsButtonClickHandler);

const lavadoDetailButtonHandler = () => {
	window.open("https://miauriga.com/collections/limpieza/products/lavado-detail-auriga");
}
lavadoDetailButton.addEventListener("click", lavadoDetailButtonHandler)

const lavadoCompletoButtonHandler = () => {
	window.open("https://miauriga.com/collections/limpieza/products/lavado-completo-auriga", "_blank");
}
lavadoCompletoButton.addEventListener("click", lavadoCompletoButtonHandler)

const lavadoIntegralButtonHandler = () => {
	window.open("https://miauriga.com/collections/limpieza/products/lavado-integral-auriga", "_blank");
}
lavadoIntegralButton.addEventListener("click", lavadoIntegralButtonHandler)

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