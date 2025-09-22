numbers = [3, 7, 1, 9, 4, 6, 2]


product = numbers[-7] * numbers[-1]
print("პირველი და ბოლო ელემენტის ნამრავლი:", product)


print("მესამე ელემენტი მარცხნიდან:", numbers[2])
print("მესამე ელემენტი მარჯვნიდან:", numbers[-3])




fruits = ["apple", "banana", "cherry", "grape", "kiwi", "orange"]


print("შუა ელემენტები დადებითი ინდექსით:", fruits[2], "და", fruits[3])
print("შუა ელემენტები უარყოფითი ინდექსით:", fruits[-4], "და", fruits[-3])


numbers = [3, 4, 5, 6, 7, 1, 2, 9, 8, 11]


user_input = int(input("შეიყვანე ინდექსი (0-დან 9-მდე): "))



if 0 <= user_input < 10:
    print("შერჩეული ელემენტია:", numbers[user_input])
else:
    print("you entered negative or more than 10 number")





words = ["dog", "most", "is", "angry", "running", "forest", "fast", "in", "cat", "human", "very"]


print("სია შექმნილია:", words)

A1 =  words[-11] + words[-9] + words[-7] + words[-4] + words[-6] + words[-1] + words[-5]

print(A1)

A2 = words[0] + words[2] + words[4] + words[7] + words[5] + words[10] + words[6] 

print(A2)







animals = ["dog", "cat", "horse", "cow", "sheep", "goat"]

index = int(input("შეიყვანე ინდექსი (0-დან 5-მდე): "))


selected_animal = animals[index]


if selected_animal == "cat":
    print("შენ აირჩიე კატა")
elif selected_animal == "goat":
    print("შენ აირჩიე თხა")
else:
    print("სხვა ცხოველი აირჩიე")






word = input("შეიყვანე სიტყვა: ")

if word[0] == "a":
    print("სიტყვა იწყება a-თი")
elif word[-1] == "z":
    print("სიტყვა მთავრდება z-ით")
else:
    print("სიტყვა არც a-თი იწყება და არც z-ით მთავრდება")




word = input("შეიყვანე სიტყვა: ")

if word[0] == word[-1]:
    print("პირველი და ბოლო ერთნაირია")
else:
    print("პირველი და ბოლო განსხვავებულია")





A1 = "agivorsbgitr"



A2 =  A1[1] +  A1[4] + A1[4] +  A1[0]

print(A2)


A3 = A1[6] +  A1[0] +  A1[7] +  A1[0]


print(A3)



A4 = A1[7] +  A1[10] + A1[9] +  A1[2] + A1[3] + A1[0] +  A1[-1]


print(A4)




























