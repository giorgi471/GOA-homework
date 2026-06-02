# 1
# def spacey(array):
#     result = []
#     s = ""

#     for word in array:
#         s += word
#         result.append(s)

#     return result

# 2
# def cube_odd(arr):
#     s = 0

#     for i in arr:
#         if type(i) == bool or (type(i) != int and type(i) != float):
#             return None

#         if i ** 3 % 2 != 0:
#             s += i ** 3

#     return s





# 3    ?


# 4   ?

# 5
# def solution(value):
#     value = str(value)

#     while len(value) < 5:
#         value = "0" + value

#     return "Value is " + value



# 6 ?


# 7
# def last_survivor(letters, coords):
#     letters = list(letters)

#     for i in coords:
#         letters.pop(i)

#     return letters[0]




# 8
# def solve(s):
#     vowels = "aeiou"
#     longest = 0
#     current = 0

#     for i in s:
#         if i in vowels:
#             current += 1
#             if current > longest:
#                 longest = current
#         else:
#             current = 0

#     return longest




# 9   ?


#10
# def is_nice(arr):
#     if not arr:
#         return False

#     for n in arr:
#         if n - 1 not in arr and n + 1 not in arr:
#             return False

#     return True




















