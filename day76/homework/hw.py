# 1
# def dont_give_me_five(start, end):
#     count = 0
#     for n in range(start, end + 1):
#         if '5' not in str(n):
#             count += 1
#     return count



#2
#  def solution(text, ending):
#     if len(ending) > len(text):
#         return False
    
#     for i in range(1, len(ending) + 1):
#         if text[-i] != ending[-i]:
#             return False
#     return True



# 3
# def accum(st):
#     result = []
    
#     for i in range(len(st)):
#         char = st[i]
#         part = char.upper()
        
#         for j in range(i):
#             part += char.lower()
        
#         result.append(part)
    
#     return "-".join(result)







# 4
# def number(bus_stops):
#     total = 0
#     i = 0
    
#     while i < len(bus_stops):
#         total += bus_stops[i][0]
#         total -= bus_stops[i][1]
#         i += 1
    
#     return total











