// 1
let age1 = 20

console.log(age1 >= 18 ? "Adult" : "Minor")


// 2
let number = 15

console.log(number % 2 === 0 ? "Even" : "Odd")


// 3
let age2 = 20
let hasTicket = true

console.log(age2 >= 18 && hasTicket ? "Allowed" : "Not Allowed")


// 4
let age3 = 16
let isStudent = true

console.log(age3 < 18 || isStudent ? "Discount" : "No Discount")


// 5
let age4 = 20
let isStudent2 = true

console.log(
  age4 < 13 ? "Child" : age4 < 18 ? "Teenager" : isStudent2   ? "Student" : "Adult"
)


// 6
let score = 75
let isPremium = true

console.log(
  score < 50 ? "Beginner" : score < 80   ? "Intermediate"  : isPremium   ? "Pro"  : "Advanced"
)


// 7
let age5 = 19
let hasTicket2 = true
let isVip = false

console.log(
  age5 < 18 ? "Too Young" : !hasTicket2  ? "No Ticket"  : isVip && hasTicket2  ? "VIP Entrance"  : "Normal Entrance"
)






























