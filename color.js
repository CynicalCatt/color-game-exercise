var squaresNum = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var title = document.querySelector("h1");
var reset = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

initialise();

function initialise() {
	// FOR EVERY INITIALIZATION
	for (var i = 0; i < mode.length; i++) {
	mode[i].addEventListener("click", function() {
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? squaresNum = 3: squaresNum = 6;
		resetPlease();
	});
	}

	// GENERAL GAME FUNCTION
	for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function() {
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			message.textContent = "Correct!";
			changeColors(clickedColor);
			title.style.background = clickedColor;
			reset.textContent = "Play Again?";
		}
		else {
			this.style.background = "#232323";
			message.textContent = "Try again!";
		}
	})
	}

	resetPlease();
}

function resetPlease() {
	colors = generateColor(squaresNum);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	title.style.background = "steelblue";
	reset.textContent = "New Colors";
	message.textContent = "";
}

reset.addEventListener("click", function() {
	resetPlease();
})

function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function chooseColor(color) {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColor(number) {
	var array = [];
	for (var i = 0; i < number; i++) {
		array.push(randomColor());
	}
	return array;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}