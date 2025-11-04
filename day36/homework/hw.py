A1 = input("შეიყვანე სიტყვა: ")
for aa in A1:
    if aa == 'e' or aa == 'E':
        break
    print(aa)




A1 = input("შეიყვანე წინადადება: ")
if "bad" in A1:
    print("აკრძალული სიტყვა!")
else:
    print("ყველაფერი რიგზეა")




A1 = input("შეიყვანე წინადადება: ")
for aa in A1:
    if aa == " ":
        continue
    print(aa)




A1 = input("შეიყვანე წინადადება: ")
for aa in A1:
    if aa in "aeiouAEIOU":
        continue
    print(aa)






while True:
    A1 = input("შეიყვანე ტექსტი: ")
    if A1 == "python is best":
        break
    print("you should learn python")














