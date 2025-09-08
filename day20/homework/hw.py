print(10 / 2)   
print(9 / 3)    
print(20 / 4)   


print(10 // 3)  
print(20 // 7)  
print(15 // 4)  


print(3 * 4)    
print(5 * 5)    
print(6 * 7)    


print(10 % 3)   
print(15 % 4)   
print(9 % 2)    


print(2 ** 3)   
print(3 ** 2)   
print(4 ** 0)   


# / - გაყოფა: მიღებული შედეგი იქნება ათწილადი
# // - მთელი რიცხვით გაყოფა: გვიბრუნებს მხოლოდ მთელ ნაწილს, ნაშთის გარეშე
# * - გამრავლება: ორ რიცხვს შორის ნამრავლი
# % - ნაშთი: გაყოფის ნაშთს გვიბრუნებს
# ** - ხარისხში აყვანა: ერთი რიცხვი მეორეზე ხარისხში

print(10 / 2)   # 5.0
print(9 / 3)    # 3.0
print(12 / 4)   # 3.0
print(100 / 5)  # 20.0
print(18 / 6)   # 3.0


print(10 // 3)  # 3
print(15 // 4)  # 3
print(20 // 7)  # 2
print(9 // 2)   # 4
print(100 // 15)# 6


print(10 % 3)   # 1
print(14 % 4)   # 2
print(18 % 5)   # 3
print(7 % 2)    # 1
print(20 % 6)   # 2

# 15 / 3 = 5.0
# 20 / 4 = 5.0
# 100 / 20 = 5.0

# 15 // 10 = 1
# 10 // 7 = 1
# 40 // 12 = 3

# 4 * 3 = 12
# 40 * 3 = 120
# 120 * 3 = 360

# 4 ** 3 = 64
# 10 ** 3 = 1000
# 2 ** 6 = 64
# 3 ** 4 = 81

# 10 % 7 = 3
# 3 % 2 = 1
# 50 % 25 = 0
# 14 % 11 = 3
# 110 % 50 = 10

# სიები გამოიყენება ერთზე მეტი მონაცემის ერთ ცვლადში შესანახად.
# სიები შეიძლება შეიცავდეს ერთდროულად სხვადასხვა ტიპის მონაცემებს.
# განსხვავება ცვლადებსა და სიებს შორის ის არის, რომ ცვლადი ინახავს მხოლოდ ერთ მნიშვნელობას,
# ხოლო სია - ერთზე მეტს.



string_list = ["apple", "banana", "hello", "world", "python"]


int_list = [1, 5, 10, 100, 2025]



float_list = [1.5, 2.3, 0.0, 100.99, 3.14]


bool_list = [True, False, True, False, True]



mixed_list = ["hello", 100, 3.14, True,]



a = int(input("შეიყვანე პირველი რიცხვი: "))
b = int(input("შეიყვანე მეორე რიცხვი: "))

print( a / b)
print( a // b)
print( a % b)
print( a * b)
print(a ** b)




A1 = int(input("შეიყვანე მთელი რიცხვი: "))

if 30 < A1 < 100:
    print("between 30 and 100")
elif 100 < A1 < 200:
    print("between 100 and 200")
else:
    print("other number")




a = "hello"
b = 123
c = 3.14
d = True


print(type(a))  
print(type(b))  
print(type(c))  
print(type(d))  




i = 50
while i <= 100:
    print(i)
    i = i + 5




for i in range(40, 91, 3):
    print(i)






for i in range(15):
    print("სათაური გვარი")


i = 0
while i < 15:
    print("სათაური გვარი")
    i = i + 1





my_name = "გიორგი "
my_surname = "მანჯგალაძე"

user_name = input("შეიყვანე შენი სახელი: ")

if user_name == my_name:
    user_surname = input("შეიყვანე შენი გვარი: ")
    if user_surname == my_surname:
        print("same name and surname")
    else:
        print("same name but different surname")
else:
    print("aqedan moshordi")





real_password = "mypassword123"

while True:
    user_password = input("შეიყვანე პაროლი: ")
    if user_password == real_password:
        print("გამოიცანი!")
        break
    else:
        print("არასწორია, სცადე თავიდან!")



