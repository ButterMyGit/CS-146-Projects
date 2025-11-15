let result = 0; // the current number that displays on the calculator's screen
let buffer = null; // previously saved number
let currentOp = null; // current calculator operation
setDisplay("0"); // initialize the display to 0

/**
 * Resets the state of the calculator and the display
 */
function resetCalc() {
   result = 0;
   buffer = null;
   currentOp = null;
   setDisplay("0"); // this sets the display to result, which in this case will be "0"
}

/**
 * Sets the inner text of the div with id="output"
 * @param {String} str the string to set the inner text to
 */
function setDisplay(str) {
   document.getElementById("output").innerText = str; // gets the element "output" and sets the inside text to be whatever string is passed
}

/**
 * Returns the current result of the calculator
 * Hint: you can use a global variable for the result
 */
function getResult() {
   return Number(result); // need to have Number because result can sometimes be a string
}

/**
 * Update the calculator state with the next number and sets the display
 * @param {Number} num the number that was pressed
 */
function pressNum(num) {
   result = Number(result.toString() + num.toString()); // concatenate the current result with the new number pressed
   if (result > 999999999) result = 999999999;
   if (result < -999999999) result = -999999999;
   setDisplay(result.toString());
}

/**
 * Operation is pressed, move the current result value to a temporary buffer and
 * set the current result to zero.
 * @param {String} op the operation pressed, either: +,-,*,/
 */
function pressOp(op) {
   if (currentOp == null || result !== 0) {
      buffer = result;
      result = 0;
   }
   currentOp = op;
}

/**
 * Should compute the current operation with the buffer value and current
 * result value based on the current operation. If there is no current
 * operation, do nothing.
 */
function pressEquals() {
   if (currentOp == null || buffer == null) return; // if there is no operation or buffer, do nothing
   
   let a = buffer;
   let b = result;
   let output; 

   if (currentOp === "+") output = a + b;
   else if (currentOp === "-") output = a - b;
   else if (currentOp === "*") output = a * b;
   else if (currentOp === "/") {
      if (b === 0) { // handle division by zero by giving an error
         setDisplay("ERROR");
         result = 0;
         buffer = null;
         currentOp = null;
         return;
      }
      output = a / b;
   }

   if (output > 999999999) output = 999999999;
   if (output < -999999999) output = -999999999;

   result = output;
   buffer = null;
   currentOp = null;
   setDisplay(result.toString());
}
