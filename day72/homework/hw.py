# 1
# def maskify(cc):
#     result = ""
#     for i in range(len(cc)):
#         if i < len(cc) - 4:
#             result += "#"
#         else:
#             result += cc[i]
#     return result



# def get_sum(a,b) : 

# total = 0

# if a < b:
# for i in range(a, b + 1):
# total += i

# else:
# for i in range(b, a + 1):
# total += i

# return total



# 3
# def is_isogram(string):
#     string = string.lower()
#     seen = []
    
#     for i in string:
#         if i in seen:
#             return False
#         seen.append(i)
        
#     return True



#4
# def well(x):
#     good_count = 0
#     for i in x:
#         if i == 'good':
#             good_count += 1
    
#     if good_count == 0:
#         return 'Fail!'
#     elif good_count <= 2:
#         return 'Publish!'
#     else:
#         return 'I smell a series!'



#6
# total = 0
# for i in str(abs(number)):
# total += int(i)
# return total

# def sum_digits(number):





#7
# def number(lines):
#     result = []
#     for i in range(len(lines)):
#         result.append(str(i+1) + ": " + lines[i])
#   return result







#8
#  def remove_url_anchor(url):
#     return url.split('#')[0]



#9
#  def position(letter):
#     alphabet = "abcdefghijklmnopqrstuvwxyz"
#     count = 0
    
#     for char in alphabet:
#         count += 1
#         if char == letter:
#             return "Position of alphabet: " + str(count)




#10
#  def add_length(str_):
#     words = str_.split()      
#     result = []                
#     for word in words:     
#         result.append(word + " " + str(len(word))) 
#     return result







