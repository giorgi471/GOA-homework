// 1
const greet = name => `Hello, ${name}!`


// 2
const calculatePrice = (price, quantity, discount) => discount >= 20 ? price * quantity * (1 - discount / 100) : price * quantity


// 3
const calculateSalary = (salary, bonus) => bonus > 500 ? salary + salary * 0.1 : salary


// 4
const getAgeCategory = age => age <= 12 ? "Child" : age <= 17 ? "Teenager" : age <= 59 ? "Adult" : "Senior"


// 5
const checkExam = (score, maxScore) => score / maxScore * 100 >= 90 ? "Excellent" : 
score / maxScore * 100 >= 75 ? "Very Good" : score / maxScore * 100 >= 60 ? "Passed" : "Failed"


// 6
const withdraw = (balance, amount) => amount <= 0 ? "Invalid amount" : amount > balance ? "Not enough money" : balance - amount


// 7
const checkPassword = password => password.length < 8 ? "Too short" : "Valid password"


// 8
const getOrderPrice = (price, quantity, delivery) => price * quantity + (delivery === "express" ? 15 : 5)


// 9
const calculateFinalPrice = (price, quantity, discount, isMember) => price * quantity * (1 - discount / 100) * (isMember ? 0.9 : 1)


// 10
const roundNumber = number => Math.round(number)


// 11
const floorNumber = number => Math.floor(number)


// 12
const ceilNumber = number => Math.ceil(number)

































