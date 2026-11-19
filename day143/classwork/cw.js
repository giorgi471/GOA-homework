// 1)შექმენი ცვლადი secretNumber, რომელსაც მიანიჭებ მნიშვნელობას 7.

// მომხმარებელს prompt()-ის საშუალებით სთხოვე რიცხვის შეყვანა.

// გამოიყენე do...while ციკლი, რათა მომხმარებელს რამდენჯერმე შეეძლოს გამოცნობა.

// თუ მომხმარებლის შეყვანილი რიცხვი არ ემთხვევა ჩაფიქრებულ რიცხვს, გამოიტანე "Try again!".

// თუ მომხმარებელი სწორ რიცხვს გამოიცნობს, გამოიტანე "Correct! You guessed it!".

// დაითვალე, რამდენი ცდა დასჭირდა მომხმარებელს სწორი პასუხის მისაღებად.

// საბოლოოდ გამოიტანე ცდების რაოდენობა.





let secretNumber = 7
let attempts = 0
let userNumber

do {
    userNumber = prompt("Enter a number:")
    attempts++

    if (userNumber === secretNumber) {
        console.log("Correct! You guessed it!")
    } else {
        console.log("Try again!")
    }

} while (userNumber != secretNumber)

console.log("Attempts: " + attempts)











