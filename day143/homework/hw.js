// 1
let i = 1
do {
    console.log(i)
    i++
} while (i <= 10)





// 2
let a = 10
do {
    console.log(a)
    a--
} while (a >= 1)





// 3
let b = 2
do {
    console.log(b)
    b += 2
} while (b <= 20)





// 4
let n = Number(prompt("Enter a number"))
let sum = 0
let c = 1
do {
    sum += c
    c++
} while (c <= n)
console.log(sum)





// 5
let d = 1
let product = 1
do {
    product *= d
    d++
} while (d <= 10)
console.log(product)






// 6
let password
do {
    password = prompt("Enter password")
} while (password !== "javascript123")
console.log("Access Granted!")






// 7
let secretNumber = 7
let guess
do {
    guess = Number(prompt("Guess the number"))
} while (guess !== secretNumber)
console.log("You Win!")









// 8
let number
do {
    number = Number(prompt("Enter a number"))
} while (number <= 0)
console.log("Valid Number!")





// 9
let num
let count = 0
do {
    num = Number(prompt("Enter a number"))
    if (num !== 0) {
        count++
    }
} while (num !== 0)
console.log(count)



// 10
let e = 1
do {
    if (e % 3 === 0) {
        console.log(e)
    }
    e++
} while (e <= 50)





// 11
let score = 0
let points
do {
    points = Number(prompt("Enter points"))
    score += points
} while (points !== 0)
console.log(score)






// 12
let x
let total = 0
let positive = 0
let negative = 0
let amount = 0
do {
    x = Number(prompt("Enter a number"))
    if (x !== 0) {
        amount++
        total += x
        if (x > 0) {
            positive++
        } else {
            negative++
        }
    }
} while (x !== 0)
console.log("Count:", amount)
console.log("Positive:", positive)
console.log("Negative:", negative)
console.log("Sum:", total)





// 13
for (let f = 1; f <= 20; f++) {
    if (f === 10) {
        break
    }
    console.log(f)
}





// 14
for (let g = 1; g <= 30; g++) {
    if (g === 20) {
        break
    }
    if (g % 2 === 0) {
        console.log(g)
    }
}








// 15
let numbers = [4, 8, 12, 15, 20, 25, 30]
for (let h = 0; h < numbers.length; h++) {
    if (numbers[h] === 15) {
        console.log("Found!")
        break
    }
}







// 16
let pass
let attempts = 0
while (attempts < 5) {
    pass = prompt("Enter password")
    attempts++
    if (pass === "admin123") {
        console.log("Login Successful!")
        break
    }
}
if (attempts === 5 && pass !== "admin123") {
    console.log("Account Locked!")
}









// 17
let nums = [12, 8, 5, 14, -3, 9, -7, 20]
for (let j = 0; j < nums.length; j++) {
    if (nums[j] < 0) {
        console.log(nums[j])
        break
    }
}

























