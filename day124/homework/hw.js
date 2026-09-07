let num1 = 20
let num2 = 5

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num1 ** num2)



const name = "Gio"
const surname = "Manjgaladze"
const address = "Tbilisi"
const country = "Georgia"

console.log("My name is " + name +" my surname is " + surname +" and I live in " + address + "  " + country + ".")





let myName = "   Giorgi   "

num = myName.trim().toUpperCase()

console.log(num)






let myText = "   HELLO WORLD   "

tx = myText.trim().toLowerCase()

console.log(tx)




let tex = "   Hello,   my name is Gio.   "


tex1 = tex.trim().replace("Hello", "Hi")

console.log(tex1)







let message = "JavaScript is hard. JavaScript is interesting. I love JavaScript."

newMessage = message.replaceAll("JavaScript", "JS")

console.log(newMessage)







let password = "Gio12345"

result = password.slice(0, 2) + "*".repeat(6)

console.log(result)






let username = "   GioManjgaladze   "


user = username.trim().slice(0, 5)

console.log(user)









let Text = "I like cats. Cats are cute. My cat is sleeping.";

text = Text.replace("cats", "dogs").replace("cat", "dog").replace("Cats", "Dogs")

console.log(text)







let sentence = "JavaScript is one of the most popular programming languages"

 result = sentence.slice(0, 25) + "..."

console.log(result)







let code = "AB-12-CD-34"

code1 = code.replaceAll("-", "*").replace(34 ,"##" )

console.log(code1)





let email = "   gio.manjgaladze@gmail.com   "

email1 = email.trim()

username = email1.replace("@gmail.com" , "").replaceAll(".", "_")

console.log(username)




let input = "   Hello!!! My name is Gio!!! I love JS!!!   "

input1 = input.trim().replaceAll("!!!", "!").slice(0, 20) + "..."

console.log(input1)





let phone = " +995-599-12-34-56 "

phone1 = phone.trim().replaceAll("-", "").slice(-9)

console.log(phone1)








let sentenc = "I love JavaScript"

letters = sentenc.replaceAll(" ", "")

console.log(letters.length)






let text1 = "   JavaScript is GREAT!!! JavaScript is POWERFUL!!!   "

text2 = text1.trim().replaceAll("JavaScript", "JS").replaceAll("!!!", "!").slice(0, 30) + "..."

console.log(text2)






