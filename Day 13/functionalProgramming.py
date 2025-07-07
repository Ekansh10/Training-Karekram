# map is the function to change the every element from the iterator

nums = [10,20,30, 3, 7, 9]

sq = list(map(lambda x:x*x, nums))

print(sq)

sq = list(filter(lambda x : x%2 == 0, nums))
print(sq)