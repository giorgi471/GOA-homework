//1
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

//2
for (let i = 20; i >= 1; i--) {
    console.log(i)
}

//3
for (let i = 50; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//4
let sum = 0

for (let i = 1; i <= 100; i++) {
    sum += i
}

console.log(sum)

//5
let num = Number(prompt("შეიყვანე რიცხვი"))

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i)
}

//6
for (let i = 30; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

//7
for (let i = 100; i >= 20; i -= 3) {
    console.log(i)
}

//8
let start = 15
let end = 85
let count = 0
let count3 = 0
let count3and5 = 0

for (let i = start; i <= end; i++) {
    count++

    if (i % 3 === 0) {
        count3++
    }

    if (i % 3 === 0 && i % 5 === 0) {
        count3and5++
    }
}

console.log("რიცხვების რაოდენობა:", count)
console.log("3-ის ჯერადები:", count3)
console.log("3-ისა და 5-ის ჯერადები:", count3and5)

//9
let start2 = -20
let end2 = 30
let positive = 0
let negative = 0
let even = 0
let total = 0

for (let i = start2; i <= end2; i++) {
    if (i > 0) {
        positive++
    } else if (i < 0) {
        negative++
    }

    if (i % 2 === 0) {
        even++
    }

    total += i
}

console.log("დადებითი რიცხვები:", positive)
console.log("უარყოფითი რიცხვები:", negative)
console.log("ლუწი რიცხვები:", even)
console.log("ყველა რიცხვის ჯამი:", total)













