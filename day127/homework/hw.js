// 1
let age1 = Number(prompt("Enter your age"))
let price1 = Number(prompt("Enter ticket price"))

if (age1 < 0 || price1 < 0) {
    console.log("Invalid data")
} else if (age1 < 7) {
    console.log("Free ticket")
} else if (age1 < 18) {
    console.log("Ticket price:", price1 * 0.5)
    console.log("You have a discount")
} else if (age1 < 60) {
    console.log("Ticket price:", price1)
} else {
    console.log("Ticket price:", price1 * 0.7)
    console.log("You have a discount")
}


// 2
let username = "Goga"
let password = "Goa2026"
let age2 = 20

if (username === "" || password === "") {
    console.log("Fill in all fields")
} else if (username === "Goga" && password === "Goa2026") {
    console.log("Login successful")
} else if (username === "Goga") {
    console.log("Incorrect password")
} else {
    console.log("Incorrect username")
}

if (age2 < 18) {
    console.log("Access denied")
}


// 3
let price = 250
let age3 = 22
let isMember = true

let discount = 0

if (price < 0) {
    console.log("Invalid price")
} else {
    if (isMember && price > 200) {
        discount = 25
    } else if (isMember || age3 < 18) {
        discount = 10
    } else if (age3 >= 60 && price > 100) {
        discount = 15
    }

    let finalPrice = price - discount

    console.log("Starting price:", price)
    console.log("Discount:", discount)
    console.log("Final price:", finalPrice)
}


// 4
let number = Number(prompt("Enter a number"))

if (number > 0) {
    if (number > 100) {
        console.log("Large positive number")
    } else if (number < 100) {
        console.log("Small positive number")
    }

    if (number >= 10 && number <= 20) {
        console.log("Special range")
    }
} else if (number < 0) {
    if (number % 2 === 0) {
        console.log("Negative even number")
    } else {
        console.log("Negative odd number")
    }
} else {
    console.log("Zero")
}


// 5
let name = "Goga"
let math = 85
let english = 90
let programming = 95

let average = (math + english + programming) / 3

console.log("Average:", average)

if (math < 50 || english < 50 || programming < 50) {
    console.log("Failed")
} else if (math >= 90 && english >= 90 && programming >= 90) {
    console.log("Excellent student")
} else if (average >= 80 && math >= 70) {
    console.log("Very good student")
} else {
    console.log("Needs improvement")
}


// 6
let age6 = Number(prompt("Enter your age"))
let height = Number(prompt("Enter your height in cm"))

if (age6 < 0 || height < 0) {
    console.log("Invalid data")
} else if (age6 >= 12 && height >= 140) {
    console.log("You can ride")

    if (age6 >= 18 && height >= 180) {
        console.log("VIP access")
    }
} else {
    console.log("You cannot ride")
}


// 7
let number7 = 45

if (number7 >= 10 && number7 <= 50) {
    console.log("Inside range")
} else {
    console.log("Outside range")
}

if (number7 % 2 === 0 && number7 > 20) {
    console.log("Special even number")
}

if (number7 % 2 !== 0 && number7 < 30) {
    console.log("Special odd number")
}

if (number7 === 25 || number7 === 50) {
    console.log("Exact match")
}


// 8
let score1 = Number(prompt("Enter first exam score"))
let score2 = Number(prompt("Enter second exam score"))
let score3 = Number(prompt("Enter third exam score"))
let age8 = Number(prompt("Enter your age"))

let average8 = (score1 + score2 + score3) / 3

if (
    score1 < 0 || score1 > 100 ||
    score2 < 0 || score2 > 100 ||
    score3 < 0 || score3 > 100
) {
    console.log("Invalid score")
} else if (score1 < 50 || score2 < 50 || score3 < 50) {
    console.log("Rejected")
} else if (score1 >= 80 && score2 >= 80 && score3 >= 80 && age8 >= 18) {
    console.log("Accepted")

    if (score1 >= 90 && score2 >= 90 && score3 >= 90) {
        console.log("Scholarship candidate")
    }
} else if (
    average8 >= 70 &&
    (score1 < 80 || score2 < 80 || score3 < 80)
) {
    console.log("Waitlisted")
} else {
    console.log("Not accepted")
}





















