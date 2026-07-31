# 1
# def to_binary(n):
#     d = 0
#     place = 1

#     while n > 0:
#         digit = n % 2
#         d += digit * place
#         place *= 10
#         n //= 2

#     return d




# 2
# def trailing_zeros(n):
#     count = 0

#     while n > 0 and n % 2 == 0:
#         count += 1
#         n //= 2

#     return count





# 3
# def binary_to_decimal():
#     binary = input("შეიყვანეთ ორობითი სტრინგი: ")
#     decimal = 0

#     for digit in binary:
#         decimal = decimal * 2 + int(digit)

#     return decimal

# print(binary_to_decimal())







# 4
# def to_binary():
#     n = int(input("შეიყვანეთ დადებითი მთელი რიცხვი: "))

#     binary = ""

#     while n > 0:
#         remainder = n % 2
#         binary = str(remainder) + binary
#         n //= 2

#     return binary

# print(to_binary())























