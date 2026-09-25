// 1
function greet(name) {
    console.log(`Hello, ${name}!`)
}

greet("Goga")
greet("Nika")


// 2
function sum(a, b) {
    console.log(a + b)
}

sum(5, 10)
sum(20, 30)


// 3
function showInfo(name, age, city) {
    console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`)
}

showInfo("Goga", 20, "Tbilisi")
showInfo("Nika", 18, "Batumi")


// 4
function square(number) {
    console.log(number ** 2)
}

square(5)
square(10)


// 5
function showProduct(name, price, category) {
    console.log(`Product: ${name}`)
    console.log(`Price: ${price}`)
    console.log(`Category: ${category}`)
}

showProduct("Laptop", 1500, "Electronics")
showProduct("Phone", 800, "Electronics")


// 6
function checkAge(age) {
    if (age >= 18) {
        console.log("You are an adult.")
    } else {
        console.log("You are a minor.")
    }
}

checkAge(20)
checkAge(15)


// 7
function checkNumber(number) {
    if (number > 0) {
        console.log("Positive")
    } else if (number < 0) {
        console.log("Negative")
    } else {
        console.log("Zero")
    }
}

checkNumber(10)
checkNumber(-5)
checkNumber(0)


// 8
function calculate(a, b, operator) {
    if (operator === "+") {
        console.log(a + b)
    } else if (operator === "-") {
        console.log(a - b)
    } else if (operator === "*") {
        console.log(a * b)
    } else if (operator === "/") {
        console.log(a / b)
    }
}

calculate(10, 5, "+")
calculate(10, 5, "-")
calculate(10, 5, "*")
calculate(10, 5, "/")


// 9
function checkProduct(name, price, budget) {
    if (budget >= price) {
        console.log(`You can buy ${name}.`)
    } else {
        console.log(`You cannot buy ${name}.`)
    }
}

checkProduct("Phone", 800, 1000)
checkProduct("Laptop", 2000, 1000)


// 10
function getGrade(name, score) {
    if (score >= 90) {
        console.log(`${name} got grade A.`)
    } else if (score >= 80) {
        console.log(`${name} got grade B.`)
    } else if (score >= 70) {
        console.log(`${name} got grade C.`)
    } else if (score >= 60) {
        console.log(`${name} got grade D.`)
    } else {
        console.log(`${name} got grade F.`)
    }
}

getGrade("Nika", 87)
getGrade("Goga", 95)






















