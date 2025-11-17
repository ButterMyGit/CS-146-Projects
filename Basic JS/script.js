let myDiv = document.getElementById("content");
let myButton1 = document.getElementById("displayName");
let myButton2 = document.getElementById("addtwonumbers");
let myButton3 = document.getElementById("displayArray");
let myButton4 = document.getElementById("objExample");

myButton1.addEventListener("click", (e)=>{
    let name = prompt("Enter your name:");
    console.log(name);
    let p = document.createElement("p");
    p.innerHTML = name;
    myDiv.appendChild(p);
});

myButton2.addEventListener("click", (e)=>{
    let num1 = prompt("Enter the first number:");
    let num2 = prompt("Enter the second number:");
    let result = addTwoNumbers(num1, num2);
    let p = document.createElement("p");
    p.innerHTML = result;
    myDiv.appendChild(p);
});

myButton3.addEventListener("click", (e)=>{
    let myArr = [50, "Anthony", 10, 15, 46, "Sam"];
    let myList = document.createElement("ul");
    myArr.forEach((element)=>{
        let myLi = document.createElement("li");
        myLi.innerHTML = element;
        myList.appendChild(myLi);
    });

    myDiv.appendChild(myList);    
});

myButton4.addEventListener("click", (e)=>{
    let myObj = {};
    let name = prompt("Enter your name:");
    let age = prompt("Enter your age:");
    let address = prompt("Enter your address:");
    myObj.name = name;
    myObj.age = parseInt(age);
    myObj.address = address;
    let myList = document.createElement("ul");
    
    let nameLi = document.createElement("li");
    nameLi.innerHTML = "Name: " + myObj.name;
    myList.appendChild(nameLi);
    
    let ageLi = document.createElement("li");
    ageLi.innerHTML = "Age: " + myObj.age;
    myList.appendChild(ageLi);
    
    let addressLi = document.createElement("li");
    addressLi.innerHTML = "Address: " + myObj.address;
    myList.appendChild(addressLi);

    let objLi = document.createElement("li");
    objLi.innerHTML = "Object: " + JSON.stringify(myObj);
    myList.appendChild(objLi);

    myDiv.appendChild(myList);
    
});

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
