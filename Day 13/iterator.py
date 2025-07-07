# Default iterator of for loop

# nums = [10,20,30,40,50]

# for n in nums:
#     print(n, end=" ")


# Custom Iterator
import random

# class MyIterator:
#     def __init__(self, start, end):
#         self.start = start
#         self.end = end
#         self.current = start - 1

#     def __iter__(self):
#         return self

#     def __next__(self):
#         if self.current + 1 < self.end:
#             self.current += 1
#             return self.current
#         else:
#             raise StopIteration

# for i in MyIterator(1, 10):
#     print(i)



class RandomIterator:
    def __init__(self, low, high, count):
        self.high = high
        self.low = low
        self.count = count
        self.counter = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.counter + 1 < self.count:
            self.counter += 1
            return random.uniform(self.low, self.high)
        else:
            raise StopIteration
        
for i in RandomIterator(2, 10, 10):
    print(i)