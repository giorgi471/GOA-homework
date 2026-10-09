// 1
let computer = Math.floor(Math.random() * 10) + 1
let player = Number(prompt("შეიყვანე რიცხვი 1-დან 10-მდე:"))

if (player === computer) {
    console.log("🎉 გამოიცანი!")
} else {
    console.log("❌ ვერ გამოიცანი!")
}


// 2
let dice = Math.floor(Math.random() * 6) + 1


if (dice === 6) {
    console.log("🎉 You got the highest number!")
} else if (dice === 1) {
    console.log("😢 You got the lowest number!")
} else {
    console.log("Normal result.")
}


// 3
let player1 = Math.floor(Math.random() * 6) + 1
let player2 = Math.floor(Math.random() * 6) + 1


if (player1 > player2) {
    console.log("Player 1 wins!")
} else if (player2 > player1) {
    console.log("Player 2 wins!")
} else {
    console.log("Draw!")
}


// 4
let player1Power = Math.floor(Math.random() * 21) + 10
let player2Power = Math.floor(Math.random() * 21) + 10

if (player1Power === 20) {
    player1Power += 5
}

if (player2Power === 20) {
    player2Power += 5
}



if (player1Power > player2Power) {
    console.log("Player 1 wins!")
} else if (player2Power > player1Power) {
    console.log("Player 2 wins!")
} else {
    console.log("Draw!")
}


// 5
let car1 = Math.floor(Math.random() * 51) + 50
let car2 = Math.floor(Math.random() * 51) + 50



if (car1 > 90) {
    console.log("Car 1: 🔥 Super fast!")
}

if (car2 > 90) {
    console.log("Car 2: 🔥 Super fast!")
}

if (car1 > car2) {
    console.log("Car 1 wins!")
} else if (car2 > car1) {
    console.log("Car 2 wins!")
} else {
    console.log("Draw!")
}


// 6
let box = Math.floor(Math.random() * 4) + 1

if (box === 1) {
    console.log("You won 100 coins!")
} else if (box === 2) {
    console.log("You won 50 coins!")
} else if (box === 3) {
    console.log("You won 200 coins!")
    console.log("🎉 JACKPOT!")
} else {
    console.log("You won 10 coins!")
}


// 7
let playerPower = Math.floor(Math.random() * 21) + 10
let monsterPower = Math.floor(Math.random() * 21) + 10

if (playerPower === 25) {
    playerPower += 10
}


if (playerPower > monsterPower) {
    console.log("Player wins!")
} else if (monsterPower > playerPower) {
    console.log("Monster wins!")
} else {
    console.log("Draw!")
}


// 8
let n1 = Math.floor(Math.random() * 9) + 1
let n2 = Math.floor(Math.random() * 9) + 1
let n3 = Math.floor(Math.random() * 9) + 1

let p1 = Number(prompt("შეიყვანე პირველი რიცხვი:"))
let p2 = Number(prompt("შეიყვანე მეორე რიცხვი:"))
let p3 = Number(prompt("შეიყვანე მესამე რიცხვი:"))

let correct = 0

if (p1 === n1) correct++
if (p2 === n2) correct++
if (p3 === n3) correct++



if (correct === 3) {
    console.log("JACKPOT!")
} else if (correct === 2) {
    console.log("დიდი მოგება!")
} else if (correct === 1) {
    console.log("პატარა მოგება!")
} else {
    console.log("წააგე!")
}


// 9
let playerPower2 = Math.floor(Math.random() * 21) + 10
let monsterPower2 = Math.floor(Math.random() * 21) + 10

if (playerPower2 === 20) {
    playerPower2 += 5
}

if (monsterPower2 === 15) {
    monsterPower2 += 10
}



if (playerPower2 > monsterPower2) {
    console.log("Player wins!")
} else if (monsterPower2 > playerPower2) {
    console.log("Monster wins!")
} else {
    console.log("Draw!")
}


// 10
let attack1 = Math.floor(Math.random() * 21) + 10
let defense1 = Math.floor(Math.random() * 16) + 5

let attack2 = Math.floor(Math.random() * 21) + 10
let defense2 = Math.floor(Math.random() * 16) + 5

let power1 = attack1 + defense1
let power2 = attack2 + defense2

if (attack1 >= 25) {
    power1 += 5
}

if (attack2 >= 25) {
    power2 += 5
}

if (defense1 === 20) {
    power1 += 10
}

if (defense2 === 20) {
    power2 += 10
}

if (power1 > power2) {
    console.log("Wizard 1 wins!")
} else if (power2 > power1) {
    console.log("Wizard 2 wins!")
} else {
    console.log("Draw!")
}




















