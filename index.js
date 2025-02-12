const text = document.getElementById("text");
const button = document.getElementById("button");

button.addEventListener('click', () => {
	let color = "#" + Math.floor(Math.random() * 16777215).toString(16);

	document.body.style.backgroundColor = color;
	text.textContent = color;
})