# 3
# def triangular(n):
#     if n <= 0:
#         return 0
#     return n * (n + 1) // 2





# 4
# from datetime import date

# def age_in_days(year, month, day):
#     birth = date(year, month, day)
#     today = date.today()
#     return f"You are {(today - birth).days} days old"





# 5
# def closest_multiple_10(i):
#     return round(i / 10) * 10



# 6
# def prev_multiple_of_three(n):
#     while n > 0:
#         if n % 3 == 0:
#             return n
#         n //= 10
#     return -1




# 7
# def next_happy_year(year):
#     year += 1

#     while len(set(str(year))) != 4:
#         year += 1

#     return year



# 8
# def is_divisible(n, *args):
#     for x in args:
#         if n % x != 0:
#             return False
#     return True








