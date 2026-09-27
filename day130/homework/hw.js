// 1
const greet = function(name) {
    return `Hello, ${name}!`
}
console.log(greet("Giorgi"))


// 2
const sum = function(a, b) {
    return a + b
}
console.log(sum(5, 10))
console.log(sum(20, 30))
console.log(sum(7, 8))


// 3
const welcome = function(name = "Guest") {
    return `Welcome, ${name}!`
}
console.log(welcome("Goga"))
console.log(welcome())


// 4
const checkAge = function(age) {
    if (age >= 18) {
        return "You are an adult"
    } else {
        return "You are underage"
    }
}
console.log(checkAge(20))
console.log(checkAge(15))


// 5
const checkPrice = function(price) {
    if (price > 100) {
        return "Expensive"
    } else {
        return "Affordable"
    }
}
console.log(checkPrice(150))
console.log(checkPrice(80))


// 6
const calculate = function(num1, num2, operation) {
    if (operation === "+") {
        return num1 + num2
    } else if (operation === "-") {
        return num1 - num2
    } else if (operation === "*") {
        return num1 * num2
    }
}
console.log(calculate(10, 5, "+"))
console.log(calculate(10, 5, "-"))
console.log(calculate(10, 5, "*"))


// 7
const getGrade = function(score) {
    if (score >= 90) {
        return "A"
    } else if (score >= 80) {
        return "B"
    } else if (score >= 70) {
        return "C"
    } else if (score >= 60) {
        return "D"
    } else {
        return "F"
    }
}
console.log(getGrade(85))


// 8
const getFinalPrice = function(price, discount) {
    return price - (price * discount / 100)
}
console.log(getFinalPrice(100, 20))


// 9
const login = function(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login successful"
    } else {
        return "Invalid username or password"
    }
}
console.log(login("admin", "1234"))
console.log(login("user", "1234"))


// 10
const calculatePrice = function(price, quantity, discount = 0) {
    const fullPrice = price * quantity

    if (discount === 10) {
        return fullPrice - (fullPrice * 10 / 100)
    } else if (discount === 20) {
        return fullPrice - (fullPrice * 20 / 100)
    } else {
        return fullPrice
    }
}
console.log(calculatePrice(100, 2))
console.log(calculatePrice(100, 2, 10))
console.log(calculatePrice(100, 2, 20))


// 11
const getResult = function(name, score, bonus = 0) {
    const finalScore = score + bonus

    if (finalScore >= 90) {
        return `${name} - Excellent`
    } else if (finalScore >= 70) {
        return `${name} - Good`
    } else if (finalScore >= 50) {
        return `${name} - Passed`
    } else {
        return `${name} - Failed`
    }
}
console.log(getResult("ნიკა", 85))
console.log(getResult("გიორგი", 65, 10))
console.log(getResult("ანა", 40, 15))


// 12
const calculateDelivery = function(city, distance, isExpress = false) {
    let price

    if (distance <= 5) {
        price = 5
    } else if (distance <= 15) {
        price = 10
    } else if (distance <= 30) {
        price = 20
    } else {
        price = 30
    }

    if (isExpress === true) {
        price += 10
    }

    return `Delivery to ${city}: ${price} GEL`
}
console.log(calculateDelivery("Tbilisi", 20))
console.log(calculateDelivery("Batumi", 10, true))
console.log(calculateDelivery("Kutaisi", 35))


// 13
const bookTicket = function(movie, age, ticketCount = 1) {
    if (ticketCount <= 0) {
        return "Invalid ticket count"
    }

    let price

    if (age < 12) {
        price = 10
    } else if (age <= 17) {
        price = 12
    } else {
        price = 15
    }

    const totalPrice = price * ticketCount

    return `${movie} - ${ticketCount} tickets - ${totalPrice} GEL`
}
console.log(bookTicket("Interstellar", 20, 2))
console.log(bookTicket("Interstellar", 15, 3))
console.log(bookTicket("Interstellar", 10))


// 14
const withdraw = function(balance, amount, fee = 2) {
    if (amount <= 0) {
        return "Invalid amount"
    }

    if (amount + fee > balance) {
        return "Not enough money"
    }

    const remaining = balance - amount - fee

    if (remaining > 1000) {
        return `Withdrawal successful. High balance: ${remaining}`
    } else if (remaining >= 100) {
        return `Withdrawal successful. Balance: ${remaining}`
    } else {
        return `Warning! Low balance: ${remaining}`
    }
}
console.log(withdraw(1500, 200))
console.log(withdraw(500, 200))
console.log(withdraw(50, 40))






















