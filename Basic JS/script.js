function displayName() {
    let name = prompt("Enter your name:");
    console.log(name);
    alert(name);
}

function inputNumbers() {
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let result = addTwoNumbers(num1, num2);
    document.writeln(result);
    // Note that document.writeln is not really used anymore, but it's used here for demonstration purposes.
}

function addTwoNumbers(firstNumber, secondNumber) {
    return parseInt(firstNumber) + parseInt(secondNumber);
}

function displayArray() {
    let myArray = ["December", "25th", "Heat", "Death", "Of", "The", "Universe"];
    myArray.forEach((element)=>{
        document.writeln(element);
    });
}

function objExample() {
    let myObj = {};
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    let address = prompt("Enter your address:");
    myObj.name = name;
    myObj.age = parseInt(age);
    myObj.address = address;
    alert(myObj.name);
    alert(myObj.age);
    alert(myObj.address);
    alert(JSON.stringify(myObj));
    let newName = prompt("Enter a new name to update:");
    myObj.name = newName;
    alert(myObj.name);
    alert(myObj.age);
    alert(myObj.address);
    alert(JSON.stringify(myObj));
}
