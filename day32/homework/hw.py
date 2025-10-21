for i in range(1, 51):
    if i % 2 == 0:
        print(i, "ლუწია")
    else:
        print(i, "კენტია")



for i in range(21):
    if i % 3 == 0 and i % 5 == 0:
        print(i, "იყოფა 3-ზე და 5-ზე")
    elif i % 3 == 0:
        print(i, "იყოფა 3-ზე")
    elif i % 5 == 0:
        print(i, "იყოფა 5-ზე")
    else:
        print(i, "არ იყოფა")



A1 = int(input("შეიყვანე რიცხვი: "))
x = 0
y = 0
for i in range(A1 + 1):
    if i % 2 == 0:
        x = x + 1
    else:
        y = y + 1
print("ლუწი რიცხვების რაოდენობა:", x)
print("კენტი რიცხვების რაოდენობა:", y)




nums = [10, 25, 33, 47, 80, 99]
for i in range(0 , 6):
    if i > 50:
        print(i, "მეტი 50-ზე")
    else:
        print(i, "ნაკლები 50-ზე")



A1 = 0
for i in range(0, 101):
    if i % 2 == 0:
        print(i)
        A1 = A1 + i
print("ლუწი რიცხვების ჯამია:", A1)



words = ["apple", "banana", "avocado", "pear"]
for i in range(0 , 4):
    if i[0] == "a":
        print(i)




for i in range(21):
    if i == 0:
        print(i, "ნულია")
    elif i % 2 == 0:
        print(i, "ლუწია")
    else:
        print(i, "კენტია")









A1 = [5, 15, 25, 35, 45, 55]

for i in range(0 ,6 ):
    if A1 % 5 == 0:
        print(A1)








A1 = input("შეიყვანე სიტყვა: ")

print("სიტყვის ასოები:")
for i in A1:
    print(i)





A1 = 0

for i in range(1, 11):
    A1 = A1 + i

print("ჯამი არის:", A1)







