let prevScrollpos = window.scrollY;
window.onscroll = function () {
	let currentScrollPos = window.scrollY;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("site-header__header").style.top = "0";
	} else {
		document.getElementById("site-header__header").style.top = "-180px";
	}
	prevScrollpos = currentScrollPos;
}