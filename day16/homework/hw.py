A1 = int(input("shemoitane ricxvi"))

if  A1 >0:
    print("ricxvi dadebitia")
else:
    print("ricxvi uaryopitia")




   

A1 = int(input("შეიყვანეთ თქვენი ასაკი: "))

if A1< 0:
    print("არასწორი ინფო")
elif A1<= 12:
    print("ბავშვი ხარ")
elif A1 <= 19:
    print("მოზარდი/თინეიჯერი ხარ")
elif A1 <= 64:
    print("ზრდასრული ხართ")
elif A1 <= 120:
    print("ხანში შესული ხართ")
else:
    print("გურუ ან ჯადოქარი")









password = "gio741"


attempts = 0

while True:
    A1 = input("გამოიცანი პაროლი (ან დაწერე 'nah strong password' გასასვლელად): ")
    attempts += 1

    if A1 == "nah strong password":
        print("პაროლის გამოცნობა შეწყვიტე.")
        break
    elif A1 == password:
        print("გილოცავ, გამოიცანი პაროლი!")
        print(f"სულ {attempts} ცდა დაგჭირდა.")
        break
    else:
        print("არასწორია, სცადე ხელახლა.")






A1 = int(input("შეიყვანე კვირის დღის ნომერი (1-7): "))

if A1 == 1:
    print("ორშაბათი")
elif A1 == 2:
    print("სამშაბათი")
elif A1 == 3:
    print("ოთხშაბათი")
elif A1 == 4:
    print("ხუთშაბათი")
elif A1 == 5:
    print("პარასკევი")
elif A1 == 6:
    print("შაბათი")
elif A1 == 7:
    print("კვირა")
else:
    print("არ ვიცი ეგ რა დღეა")
























