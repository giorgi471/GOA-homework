// 1)
let products = ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"]

products.unshift("Mouse")
products.push("Headphones", "Speaker")

let removed = products.shift()
let index = products.indexOf("Monitor")

products.splice(products.indexOf("Tablet"), 1, "Smartwatch")

let part = products.slice(2, 5)
let result = products.join(" | ")

console.log(products, removed, index, result, part)


// 2)
let text = "HTML,CSS,JavaScript,React,Node.js,Python"

let arr = text.split(",")
arr.unshift("Git")
arr.push("TypeScript")

let react = arr.indexOf("React")

arr.splice(arr.indexOf("CSS"), 2)

let first = arr.slice(0, 4)
let str = first.join(" - ")
let finalArr = str.split(" - ")

console.log(arr, react, first, str, finalArr)


// 3)
let students = ["Nika", "Ana", "Gio", "Mariam", "Luka", "Saba", "Elene"]

students.unshift("Data", "Tako")
students.pop()

let mariam = students.indexOf("Mariam")

students.splice(students.indexOf("Gio"), 2)
students.splice(students.indexOf("Luka"), 0, "Irakli")

let last = students.slice(-4)
let names = last.concat(["Giorgi", "Salome"])
let strNames = names.join(", ")
let arrNames = strNames.split(", ")

console.log(students, mariam, last, names, strNames, arrNames)
console.log(Array.isArray(arrNames))


// 4)
let scores = [45, 78, 92, 34, 88, 67, 100, 56]

scores.unshift(50)
scores.push(73, 85)

let idx = scores.indexOf(92)

scores.splice(scores.indexOf(34), 2)
scores.splice(scores.indexOf(67), 1, 70)

let half = scores.slice(scores.length / 2)
let resultScores = half.concat([95, 81, 60])

resultScores.pop()
resultScores.unshift(99)

let strScores = resultScores.join(" / ")
let arrScores = strScores.split(" / ")

console.log(scores, idx, half, resultScores, strScores, arrScores)
console.log(Array.isArray(arrScores))


// 5)
let groups = [
    ["Nika", "Ana", "Gio"],
    ["Mariam", "Luka"],
    ["Saba", "Elene", "Data"]
]

let names2 = groups.flat()

names2.unshift("Tako")
names2.push("Irakli", "Salome")

let luka = names2.indexOf("Luka")

names2.splice(names2.indexOf("Gio"), 1)
names2.splice(names2.indexOf("Mariam"), 1)

let five = names2.slice(0, 5)
let combined = five.concat(["Giorgi", "Sandro"])
let str2 = combined.join(" * ")
let finalNames = str2.split(" * ")

console.log(names2, luka, five, combined, str2, finalNames)
console.log(groups)
console.log(Array.isArray(groups))
