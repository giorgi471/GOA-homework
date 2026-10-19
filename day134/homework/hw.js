// 1

let score1 = 0
let score2 = 0

let power1 = Math.floor(Math.random() * 21) + 10
let power2 = Math.floor(Math.random() * 21) + 10

console.log("რაუნდი 1")
console.log(power1)
console.log(power2)

if (power1 === 20) score1 += 5
if (power2 === 20) score2 += 5

if (power1 > 25 && power2 > 25) {
    console.log("ფრეა!")
} else if (power1 > power2) {
    score1++
} else if (power2 > power1) {
    score2++
} else {
    console.log("ფრეა!")
}

power1 = Math.floor(Math.random() * 21) + 10
power2 = Math.floor(Math.random() * 21) + 10

console.log("რაუნდი 2")
console.log(power1)
console.log(power2)

if (power1 === 20) score1 += 5
if (power2 === 20) score2 += 5

if (power1 > 25 && power2 > 25) {
    console.log("ფრეა!")
} else if (power1 > power2) {
    score1++
} else if (power2 > power1) {
    score2++
} else {
    console.log("ფრეა!")
}

power1 = Math.floor(Math.random() * 21) + 10
power2 = Math.floor(Math.random() * 21) + 10

console.log("რაუნდი 3")
console.log(power1)
console.log(power2)

if (power1 === 20) score1 += 5
if (power2 === 20) score2 += 5

if (power1 > 25 && power2 > 25) {
    console.log("ფრეა!")
} else if (power1 > power2) {
    score1++
} else if (power2 > power1) {
    score2++
} else {
    console.log("ფრეა!")
}

power1 = Math.floor(Math.random() * 21) + 10
power2 = Math.floor(Math.random() * 21) + 10

console.log("რაუნდი 4")
console.log(power1)
console.log(power2)

if (power1 === 20) score1 += 5
if (power2 === 20) score2 += 5

if (power1 > 25 && power2 > 25) {
    console.log("ფრეა!")
} else if (power1 > power2) {
    score1++
} else if (power2 > power1) {
    score2++
} else {
    console.log("ფრეა!")
}

power1 = Math.floor(Math.random() * 21) + 10
power2 = Math.floor(Math.random() * 21) + 10

console.log("რაუნდი 5")
console.log(power1)
console.log(power2)

if (power1 === 20) score1 += 5
if (power2 === 20) score2 += 5

if (power1 > 25 && power2 > 25) {
    console.log("ფრეა!")
} else if (power1 > power2) {
    score1++
} else if (power2 > power1) {
    score2++
} else {
    console.log("ფრეა!")
}

console.log("მოთამაშე 1-ის ქულა: " + score1)
console.log("მოთამაშე 2-ის ქულა: " + score2)

if (score1 > score2) {
    console.log("მოთამაშე 1-მა მოიგო!")
} else if (score2 > score1) {
    console.log("მოთამაშე 2-მა მოიგო!")
} else {
    console.log("ფრეა!")
}


// 2

let score = 0

let d1 = Math.floor(Math.random() * 6) + 1
let d2 = Math.floor(Math.random() * 6) + 1
let d3 = Math.floor(Math.random() * 6) + 1
let sum = d1 + d2 + d3

console.log(d1, d2, d3)
console.log("ჯამი: " + sum)

if (d1 === d2 && d2 === d3) {
    score += 50
} else if (d1 === d2 || d1 === d3 || d2 === d3) {
    score += 20
}

if (sum > 10) score += 10

if (sum % 2 === 0) {
    score += 5
} else {
    score -= 3
}

console.log("რაუნდი 1: " + score)

d1 = Math.floor(Math.random() * 6) + 1
d2 = Math.floor(Math.random() * 6) + 1
d3 = Math.floor(Math.random() * 6) + 1
sum = d1 + d2 + d3

console.log(d1, d2, d3)
console.log("ჯამი: " + sum)

if (d1 === d2 && d2 === d3) {
    score += 50
} else if (d1 === d2 || d1 === d3 || d2 === d3) {
    score += 20
}

if (sum > 10) score += 10

if (sum % 2 === 0) {
    score += 5
} else {
    score -= 3
}

console.log("რაუნდი 2: " + score)

d1 = Math.floor(Math.random() * 6) + 1
d2 = Math.floor(Math.random() * 6) + 1
d3 = Math.floor(Math.random() * 6) + 1
sum = d1 + d2 + d3

console.log(d1, d2, d3)
console.log("ჯამი: " + sum)

if (d1 === d2 && d2 === d3) {
    score += 50
} else if (d1 === d2 || d1 === d3 || d2 === d3) {
    score += 20
}

if (sum > 10) score += 10

if (sum % 2 === 0) {
    score += 5
} else {
    score -= 3
}

console.log("რაუნდი 3: " + score)

d1 = Math.floor(Math.random() * 6) + 1
d2 = Math.floor(Math.random() * 6) + 1
d3 = Math.floor(Math.random() * 6) + 1
sum = d1 + d2 + d3

console.log(d1, d2, d3)
console.log("ჯამი: " + sum)

if (d1 === d2 && d2 === d3) {
    score += 50
} else if (d1 === d2 || d1 === d3 || d2 === d3) {
    score += 20
}

if (sum > 10) score += 10

if (sum % 2 === 0) {
    score += 5
} else {
    score -= 3
}

console.log("რაუნდი 4: " + score)

d1 = Math.floor(Math.random() * 6) + 1
d2 = Math.floor(Math.random() * 6) + 1
d3 = Math.floor(Math.random() * 6) + 1
sum = d1 + d2 + d3

console.log(d1, d2, d3)
console.log("ჯამი: " + sum)

if (d1 === d2 && d2 === d3) {
    score += 50
} else if (d1 === d2 || d1 === d3 || d2 === d3) {
    score += 20
}

if (sum > 10) score += 10

if (sum % 2 === 0) {
    score += 5
} else {
    score -= 3
}

console.log("რაუნდი 5: " + score)
console.log("საერთო ქულა: " + score)


// 3

let coinScore = 0

let guess = Number(prompt("შეიყვანე 0 ან 1"))
let coin = Math.floor(Math.random() * 2)

console.log(coin === 0 ? "გერბი" : "საფასური")

if (guess === coin) coinScore += 10

console.log("ქულა: " + coinScore)

guess = Number(prompt("შეიყვანე 0 ან 1"))
coin = Math.floor(Math.random() * 2)

console.log(coin === 0 ? "გერბი" : "საფასური")

if (guess === coin) coinScore += 10

console.log("ქულა: " + coinScore)

guess = Number(prompt("შეიყვანე 0 ან 1"))
coin = Math.floor(Math.random() * 2)

console.log(coin === 0 ? "გერბი" : "საფასური")

if (guess === coin) coinScore += 10

console.log("ქულა: " + coinScore)

guess = Number(prompt("შეიყვანე 0 ან 1"))
coin = Math.floor(Math.random() * 2)

console.log(coin === 0 ? "გერბი" : "საფასური")

if (guess === coin) coinScore += 10

console.log("ქულა: " + coinScore)

guess = Number(prompt("შეიყვანე 0 ან 1"))
coin = Math.floor(Math.random() * 2)

console.log(coin === 0 ? "გერბი" : "საფასური")

if (guess === coin) coinScore += 10

console.log("საერთო ქულა: " + coinScore)


// 4

let shotScore = 0
let result = Math.floor(Math.random() * 100) + 1

console.log("შედეგი: " + result)

if (result > 80) {
    shotScore += 20
} else if (result > 50) {
    shotScore += 10
}

console.log("საერთო ქულა: " + shotScore)


// 5

let secret = Math.floor(Math.random() * 50) + 1
let guessNumber = Number(prompt("გამოიცანი რიცხვი 1-დან 50-მდე"))

if (guessNumber > secret) {
    console.log("შეამცირე!")
} else if (guessNumber < secret) {
    console.log("გაზარდე!")
} else {
    console.log("მოიგე!")
}

if (guessNumber !== secret) {
    guessNumber = Number(prompt("მეორე მცდელობა"))

    if (guessNumber > secret) {
        console.log("შეამცირე!")
    } else if (guessNumber < secret) {
        console.log("გაზარდე!")
    } else {
        console.log("მოიგე!")
    }
}

if (guessNumber !== secret) {
    guessNumber = Number(prompt("მესამე მცდელობა"))

    if (guessNumber > secret) {
        console.log("შეამცირე!")
    } else if (guessNumber < secret) {
        console.log("გაზარდე!")
    } else {
        console.log("მოიგე!")
    }
}

if (guessNumber !== secret) {
    guessNumber = Number(prompt("მეოთხე მცდელობა"))

    if (guessNumber > secret) {
        console.log("შეამცირე!")
    } else if (guessNumber < secret) {
        console.log("გაზარდე!")
    } else {
        console.log("მოიგე!")
    }
}

if (guessNumber !== secret) {
    guessNumber = Number(prompt("მეხუთე მცდელობა"))

    if (guessNumber > secret) {
        console.log("შეამცირე!")
    } else if (guessNumber < secret) {
        console.log("გაზარდე!")
    } else {
        console.log("მოიგე!")
    }
}

if (guessNumber !== secret) {
    console.log("საიდუმლო რიცხვია: " + secret)
}


// 6

let x = 10

function showNumber() {
    let x = 20
    console.log(x)
}

showNumber()
console.log(x)


// 7

function greet() {
    let message = "Hello!"
    console.log(message)
}

greet()

let message = "Hello!"

function greet2() {
    console.log(message)
}

greet2()


// 8

let age = 18
let name = "Nika"

console.log(age)
console.log(name)


// 9

let points = 100

function first() {
    let points = 50

    function second() {
        points = points + 25
        console.log(points)
    }

    second()
    console.log(points)
}

first()
console.log(points)

let points2 = 100

function first2() {
    let points2 = 50

    function second2() {
        let points2 = 75
        console.log(points2)
    }

    second2()
    console.log(points2)
}

first2()
console.log(points2)


// 10

let result2 = 10

function calculate() {
    let result = 30
    return result
}

result2 = calculate()
console.log(result2)

function calculate2() {
    let result = 30
    return result + 20
}

result2 = calculate2()
console.log(result2)























