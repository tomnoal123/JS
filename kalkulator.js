let firstNumber = Number(prompt("Wpisz pierwszą liczbę:"));
let secondNumber = Number(prompt("Wpisz drugą liczbę"));

function dodawanie(a, b) {
    document.body.innerHTML = "Wynik: " + (a + b);
}

function odejmowanie(a, b) {
    document.body.innerHTML = "Wynik: " + (a - b);
}

function mnożnie(a, b) {
    document.body.innerHTML = "Wynik: " + (a * b);
}

function dzielenie(a, b) {
    document.body.innerHTML = "Wynik: " + (a / b);
}

if (isNaN(firstNumber) || isNaN(secondNumber)) {

    document.body.innerHTML = "Podano niepoprawne liczby"
}else{
    let wynik = prompt("Wybierz działanie, które chcesz wykonać: dodawanie/odejmowanie/mnożenie/dzielenie");


switch (wynik) {
    case "dodawanie":
        dodawanie(firstNumber, secondNumber);
        break;
    case "odejmowanie":
        odejmowanie(firstNumber, secondNumber);
        break;
    case "mnozenie":
        mnożnie(firstNumber, secondNumber);
        break;
    case "dzielenie":
        dzielenie(firstNumber, secondNumber);
                if(secondNumber == 0){
                    document.body.innerHTML = "Nie można dzielić przez zero";
                } else break;
    default:
                    document.body.innerHTML  = "Podałeś złą operację"
}
}
