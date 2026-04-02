# def multi_table(number):
#     result = ""
#     for i in range(1, 11):
#         result += str(i) + " * " + str(number) + " = " + str(i * number)
#         if i != 10:
#             result += "\n"
#     return result



#  def first_non_consecutive(arr):
#     for i in range(1, len(arr)):
#         if arr[i] != arr[i - 1] + 1:
#             return arr[i]






# def add_length(str_):
#     words = str_.split()
#     result = []
    
#     for word in words:
#         result.append(word + " " + str(len(word)))
    
#     return result






# def reverse_list(l):
#     return l[::-1]


# def human_years_cat_years_dog_years(human_years):
#     if human_years == 1:
#         cat = 15
#         dog = 15
#     elif human_years == 2:
#         cat = 15 + 9
#         dog = 15 + 9
#     else:
#         cat = 15 + 9 + (human_years - 2) * 4
#         dog = 15 + 9 + (human_years - 2) * 5
    
#     return [human_years, cat, dog]












# def str_count(strng, letter):
#     return strng.count(letter)
