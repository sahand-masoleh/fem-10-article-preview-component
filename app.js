const shareBtn = document.querySelector("#share-btn");
const shareMenu = document.querySelector("#share-menu");

shareBtn.onclick = handleShareClick;

function handleShareClick() {
	shareBtn.classList.toggle("clicked");
	shareMenu.classList.toggle("clicked");
}
