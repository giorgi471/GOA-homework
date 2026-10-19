// 1
let numbers = [10, 20, 30, 40, 50]
let removed = numbers.pop()
console.log(removed)
console.log(numbers)


// 2
let colors = ["Red", "Green", "Blue", "Black"]
let removedColor = colors.shift()
console.log(removedColor)
console.log(colors)
colors.unshift("Red")
console.log(colors)


// 3
let animals = ["Dog", "Cat"]
animals.unshift("Lion")
animals.unshift("Tiger", "Bear")
console.log(animals)



// 4
let nums = [5, 10, 15, 20, 25, 30, 35]
let firstPart = nums.slice(1, 4)
let lastPart = nums.slice(-3)
let withoutFirstTwo = nums.slice(2)
console.log(firstPart)
console.log(lastPart)
console.log(withoutFirstTwo)
console.log(nums)


// 5
let games = ["Minecraft", "GTA", "FIFA", "Roblox", "Fortnite"]
games.splice(1, 1)
console.log(games)
games.splice(1, 1, "eFootball")
console.log(games)
games.splice(1, 0, "Terraria")
console.log(games)




// 6
let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"]
let firstCities = cities.toSpliced(1, 1)
let secondCities = cities.toSpliced(2, 1, "Gori")
let thirdCities = cities.toSpliced(2, 0, "Zugdidi")
console.log(firstCities)
console.log(secondCities)
console.log(thirdCities)
console.log(cities)






// 7
let first = [1, 2, 3]
let second = "JavaScript"
let third = { name: "Goga" }
let fourth = 25
let fifth = ["HTML", "CSS"]
console.log(Array.isArray(first))
console.log(Array.isArray(second))
console.log(Array.isArray(third))
console.log(Array.isArray(fourth))
console.log(Array.isArray(fifth))




// 8
let nestedNumbers = [1, 2, [3, 4], [5, 6]]
let flatNumbers = nestedNumbers.flat()
console.log(flatNumbers)
console.log(nestedNumbers)






// 9
let html = ["HTML", "CSS"]
let javascript = ["JavaScript", "React"]
let web = html.concat(javascript)
console.log(web)





// 10
let fruits = ["Apple", "Banana", "Orange", "Kiwi"]
fruits.push("Mango")
fruits.unshift("Strawberry")
fruits.pop()
fruits.shift()
let newFruits = fruits.slice(0, 2)
console.log(fruits)
console.log(newFruits)




// 11
let toys = ["Car", "Doll", "Ball", "Robot", "Puzzle"]
toys.splice(1, 1, "Teddy Bear")
toys.push("Lego")
let newToys = toys.slice(0, 3)
console.log(toys)
console.log(newToys)






// 12
let numbers2 = [10, 20, 30, 40, 50]
numbers2.splice(2, 1)
console.log(numbers2)
let originalNumbers = [10, 20, 30, 40, 50]
let resultNumbers = originalNumbers.toSpliced(2, 1)
console.log(resultNumbers)
console.log(originalNumbers)






// 13
let teamA = ["Nika", "Ana", "Gio"]
let teamB = ["Mariam", "Luka", "Saba"]
let team = teamA.concat(teamB)
team.unshift("Goga")
team.push("Data")
team.pop()
let newTeam = team.slice(0, 4)
console.log(team)
console.log(newTeam)



// 14
let groupA = ["Nika", "Ana", "Gio"]
let groupB = ["Mariam", "Luka", "Saba"]
let groupC = [["Data", "Elene"], ["Sandro", "Nino"]]

console.log(Array.isArray(groupA))
console.log(Array.isArray(groupB))
console.log(Array.isArray(groupC))

let firstGroup = groupA.concat(groupB)
let secondGroup = groupC.flat()
let thirdGroup = firstGroup.concat(secondGroup)

thirdGroup.unshift("Goga")
thirdGroup.push("Tornike")

thirdGroup.splice(1, 2)

let fourthGroup = thirdGroup.toSpliced(2, 1, "Mariam K.")
let fifthGroup = thirdGroup.slice(2, 5)

thirdGroup.pop()
thirdGroup.shift()

console.log(firstGroup)
console.log(secondGroup)
console.log(thirdGroup)
console.log(fourthGroup)
console.log(fifthGroup)




















