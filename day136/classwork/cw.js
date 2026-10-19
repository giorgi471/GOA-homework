// 1)შექმენით სია სადაც იქნება 5 ელემენტი

// შენი დავალებაა სიიდან ამოშალო ბოლო ელემენტი და მის მაგივრად სიის ბოლოში დაამატო "programing"

// 2)შექმენით სია რამდენიმე ელემენტით , შენი დავალებაა სიის თავიდან ამოშალო ელემენტი და მის მაგივრად თავში დაამატო "IT"

// 3)შექმენი სია რამდენიმე ელემენტით, ჯერ ამოშალე პირველი და ბოლო ელემენტები და შემდეგ მათ მაგივრად დაამატე თქვენთვის სასურველი ელემენტები




// //1
// let name = ["gio" , "data" , "gocha" , "dato", "bacho"]

// name.pop()

// name.push( "programing")

// console.log(name)

// //2

// let name1 = ["gio" , "data" , "gocha" , "dato", "bacho"]

// name1.shift()

// name1.unshift("IT")

// console.log(name1)

// //3 

// let name2 = ["gio" , "data" , "gocha" , "dato", "bacho"]


// name2.pop()
// name2.shift()
// name2.push( "programing")
// name2.unshift("IT")










// 4) let list = [ [1, 2] , ["goga" , "nika"] , [true , false] , ["gio" , 10] , [true, 10.5] ]

// თქვენი დავალებაა სიიდან ამოშალთ პირველი და ბოლო ელემენტები 

// შემდეგ შექმენით ცვლადის ადაც შეინახავთ ზემოთ მოცემული სიიდან ყველა ელემენტს მოთავსებული ერთ სიაში .flat()

// შემდეგ ამ ახალ სიაში დაამატე თავშიდა ბოლოში ელემენტები

// ბოლოს შეამოწმე არის თუ არა მიღებული შედეგი სია





// let list = [ [1, 2] , ["goga" , "nika"] , [true , false] , ["gio" , 10] , [true, 10.5] ]

// list.pop()
// list.shift()

// let list2 = list.flat()

// list2.push( "programing")
// list2.unshift("IT")




// console.log(list2)




// let name = [1, 2 ,"goga" , "nika",true , false ] 

// let name2 = [1, 2 ,"goga" , "nika",true , false ] 

// let name3 = name.concat(name2)


// console.log(name3)






// 6)let names = ["goga" , "lasha" , "irakli" , "irma" , "ia" , "ana" , "lulu"]

// თქვენი დავალებაა ამოიღოთ ამ სიიდან LASHA IRAKLI IRMA IA და ამ ელემენტებისაგან შექმნათ ახალი სია , გამოიტანეთ კონსოლში ახალი სია

// 7)let names = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]

// თქვენი დავალებაა ამ სიიდან ამოშალოთ 10 ,false , irakli , true და ამ ელემენტების მაგივრად ჩაამატოთ "Tbilisi"  , "gori"

// ეს ყვლეაფერი მოხდეს ორიგინალ სიაში

// 8)let names = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]

// ამ სიიდან ამოშალეთ irma true ia ana და გამოიტანეთ ახალი სია სადაც ეს ელემენტები იქნება წაშლილი


//6

let names = ["goga" , "lasha" , "irakli" , "irma" , "ia" , "ana" , "lulu"]

let name2 = names.toSpliced(1,4)

console.log(name2)

//7
let names1 = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]

names1.Spliced(2,5 ,  "Tbilisi"  , "gori")

console.log(names1)


//8
let names2 = ["goga" , "lasha" , 10 , false , "irakli" , "irma" , true ,  "ia" , "ana" , "lulu"]


let names3 = names2.toSpliced(5,4)

console.log(names3)

