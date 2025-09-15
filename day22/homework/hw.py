#პიტონში სისის ლემენტებს აქვთ თავიანთი მისამართი ად ამ მისამართებს ეწოდებათ ინდეხსები 


A1 = [4,6,1,5,9,8,3] 


A1[0]  +  A1[1]
A1[5]  -  A1[1]
A1[5]  +  A1[1]
A1[3]  *  A1[0]
A1[5]  -  A1[0]
A1[5]  -  A1[2]
A1[4]  *  A1[6]




A1 = ["gio", "data", "gabi", "kaxa", "dachi", "nika", " murmani", "luka", "vako", "saba"]


print(A1 [5])
print(A1 [3])
print(A1[9])
print(A1[7])






A1 = ["magida", "skami", "saxli", "balishi"]



for i in range(0 , 4):
    print(A1[i])






A1 = ["ვაშლი", "მსხალი", "ატამი", "ბალი", "ქლიავი"]

i = 0
while i < 5:
    print(A1[i])
    i = i + 1



A1 = [10, "banana", 3.14, True, "old_value", 42, "apple"]


A1[3] = "vashli"   
A1[6] = "msxali"   
A1[4] = "atami"    

print(A1)











#True and False or False and True or false and false or true 
#true









animals = ["dog", "cat", "elephant", "lion", "tiger", "bear"]


if animals[3] == "lion":
    print("there is lion on index 3")
else:
    print("there is no lion on index 3")











basket = ["ვაშლი", "ბანანი", "საზამთრო", "ატამი", "ყურძენი"]


print("პირველი ხილი:", basket[0])


print("მესამე ხილი:", basket[2])


basket[1] = "მსხალი"


print("ყველა ხილი ინდექსებით:")
print(basket[0])
print(basket[1])
print(basket[2])
print(basket[3])
print(basket[4])






letters = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]


print("მესამე ასო:", letters[2])


print("მე–5 და მე–6 ასო:", letters[4], letters[5])


print("ბოლო ასო:", letters[0])


word1 = letters[6] + letters[5] + letters[6] + letters[5]
print("სიტყვა მამა:", word1)


word2 = letters[2] + letters[3] + letters[4] + letters[5]
print("სიტყვა გოლა:", word2)


word3 = letters[2] + letters[3] + letters[2] + letters[5]
print("სიტყვა გოგა:", word3)







letters = ["ა", "ბ", "გ", "ო", "ლ", "ა", "მ", "ა", "ტ", "ე"]




letter_at_index_4 = letters[4]


if letter_at_index_4 == "ლ":
    print("სწორია! ასო ლ ა")
else:
    print("არასწორია, სცადე თავიდან")




last_letter = letters[0]


if last_letter == "ე":
    print("საიდუმლო სიტყვა იწყება სწორად")
else:
    print("საიდუმლო სიტყვა არასწორია")



word = letters[2] + letters[1] + letters[4] + letters[5]  

if word == "გელა":
    print("გაარტყი სახელი!")
else:
    print("შტერი ხარ!დ")






my_list = ["ვაშლი", "ბანანი", "ატამი", "საზამთრო", "ყურძენი", "ფორთოხალი", "მსხალი"]


index = int(input("შეიყვანე ინდექსი (0-დან იწყება): "))


if 0 <= index < 7:
    print("ამ ინდექსზე მდგომი ელემენტია:", my_list[index])
else:
    print("შეყვანილი ინდექსი არასწორია! სცადე სხვა რიცხვი.")























