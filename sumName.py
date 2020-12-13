import string
import re

def sum_name(name):
  result = 0
  alphabet = list(string.ascii_lowercase)
  name = re.sub('[^a-z]', '', name.lower())
  for i in range(len(name)):
    result += (alphabet.index(name[i]) + 1)
  return result

print(sum_name('barent'))

# import string
# import re

# def sum_name(name):
#     result = 0
#     alphabet = list(string.ascii_lowercase)
#     name = re.sub('[^a-z]', '', name.lower())
    
#     for i in range(len(name)):
#         result += (alphabet.index(name[i]) + 1)
        
#     return result

# from solution import sum_name
# import codewars_test as test

# @test.describe("sum_name")
# def tests():
#     # Use "it" to identify the conditions you are testing for
#     @test.it("Should return the sum of all character indices")
#     def test_sum_name():
#         test.assert_equals(sum_name('decker'), 46)
#         test.assert_equals(sum_name('B!lLy binguS'), 123)


from random import randint

def rand_str():
  test_string = []
  possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()/;'
  for i in range(randint(0, len(possible) - 1)):
    test_string.append(possible[randint(0, len(possible))])
  return ''.join(test_string)

print(rand_str())
