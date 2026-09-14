console.log("Faulty Calculator")
let user_input = Number(prompt("Enter your first number: "));
let user_input1 = Number(prompt("Enter your second number: "));
const num = Math.random();
let operator = prompt("Enter your operator: ");
if (num < 0.1) {
    console.log("Faulty");
    if (operator == "+") {
        console.log(user_input - user_input1);
    }
    else if (operator == "-") {
        console.log(user_input / user_input1);
    }
    else if (operator == "*") {
        console.log(user_input + user_input1);
    }
    else if (operator == "/") {
        console.log(user_input ** user_input1);
    }
}
else {
    console.log("Normal");
    if (operator == "+") {
        console.log(user_input + user_input1);
    }
    else if (operator == "-") {
        console.log(user_input - user_input1);
    }
    else if (operator == "*") {
        console.log(user_input * user_input1);
    }
    else if (operator == "/") {
        console.log(user_input / user_input1);
    }
}