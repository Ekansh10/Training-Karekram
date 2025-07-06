# unpacking
nums = [1,2,3]
n1,n2,n3 = nums
print(n1, n2, n3)

# merging
nums2 = [4,5,6]

nums3 = [*nums, *nums2]
print(nums3)

print(type(int))

r = range(1,10)
print(r.__sizeof__())

for i in range(1,21):
    print(i/10)

