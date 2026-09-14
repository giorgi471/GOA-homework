let age = Number(prompt("შეიყვანე ასაკი:"))

if (age < 0) {
    console.log("არასწორი ასაკი")
} else if (age >= 18) {
    console.log("სრულწლოვანი ხარ")
} else {
    console.log("არასრულწლოვანი ხარ")
}

console.log("____________________________")




let password = prompt("შეიყვანე პაროლი:").trim()

if (password === "") {
    console.log("პაროლი არ შეგიყვანია")
} else if (password === "javascript123") {
    console.log("სწორი პაროლია")
} else {
    console.log("არასწორი პაროლი")
}


console.log("________________________")


let number = Number(prompt("შეიყვანე რიცხვი:"))

if (number > 0) {
    console.log("დადებითი")
} else if (number < 0) {
    console.log("უარყოფითი")
} else {
    console.log("ნული")
}



console.log("____________________")


let name = prompt("შეიყვანე სახელი:").trim().toLowerCase()

if (name === "goga") {
    console.log("გამარჯობა, გოგა!")
} else if (name === "admin") {
    console.log("მოგესალმები ადმინისტრატორო!")
} else {
    console.log("მომხმარებელი ვერ მოიძებნა")
}



console.log("___________________")



let email = prompt("შეიყვანე ელფოსტა:").trim().toLowerCase()

if (email === "admin@gmail.com") {
    console.log("ადმინისტრატორის ანგარიში")
} else if (email.slice(-10) === "@gmail.com") {
    console.log("Gmail-ის მომხმარებელი")
} else if (email.slice(-12) === "@outlook.com") {
    console.log("Outlook-ის მომხმარებელი")
} else {
    console.log("უცნობი ელფოსტის მისამართი")
}

console.log("______________________")



let username = prompt("შეიყვანე მომხმარებლის სახელი:").trim()

if (username === "") {
    console.log("სახელი აუცილებელია")
} else if (username.length < 3) {
    console.log("სახელი ძალიან მოკლეა")
} else if (username.length > 12) {
    console.log("სახელი ძალიან გრძელია")
} else if (username.slice(0, 5).toLowerCase() === "admin") {
    console.log("ადმინისტრატორის სახელის გამოყენება აკრძალულია")
} else {
    console.log("მომხმარებლის სახელი მიღებულია")
}


console.log("_________________")



let text = prompt("შეიყვანე ტექსტ:").trim().toLowerCase()

if (text === "open sesame") {
    console.log("საიდუმლო კარი გაიღო")
} else if (text.slice(0, 4) === "open") {
    console.log("კოდი არასრულია")
} else if (text.slice(0, 5) === "close") {
    console.log("კარი დაიხურა")
} else if (text.length < 5) {
    console.log("ტექსტი ძალიან მოკლეა")
} else {
    console.log("უცნობი ბრძანება")
}

console.log("_____________")




let age1 = Number(prompt("შეიყვანე ასაკი:"))
let ticketType = prompt("შეიყვანე ბილეთის ტიპი:").trim().toLowerCase()
let name1 = prompt("შეიყვანე სახელი:").trim()

if (age1 <= 0) {
    console.log("არასწორი ასაკი")
} else if (ticketType !== "vip" && ticketType !== "standard") {
    console.log("ბილეთის ტიპი არასწორია")
} else {
    let price

    if (age1 < 12) {
        price = 5
    } else if (age1 <= 17) {
        price = 8
    } else {
        price = 15
    }

    if (ticketType === "vip") {
        price = price + 10
    }

    if (name1.toLowerCase() === "admin") {
        price = 0
        console.log("ადმინისტრატორისთვის ბილეთი უფასოა")
    }

    console.log("მომხმარებელი:", name1)
    console.log("გადასახდელი თანხა:", price, "ლარი")
}



console.log("__________________")



let sentence = prompt("შეიყვანე წინადადება:").trim()

if (sentence === "") {
    console.log("ტექსტი არ შეგიყვანია")
} else {
    if (sentence.slice(0, 10).toLowerCase() === "javascript") {
        console.log("ეს ტექსტი JavaScript-ზეა")
    }

    if (sentence.length > 20) {
        console.log(sentence.slice(0, 10))
    }

    if (sentence.slice(-1) === "!") {
        console.log("ტექსტი ემოციურია")
    }

    if (sentence.slice(-1) === "?") {
        console.log("ეს შეკითხვაა")
    }

    if (sentence.includes("bad")) {
        console.log(sentence.replaceAll("bad", "good"))
    } else {
        console.log(sentence.toUpperCase())
    }
}













