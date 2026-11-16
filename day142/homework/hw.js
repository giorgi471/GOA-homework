let i1 = 1

while (i1 <= 10) {
    console.log(i1)
    i1++
}

// 2
let i2 = 10

while (i2 >= 1) {
    console.log(i2)
    i2--
}

console.log("Start!")

// 3
let i3 = 2

while (i3 <= 20) {
    console.log(i3)
    i3 += 2
}

// 4
let i4 = 1

while (i4 <= 25) {
    console.log(i4)
    i4 += 2
}

// 5
let i5 = 1
let sum5 = 0

while (i5 <= 10) {
    sum5 += i5
    i5++
}

console.log(sum5)

// 6
let i6 = 1
let product6 = 1

while (i6 <= 5) {
    product6 *= i6
    i6++
}

console.log(product6)

// 7
let num7 = Number(prompt("შეიყვანე რიცხვი"))
let i7 = 1

while (i7 <= 10) {
    console.log(num7 + " x " + i7 + " = " + (num7 * i7))
    i7++
}

// 8
let num8 = Number(prompt("შეიყვანე დადებითი რიცხვი"))
let i8 = 1

while (i8 <= num8) {
    if (num8 % i8 === 0) {
        console.log(i8)
    }
    i8++
}

// 9
let i9 = 1
let count9 = 0

while (i9 <= 50) {
    if (i9 % 2 === 0) {
        count9++
    }
    i9++
}

console.log(count9)

// 10
let n10 = Number(prompt("შეიყვანე რიცხვი"))
let i10 = 1
let sum10 = 0

while (i10 <= n10) {
    sum10 += i10
    i10++
}

let average10 = sum10 / n10

console.log("ჯამი: " + sum10)
console.log("საშუალო: " + average10)

// 11
let secretNumber11 = 17
let guess11 = 0

while (guess11 !== secretNumber11) {
    guess11 = Number(prompt("გამოიცანი რიცხვი"))

    if (guess11 < secretNumber11) {
        console.log("Too low!")
    } else if (guess11 > secretNumber11) {
        console.log("Too high!")
    } else {
        console.log("Correct!")
    }
}

// 12
let num12 = Number(prompt("შეიყვანე რიცხვი"))
let sum12 = 0

while (num12 !== 0) {
    if (num12 > 0) {
        sum12 += num12
    }

    num12 = Number(prompt("შეიყვანე შემდეგი რიცხვი"))
}

console.log(sum12)

// 13
let num13 = Number(prompt("შეიყვანე დადებითი რიცხვი"))
let sum13 = 0

while (num13 > 0) {
    let digit13 = num13 % 10
    sum13 += digit13
    num13 = Math.floor(num13 / 10)
}

console.log(sum13)

// 14
//?

// 15
//?

// 16
//?

// 17
//?




