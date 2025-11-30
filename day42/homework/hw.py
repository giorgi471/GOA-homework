fruits = ["apple", "banana", "kiwi"]
fruits.extend(["orange", "mango"])
print(fruits)


nums = [10, 20, 30]
nums.extend([40, 50])
print(nums)

names = ["luka", "ani", "saba"]
names.reverse()
print(names)


nums2 = [1, 5, 5, 2, 3, 5]
print(nums2.count(5))


letters = ["a", "b", "a", "c"]
print(letters.count("a"))


names2 = ["luka", "saba", "gio"]
print(names2.index("saba"))


colors = ["red", "green", "blue"]
print(colors.index("blue"))


nums3 = [1, 2, 3]
nums3.extend([7, 8, 9])
print(nums3)


foods = ["pizza", "burger", "salad"]
foods.reverse()
print(foods)


cities = ["batumi", "tbilisi", "kutaisi"]
print(cities.index("tbilisi"))


animals = ["cat", "dog", "cat", "cow"]
print(animals.count("cat"))


fruits = ["apple", "banana"]
fruits.append("grape")
print(fruits)
   




numbers = [1, 2, 3]
numbers.extend([4, 5])
print(numbers)

names = ["goga", "saba"]
names.insert(1, "luka")   
print(names)


items = ["pen", "pencil", "eraser"]
items.pop()              
print(items)


colors = ["red", "green", "blue"]
colors.remove("green")
print(colors)


foods = ["bread", "milk"]
if len(foods) == 2:
    foods.append("cheese")
else:
    foods.append("meat")
print(foods)


nums = [10, 20, 30]
x = int(input("Enter number: "))  
if x in nums:
    print("Already in list")
else:
    nums.append(40)
    print(nums)


letters = ["a", "b", "c"]
A1 = input("Enter letter: ")        
letters.insert(2 , A1)
print(letters)



values = [1, 2, 3, 4]
index = int(input("Enter index: "))
if 0 <= index < len(values):
    values.pop(index)
else:
    print("Index out of range")
print(values)


pets = ["cat", "dog", "hamster"]
pet = input("Enter pet name: ")

if pet in pets:
    pets.remove(pet)
    print("Removed")
else:
    print("Not found")

print(pets)





a = [5, 5, 7]
num = int(input("რიცხვი: "))
if num in a:
    print(a.count(num))
else:
    a.append(num)
    print(a)




nums = [2, 4, 6]
n = int(input("რიცხვი: "))
if n > 0:
    nums.append(n)
else:
    print("Only positive allowed")
print(nums)



















