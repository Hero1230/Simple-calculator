let currentResult = 0;
const logEntries = [];

function getUserNumberInput() {
	return usrInput.value;
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const log = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};

	logEntries.push(log);
	console.log(logEntries);
}

function createAndWriteOutput(mathOperator, initialResult, enteredNumber) {
	const calcDescription = `${initialResult} ${mathOperator} ${enteredNumber}`;
	outputResult(currentResult, calcDescription);
}

function calculateResult(calculationType) {
	const enteredNumber = parseInt(getUserNumberInput());
	if (
		(calculationType !== "ADD" &&
			calculationType !== "SUBTRACT" &&
			calculationType !== "MULTIPLY" &&
			calculationType !== "DIVIDE") ||
		!enteredNumber
	) {
		return;
	}

	let initialResult = currentResult;
	let mathOperator;
	if (calculationType === "ADD") {
		currentResult += enteredNumber;
		mathOperator = "+";
	} else if (calculationType === "SUBTRACT") {
		currentResult -= enteredNumber;
		mathOperator = "-";
	} else if (calculationType === "MULTIPLY") {
		currentResult *= enteredNumber;
		mathOperator = "*";
	} else if (calculationType === "DIVIDE") {
		currentResult /= enteredNumber;
		mathOperator = "/";
	}

	writeToLog(mathOperator, initialResult, enteredNumber, currentResult);
	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
}

function add() {
	calculateResult("ADD");
}

function subtract() {
	calculateResult("SUBTRACT");
}

function multiply() {
	calculateResult("MULTIPLY");
}

function divide() {
	calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
