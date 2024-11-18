function calculateSquareOperations() {
    firstNumber = prompt('Введите первое число', '');
    secondNumber = prompt('Введите второе число', '');
    var square1 = firstNumber * firstNumber;
    var square2 = secondNumber * secondNumber;
    var summa = square1 + square2;
    var difference = square1 - square2;
    var product = square1 * square2;
    var quotient = square1 / square2;
    alert('Первое число: ' + firstNumber+ "\n"+
        'Второе число: ' + secondNumber+ "\n"+
        'Сумма квадратов:' + summa + "\n"+
        'Разность квадратов:' + difference + "\n"+
        'Произведение квадратов:' + product + "\n"+
        'Частное квадратов:' + quotient + "\n");
}

function getLastAndMiddleDigits() {
    var firstNumber = prompt('Введите число', '');
    var result = Array.from(String(firstNumber), Number);
    alert('Введенное число: ' + firstNumber + "\n"+
        'Последняя цифра (Единица): ' + result[2] + "\n"+
        'Средняя цифра (Десяток): ' + result[1] + "\n"+
        'Результат: ' + result[2].toString() + result[1].toString());

}

