num1 = (input("შეიყვანეთ პირველი რიცხვი: "))
num2 = (input("შეიყვანეთ მეორე რიცხვი: "))
num3 = (input("შეიყვანეთ მესამე რიცხვი: "))


if num1 == num2 == num3:
    print("სამივე ტოლია")
elif num1 == num2:
    print("1 და 2 ტოლია")
elif num1 == num3:
    print("1 და 3 ტოლია")
elif num2 == num3:
    print("2 და 3 ტოლია")
else:
    print("არცერთი არ არის ტოლია")


month = int(input("შეიყვანეთ რიცხვი 1-დან 12 ჩათვლით: "))


if month in [12, 1, 2]:
    print("ზამთარი")
elif month in [3, 4, 5]:
    print("გაზაფხული")
elif month in [6, 7, 8]:
    print("ზაფხული")
elif month in [9, 10, 11]:
    print("შემოდგომა")
else:
    print("გთხოვთ შეიყვანოთ ვალიდური რიცხვი (1-დან 12 ჩათვლით)")




name = input("შეიყვანეთ თქვენი სახელი: ")

if name == "admin":
    password = input("შეიყვანეთ ადმინის პაროლი: ")
    if password == "adminpassword123":
        print("სალამი, ადმინ!")
    else:
        print("წვდომა არ გაქვს!")
else:
    print("სალამი, მომხმარებელო!")

































