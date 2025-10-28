cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi", "Telavi", "Gori"]
for i in cities:
    if len(i) > 6:
        print(i)






words = ["programming", "giogiogiogiogio", "sldkrigjfndjfrk", "girgkrfigjdkfjd"]

for i in words:
    if len(i) % 15 == 0:
        print(i)






numbers = [3, 7, 12, 45, 100, 22]
A1 = 0

for i in numbers:
    A1 = A1 + 1

print(A1)




words2 = ["apple", "peach", "grape", "plum", "melon", "berry"]

for i in words2:
    if len(i) == 5:
        print(i)




A1 = input(" შეიყვანე წინადადება: ")


A2 = 0
for i in A1:
    A2 = A2 + 1
print( A2)


A3 = 0
for i in A1:
    if i == "a" or i == "A":
        A3 = A3 + 1
print( A3)

























