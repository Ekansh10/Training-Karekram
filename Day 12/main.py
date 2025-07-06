# Lambda Functions. One liner function

add = lambda a,b: a+b

print(add(2,3))

print((lambda a,b : a+b)(20,30)) # can be passed to another function as a param

print((lambda n: "Even" if n%2 ==0 else "Odd")(3))

print((lambda a,b,op: a+b if op == "+" else a-b if op == '-' else a*b if op=='*' else a/b )(4,2,'/'))

nums = [[10,500],[20,300],[15,600],[30,250]]
print(nums)
nums.sort( key=lambda ele:ele[1]) #based on the second ele
print(nums)
nums.sort( key=lambda ele:ele[1]+ele[0])
print(nums)
nums.sort(reverse=True)
print(nums)


def get_sum(*nums):
    t = 0
    print(type(nums))
    for n in nums:
        t += n
    return t



print(get_sum(2,3))
print(get_sum(2,3,4))


def printObj(**objs):

    print(type(objs))
    for obj in objs:
        print(obj)
        print(objs[obj])


<<<<<<< HEAD
printObj(1,2,3,name="Ekansh", age=20, skill="python") 
# positional arguments should be passed first before keyword arguments
=======
printObj(name="Ekansh", age=20, skill="python")
>>>>>>> refs/remotes/origin/master
