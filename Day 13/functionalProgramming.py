# map is the function to change the every element from the iterator
import functools

nums = [10,20,30, 3, 7, 9]

sq = list(map(lambda x:x*x, nums))

print(sq)

sq = list(filter(lambda x : x%2 == 0, nums))
print(sq)


# reduce function give summary of the iterable item

s = functools.reduce(lambda x, y: x + y, nums) # sum of all elements in iterable item
print(s)

lst = [1,2,10,4]

res = functools.reduce(lambda x, y: (y, x[1] and x[0] <= y) if type(x) == tuple else (y, x <= y), lst)

print(res)
