let currentResult = 0;
const logEntries = [];

const ADD_OPERATION = "ADD";
const SUBTRACT_OPERATION = "SUBTRACT";
const DIVIDE_OPERATION = "DIVIDE";
const MULTIPLY_OPERATION = "MULTIPLY";

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

addBtn.addEventListener("click", calculateResult.bind(this, ADD_OPERATION));
subtractBtn.addEventListener(
	"click",
	calculateResult.bind(this, SUBTRACT_OPERATION)
);
multiplyBtn.addEventListener(
	"click",
	calculateResult.bind(this, MULTIPLY_OPERATION)
);
divideBtn.addEventListener(
	"click",
	calculateResult.bind(this, DIVIDE_OPERATION)
);
