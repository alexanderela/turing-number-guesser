//Variables
var userInput = document.querySelector("#user-input");
var guessBtn = document.querySelector("#guess-btn");
var clearBtn = document.querySelector("#clear-btn");
var displayNum = document.querySelector("#display-num");
var resultMsg = document.querySelector("#result-msg");
var resetBtn = document.querySelector("#reset-btn");
var minValue = document.querySelector("#min-value");
var maxValue = document.querySelector("#max-value");
var randomNum = Math.floor(Math.random() * 100 + 1);

//Event Listeners
guessBtn.addEventListener("click", verifyNum);
clearBtn.addEventListener("click", clearInput);
resetBtn.addEventListener("click", resetForm);
userInput.addEventListener("input", enableClearBtn);

//Functions-Calculations

function verifyNum(event) {
	event.preventDefault();
	var parsedInput = parseInt(userInput.value);
	if (parsedInput > 100) {
		displayNum.innerText = "too high!";
		pleaseSelectNum();
	} 
	else if(parsedInput < 1) {
		displayNum.innerText = "too low!";
		pleaseSelectNum();
	}
	else if(parsedInput >= 1 && parsedInput <=100) {
	calculate();
	}
	else {
		displayNum.innerText = "not a number!";
		pleaseSelectNum();
	}
}

function calculate(event) {
	var parsedInput = parseInt(userInput.value);
	if(parsedInput > randomNum) {
		resultMsg.innerText = "That is too high";
	}
	else if(parsedInput < randomNum) {
		resultMsg.innerText = "That is too low";
	}
	else {
		resultMsg.innerText = "BOOM!";
		randomNum = Math.floor(Math.random() * 100 + 1);
	}
	displayNum.innerText = userInput.value;
	resetBtn.disabled = false;
}

//Functions-Buttons and Form Functionality
function clearInput(event) {
	event.preventDefault();
	userInput.value = "";
	minValue.value = "";
	maxValue.value = "";
	clearBtn.disabled = true;
};

function enableClearBtn(event) {
	event.preventDefault();
	if(userInput.length !== 0) {
		clearBtn.disabled = false;
	}
}

function pleaseSelectNum() {
	resultMsg.innerText = "Please select a number between 1 and 100.";
}

function resetForm(event) {
	event.preventDefault();
	userInput.value = "";
	minValue.value = "";
	maxValue.value = "";
	displayNum.innerText = "?";
	resultMsg.innerText = "";
	resetBtn.disabled = true;
	clearBtn.disabled = true;
};

// //Stage 3 Notes

// //Variables
// var userInput = document.querySelector("#user-input");
// var guessBtn = document.querySelector("#guess-btn");
// var clearBtn = document.querySelector("#clear-btn");
// var displayNum = document.querySelector("#display-num");
// var resultMsg = document.querySelector("#result-msg");
// var resetBtn = document.querySelector("#reset-btn");
// var minVal = document.querySelector("#min-value");
// var maxVal = document.querySelector("#max-value");
// // var randomNum = Math.floor(Math.random() * 100 + 1);
// var randomAnyNum = getRandomIntInclusive(minVal, maxVal);

// //Event Listeners
// guessBtn.addEventListener("click", verifyNum);
// clearBtn.addEventListener("click", clearInput);
// resetBtn.addEventListener("click", resetForm);
// userInput.addEventListener("input", enableClearBtn);

// //Functions-Stage 3

// function getRandomIntInclusive(minVal, maxVal) {
// 	min = Math.ceil(minVal);
// 	max = Math.floor(maxVal);
// 	return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
// 	console.log("hella random");
// }

// function verifyNum() {
// 	event.preventDefault();
// 	var parsedInput = parseInt(userInput.value);
// 	var adjustedMinVal = minVal.value;
// 	var adjustedMaxVal = maxVal.value;
// 	getRandomIntInclusive();
// 	console.log("randomAnyNum");
// 	randomAnyNum = Math.floor(Math.random() * maxVal + minVal);
// 	if (parsedInput > adjustedMaxVal) {
// 		displayNum.innerText = "too high!";
// 		resultMsg.innerText = "Please select a number between 1 and 100.";
// 	} 
// 	else if(parsedInput < adjustedMinVal) {
// 		displayNum.innerText = "too low!";
// 		resultMsg.innerText = "Please select a number between 1 and 100.";
// 	}
// 	else if(parsedInput >= adjustedMinVal && parsedInput <=adjustedMaxVal) {
// 	calculate();
// 	}
// 	else {
// 		displayNum.innerText = "not a number!";
// 		resultMsg.innerText = "Please select a number between 1 and 100.";
// 	}
// 	console.log("dinner time????")
// }

// function showResult() {
// 	calculate();//ASK KIEL
// 	// verifyRange();
// 	console.log(randomNum);
// };

// function clearInput() {
// 	event.preventDefault();
// 	userInput.value = "";
// 	clearBtn.disabled = true;
// };

// function resetForm() {
// 	event.preventDefault();
// 	userInput.value = "";
// 	displayNum.innerText = "?";
// 	resultMsg.innerText = "";
// 	resetBtn.disabled = true;
// 	clearBtn.disabled = true;
// };

// function calculate() {
// 	var parsedInput = parseInt(userInput.value);
// 	if(parsedInput > randomAnyNum) {
// 		resultMsg.innerText = "That is too high";
// 	}
// 	else if(parsedInput < randomAnyNum) {
// 		resultMsg.innerText = "That is too low";
// 	}
// 	else {
// 		resultMsg.innerText = "BOOM!";
// 		randomAnyNum = getRandomIntInclusive(minVal, maxVal);
// 		console.log(randomAnyNum);
// 		increaseRange();
// 	}
// 	displayNum.innerText = userInput.value;
// 	resetBtn.disabled = false;
// }

// function enableClearBtn() {
// 	event.preventDefault();
// 	if(userInput.length !== 0) {
// 		clearBtn.disabled = false;
// 	}
// }

// function increaseRange() {
// 	minVal = document.querySelector("#min-value");
// 	maxVal = document.querySelector("#max-value");
// 	minVal -= 10;
// 	maxVal += 10;
// }

