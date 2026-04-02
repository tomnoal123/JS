let firstNumber = Number(prompt("Wpisz pierwszą liczbę:"));
let secondNumber = Number(prompt("Wpisz drugą liczbę"));

function dodawanie(a, b) {
    document.body.innerHTML = "Wynik: " + (a + b);
}

function odejmowanie(a, b) {
    document.body.innerHTML = "Wynik: " + (a - b);
}

function mnozenie(a, b) {
    document.body.innerHTML = "Wynik: " + (a * b);
}

function dzielenie(a, b) {
    document.body.innerHTML = "Wynik: " + (a / b);
}



let wynik = prompt("Wybierz działanie, które chcesz wykonać: dodawanie/odejmowanie/mnozenie/dzielenie");

switch (wynik) {
    case "dodawanie":
        dodawanie(firstNumber, secondNumber);
        break;
    case "odejmowanie":
        odejmowanie(firstNumber, secondNumber);
        break;
    case "mnozenie":
        mnozenie(firstNumber, secondNumber);
        break;
    case "dzielenie":
        dzielenie(firstNumber, secondNumber);
        break;
    default:
        console.log("Niepoprawne działanie");
}
