// 1
let numbers = [12, 25, 8, 40, 17, 30]

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])

    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
    }

    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i])
    }

    console.log(numbers[i] * 2)
}


// 2
let names = ["Nika", "Ana", "Giorgi", "Mariam", "Luka"]

for (let i = 0; i < names.length; i++) {
    console.log(names[i])

    if (names[i].length > 4) {
        console.log(names[i])
    }

    if (names[i].startsWith("A")) {
        console.log(names[i])
    }

    console.log(names[i] + "!")
}


// 3
let ages = [12, 17, 20, 15, 25, 16]

for (let i = 0; i < ages.length; i++) {
    ages[i] = ages[i] + 1

    if (ages[i] < 18) {
        ages[i] = 18
    }
}

console.log(ages)


// 4
let prices = [100, 250, 80, 400, 150, 50]
let count = 0

for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
        console.log(prices[i])
    }

    prices[i] = prices[i] + 20

    if (prices[i] > 200) {
        prices[i] = prices[i] - 50
    }

    if (prices[i] < 100) {
        count++
    }
}

console.log(prices)
console.log(count)


// 5
let scores = [45, 90, 67, 32, 100, 75, 50]
let count2 = 0
let max = scores[0]

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i])

    if (scores[i] > 60) {
        console.log(scores[i])
    }

    if (scores[i] < 50) {
        scores[i] = 50
    }

    if (scores[i] >= 70) {
        count2++
    }

    if (scores[i] > max) {
        max = scores[i]
    }
}

console.log(scores)
console.log(count2)
console.log(max)


// 6
let numbers2 = [5, 12, 8, 21, 30, 7, 16]
let newNumbers = []

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] % 2 === 0) {
        newNumbers.push(numbers2[i] * 3)
    }
}

console.log(newNumbers)


// 7
let numbers3 = [12, -5, 8, -20, 0, 15, -3, 7]
let positiveCount = 0
let negativeCount = 0
let sum = 0
let positiveNumbers = []

for (let i = 0; i < numbers3.length; i++) {
    sum = sum + numbers3[i]

    if (numbers3[i] > 0) {
        positiveCount++
        positiveNumbers.push(numbers3[i])
    }

    if (numbers3[i] < 0) {
        negativeCount++
        numbers3[i] = 0
    }
}

console.log(positiveCount)
console.log(negativeCount)
console.log(sum)
console.log(positiveNumbers)
console.log(numbers3)


// 8
let students = ["Nika", "Ana", "Giorgi", "Luka", "Mariam", "Dato"]
let selectedStudents = []
let count3 = 0

for (let i = 0; i < students.length; i++) {
    if (students[i].length > 4) {
        selectedStudents.push(students[i])
    }

    if (students[i].startsWith("M")) {
        console.log("Special student: " + students[i])
    }

    if (students[i].length >= 5) {
        count3++
    }
}

console.log(selectedStudents)
console.log(count3)


// 9
let points = [15, 40, 65, 20, 90, 35, 100]
let count4 = 0

for (let i = 0; i < points.length; i++) {
    if (points[i] < 50) {
        points[i] = points[i] + 10
    }
    else if (points[i] <= 80) {
        points[i] = points[i] + 5
    }
    else {
        points[i] = points[i] - 10
    }

    if (points[i] > 50) {
        count4++
    }
}

console.log(points)
console.log(count4)


// 10
let numbers4 = [12, 5, 30, 18, 7, 42, 15, 60, 9]
let evenNumbers = []
let oddNumbers = []
let modifiedNumbers = []

for (let i = 0; i < numbers4.length; i++) {
    if (numbers4[i] % 2 === 0) {
        evenNumbers.push(numbers4[i])
    }
    else {
        oddNumbers.push(numbers4[i])
    }

    if (numbers4[i] > 20) {
        modifiedNumbers.push(numbers4[i] / 2)
    }
    else if (numbers4[i] < 20) {
        modifiedNumbers.push(numbers4[i] * 2)
    }
}

console.log(evenNumbers)
console.log(oddNumbers)
console.log(modifiedNumbers)
















