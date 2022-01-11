let numbers = document.querySelectorAll(".numbers");
let display = document.getElementById("Display");
let number1 = "0"
let ac = document.getElementById("ac");
let del = document.getElementById("del");
let calculations = document.getElementsByClassName("calculation");
let number2 = "0";
let numarray = [];
let pastDisplay = document.getElementById("pastDisplay");


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => {
        if (number1 === "0") {
            number1 = ""
        }
        number1 += event.target.innerText;
        display.innerText = number1

    })
}

ac.addEventListener("click", () => {
    number1 = "0";
    numarray = [];
    display.innerText = number1;
    pastDisplay.innerText = "";
}
)


del.addEventListener("click", () => {
    number1 = number1.slice(0, number1.length - 1);
    if (number1 === "") {
        number1 = "0"
    }
    display.innerText = number1
});

for (let i = 0; i < calculations.length; i++) {
    calculations[i].addEventListener("click", (event) => {
        var calculate = event.target.innerText;
        switch (calculate) {
            case "/":
                number2 = number1;
                number1 = ""
                display.innerText = number1;
                numarray.push(number2);
                numarray.push("/");
                pastDisplay.innerText = number2 + " /";
                break;
            case "+":
                number2 = number1;
                number1 = ""
                display.innerText = number1;
                numarray.push(number2);
                numarray.push("+");
                pastDisplay.innerText = number2 + " +";
                break;
            case "-":
                number2 = number1;
                number1 = ""
                display.innerText = number1;
                numarray.push(number2);
                numarray.push("-");
                pastDisplay.innerText = number2 + " -";
                break;
            case "*":
                number2 = number1;
                number1 = ""
                display.innerText = number1;
                numarray.push(number2);
                numarray.push("*");
                pastDisplay.innerText = number2 + " *";
                break;
            case "=":
                pastDisplay.innerText = ""
                numarray.push(number1);
                let finalResult = eval(numarray.join(" "));
                number1 = finalResult + " "
                display.innerText = number1;
                numarray = [];
                break;
            default:
                break;
        }


    })
}