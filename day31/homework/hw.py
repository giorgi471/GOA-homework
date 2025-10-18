numbers = [1, 2, 3, 4, 5, 6]
numbers[2:4] = [10, 20, 30]
print(numbers)


fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
fruits[0:2] = ["pear", "plum"]
print(fruits)


letters = ["a", "b", "c", "d", "e", "f"]
letters[-3:] = ["x", "y", "z"]
print(letters)


colors = ["red", "green", "blue", "yellow", "black", "white"]
colors[2:6] = ["purple", "orange"]
print(colors)


names = ["გიორგი", "ირმა", "საბა"]
names = ["red", "green", "blue", "yellow", "black", "white"]
print(names)


num = int(input("შეიყვანე რიცხვი: "))
if num % 2 == 0:
    print("Even")
else:
    print("Odd")


numbers = [4, 7, 9, 12, 15, 22]
if numbers[3] % 2 == 0:
    print("Even number")
else:
    print("Odd number")


numbers = [10, 25, 37, 48, 60, 72]
if numbers[-1] % 2 == 0 and numbers[-1] > 50:
    print("ეს რიცხვი არის ლუწი და მეტი 50 ზე")
elif numbers[-1] % 2 != 0 and numbers[-1] < 50:
    print("ეს რიცხვი არის კენტი და ნაკლები 50 ზე")


numbers = [10, 55, 87, 99, 102, 150, 7]
if numbers[5] % 2 == 0 or numbers[5] > 100:
    print("even or more than 100")
elif numbers[3] % 2 != 0 or numbers[3] < 100:
    print("odd or less than 100")
































